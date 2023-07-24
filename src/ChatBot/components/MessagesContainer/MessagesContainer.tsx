import React from "react";
import { useMessageStore } from "src/ChatBot/stores/useMessagesStore";
import { LoadingMessage, MessageBox } from "./MessageBox";

interface MessagesContainerProps extends React.PropsWithChildren {}

export const MessagesContainer: React.FC<MessagesContainerProps> = () => {
  const { messages, isLoading } = useMessageStore();

  return (
    <div className="flex-grow overflow-auto p-2">
      {messages.map((x) => (
        <MessageBox
          key={x.timestamp}
          dir={x.author === "User" ? "right" : "left"}
          {...x}
        />
      ))}
      {isLoading && <LoadingMessage />}
    </div>
  );
};
