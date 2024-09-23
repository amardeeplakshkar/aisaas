"use client";

import Header from "@/components/Header";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { HelpCircleIcon, MessageCircleCode, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/user-avatar";
import Markdown from "react-markdown";

interface Message {
  text: string;
  type: "user" | "ai";
}

const page = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const chatContainer = document.querySelector(".chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  const onSubmit = async () => {
    if (prompt.trim() === "") return;

    // Append user message to messages
    setMessages((prev) => [...prev, { text: prompt, type: "user" }]);
    setPrompt(""); // Clear prompt after submission

    setLoading(true);

    try {
      const response = await fetch("/api/conversation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPrompt: prompt }),
      });

      const data = await response.json();

      if (data.text !== "Unable to process the prompt. Please try again.") {
        // Append AI response to messages
        setMessages((prev) => [...prev, { text: data.text, type: "ai" }]);
      }
    } catch (error) {
      console.error("Error fetching the chat response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header
        size={30}
        icon="MessageSquare"
        color="violet-700"
        label="Conversation"
        description="Conversational AI"
      />
      <div className="relative h-[78.5dvh] flex justify-center overflow">
        <div className="absolute bottom-5 left-center flex gap-2 items-center">
          <Input
            type="text"
            placeholder="Type a message..."
            value={prompt}
            className="min-w-[320px] sm:min-w-[400px] md:min-w-[500px] h-[50px] pr-12"
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <Button
            size="icon"
            variant="secondary"
            onClick={onSubmit}
            className="hover:scale-110 transition ease-in-out rounded-full"
          >
            <Send size="25" />
          </Button>
        </div>
        <div className="flex-1 rounded-lg shadow-lg max-h-[100dvh] pb-[3rem] overflow-x-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`p-4 items-center gap-2 flex rounded-[20px] ${
                  message.type === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                <div className="p-1 bg-slate-900/10 rounded-full">
                  {message.type === "user" ? <UserAvatar /> : <BotAvatar />}
                </div>
                <Markdown
                  components={{
                    pre: ({ node, ...props }) => (
                      <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-[10rem]">
                        <pre {...props} />
                      </div>
                    ),
                    code: ({ node, ...props }) => (
                      <code className="bg-black/10 rounded-lg p-1" {...props} />
                    ),
                  }}
                  className="text-sm overflow-hidden leading-7"
                >
                  {message.text || ""}
                </Markdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
