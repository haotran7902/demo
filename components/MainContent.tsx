import { useTranslation } from "@/hooks/useTranslation";
import { TabId } from "@/app/page";
import DeepDive from "./deep-dive/DeepDive";
import { useState } from "react";
import DeepDiveInput from "./deep-dive/deep-dive-input";
import DeepDiveChat, { Message } from "./deep-dive/deep-dive-chat";

interface MainContentProps {
  activeTab: TabId;
}

export default function MainContent({ activeTab }: MainContentProps) {
  const renderContent = () => {
    switch (activeTab) {
      case "docs":
        return <DocsContent />;
      case "deep-dive":
        return <DeepDive />;
      case "tools":
        return <ToolsContent />;
      case "about":
        return <AboutContent />;
      case "settings":
        return <SettingsContent />;
      default:
        return <DocsContent />;
    }
  };

  return (
    <main className="flex grow px-6 custom-bg">
      {renderContent()}
    </main>
  );
}

function DocsContent() {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Placeholder for assistant message
    const assistantMessageId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: assistantMessageId, role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      if (!response.body) throw new Error("No response body");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value);
          const lines = chunk.split("\n");
          
          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6).trim();
              if (data === "[DONE]") {
                done = true;
                break;
              }
              if (data) {
                try {
                  const parsed = JSON.parse(data);
                  if (parsed.text) {
                    setMessages((prev) =>
                      prev.map((msg) =>
                        msg.id === assistantMessageId
                          ? { ...msg, content: msg.content + parsed.text }
                          : msg
                      )
                    );
                  }
                } catch (e) {
                  console.error("Error parsing SSE data", e);
                }
              }
            }
          }
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      // Optional: Handle error state in UI
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full justify-between font-sans overflow-hidden">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
            {t("1014")} {t("1036")}
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
            {t("1037")}
          </p>
        </div>
      ) : (
        <DeepDiveChat messages={messages} />
      )}
      <div className="shrink-0 w-full pt-4">
        <DeepDiveInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}

function ToolsContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t("1016")} {t("1036")}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
        {t("1038")}
      </p>
    </div>
  );
}

function AboutContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t("1018")} {t("1036")}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
        {t("1039")}
      </p>
    </div>
  );
}

function SettingsContent() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
        {t("1019")} {t("1036")}
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg max-w-md">
        {t("1040")}
      </p>
    </div>
  );
}
