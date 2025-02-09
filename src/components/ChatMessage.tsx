
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAi: boolean;
  animate?: boolean;
}

const ChatMessage = ({ message, isAi, animate = true }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-2xl max-w-[85%] message-transition",
        animate && "animate-fade-up",
        isAi ? "bg-chat-ai" : "bg-chat-user text-white",
        isAi ? "self-start" : "self-end"
      )}
    >
      <p className="leading-relaxed whitespace-pre-wrap">{message}</p>
    </div>
  );
};

export default ChatMessage;
