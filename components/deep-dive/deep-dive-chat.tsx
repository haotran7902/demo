import { User, Bot } from "lucide-react";
import ReactMarkdown from "react-markdown";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface DeepDiveChatProps {
  messages: Message[];
}

export default function DeepDiveChat({ messages }: DeepDiveChatProps) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 custom-text flex flex-col space-y-6 max-w-5xl mx-auto w-full">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex w-full ${
            message.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex space-x-3 max-w-[85%] ${
              message.role === "user" ? "flex-row-reverse space-x-reverse" : "flex-row"
            }`}
          >
            <div
              className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                message.role === "user" ? "bg-blue-500 text-white" : "bg-purple-500 text-white"
              }`}
            >
              {message.role === "user" ? <User size={18} /> : <Bot size={18} />}
            </div>
            
            <div
              className={`px-4 py-3 rounded-2xl ${
                message.role === "user"
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-900 dark:text-blue-100 rounded-tr-sm"
                  : "bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 rounded-tl-sm"
              }`}
            >
              <div className="prose dark:prose-invert max-w-none break-words text-sm md:text-base">
                 <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
