import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // this is a transcript step
    await step.sleep("wait-a-moment", "20s");
    // this is a summary step
    await step.sleep("wait-a-moment", "10s");

    return { message: `Hello ${event.data.email}!` };
  }
);
