import React, { use, useEffect } from "react";
import { useMessageStore } from "src/ChatBot/stores/useMessagesStore";
import { LoadingMessage, MessageBox } from "./MessageBox";
import { useScrollToBottom } from "src/ChatBot/hooks/useScrollToBottom";

interface MessagesContainerProps extends React.PropsWithChildren {}

export const MessagesContainer: React.FC<MessagesContainerProps> = () => {
  const { messages, isLoading } = useMessageStore();
  const { ref, scroll } = useScrollToBottom();

  useEffect(scroll, [isLoading]);

  return (
    <div className="flex-grow overflow-auto p-2" ref={ref}>
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
