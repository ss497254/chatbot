import React from "react";
import { useMessageStore } from "src/ChatBot/stores/useMessagesStore";
import { MessageBox } from "./MessageBox";

interface MessagesContainerProps extends React.PropsWithChildren {}

export const MessagesContainer: React.FC<MessagesContainerProps> = () => {
  const { messages } = useMessageStore();

  return (
    <div className="flex-grow overflow-auto">
      {messages.map((x) => (
        <MessageBox
          key={x.timestamp}
          dir={x.author === "User" ? "right" : "left"}
          {...x}
        />
      ))}
    </div>
  );
};
