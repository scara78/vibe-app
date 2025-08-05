"use client";

import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function ErrorPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-12 rounded-xl shadow-lg bg-red-50 max-w-lg w-full">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
          <AlertCircle className="text-red-600 w-12 h-12" aria-hidden="true" />
        </div>
        <h1 className="text-4xl font-bold text-red-700 text-center mb-2">
          Something went wrong
        </h1>
        <p className="text-lg text-red-600 text-center mb-6">
          An unexpected error has occurred. Please try again or return to the
          homepage.
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            variant="default"
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={() => window.location.reload()}
          >
            Retry
          </Button>
          <Button
            variant="outline"
            className="border-red-600 text-red-700 hover:bg-red-100"
            onClick={() => (window.location.href = "/")}
          >
            Go Home
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return <ErrorPage />;
}
