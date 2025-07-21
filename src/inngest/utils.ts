import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, TextMessage } from "@inngest/agent-kit";

export async function getSandbox(sandboxId: string) {
  const sandbox = await Sandbox.connect(sandboxId);
  return sandbox;
}

// Find the index of the last message with the role "assistant" in the result.output array.
// Get the message at that index, casting it to either a TextMessage or undefined.
// If the message exists and has content, return the content as a string.
// If the content is an array, join its elements into a single string.
export function lastAssistantTextMessageContent(result: AgentResult) {
  // extract the last message with the role "assistant"
  const lastAssistantTextMessageIndex = result.output.findLastIndex(
    (message) => message.role === "assistant"
  );
  // extract the content of the last message
  const message = result.output[lastAssistantTextMessageIndex] as
    | TextMessage
    | undefined;

  return message?.content
    ? typeof message.content === "string"
      ? message.content
      : message.content.map((c) => c.text).join("")
    : undefined;
}
