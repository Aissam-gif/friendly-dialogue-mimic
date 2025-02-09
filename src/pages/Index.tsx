
import { useState } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import LoadingDots from "@/components/LoadingDots";

interface Message {
  id: number;
  text: string;
  isAi: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: message,
      isAi: false,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now(),
        text: "This is a simulated AI response. To make this functional, you'll need to connect it to an AI service like OpenAI's API.",
        isAi: true,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 max-w-4xl mx-auto w-full p-4 flex flex-col">
        <div className="flex-1 space-y-4 mb-4">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isAi={message.isAi}
            />
          ))}
          {isLoading && (
            <div className="self-start bg-chat-ai px-4 py-2 rounded-2xl animate-fade-up">
              <LoadingDots />
            </div>
          )}
          {messages.length === 0 && (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-muted-foreground text-center animate-fade-in">
                Send a message to start the conversation.
              </p>
            </div>
          )}
        </div>
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </main>
    </div>
  );
};

export default Index;
