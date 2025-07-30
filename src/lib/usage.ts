import { RateLimiterPrisma } from "rate-limiter-flexible";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

const FREE_POINTS = 2;
const PRO_POINTS = 100;
const DURATION = 30 * 24 * 60 * 60; // 30 days
const GENERATION_COST = 1;

// get usage tracker instance from prisma
export async function getUsageTRacker() {
  const { has } = await auth();
  const hasProAccess = has({ plan: "pro" });

  const usageTracker = new RateLimiterPrisma({
    storeClient: prisma,
    tableName: "Usage",
    points: hasProAccess ? PRO_POINTS : FREE_POINTS,
    duration: DURATION,
  });

  return usageTracker;
}

// consume credits from usage tracker
export async function consumeCredits() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const usageTRacker = await getUsageTRacker();
  const result = await usageTRacker.consume(userId, GENERATION_COST);

  return result;
}

// get usage status
export async function getUsageStatus() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const usageTracker = await getUsageTRacker();
  const result = await usageTracker.get(userId);

  return result;
}
