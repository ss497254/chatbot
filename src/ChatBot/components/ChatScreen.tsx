import React from "react";
import { Header } from "./Header";
import { MessageInputBar } from "./MessageInputBar";
import { useMessageStore } from "../stores/useMessagesStore";

interface ChatScreenProps extends React.PropsWithChildren {}

export const ChatScreen: React.FC<ChatScreenProps> = () => {
  const { addMessage, messages } = useMessageStore();

  return (
    <div className="bg-white rounded-lg flex flex-col overflow-hidden shadow-lg h-[65vh] w-80 md:w-96 lg:w-[456px] absolute bottom-16 right-0">
      <Header />
      {messages.map((x) => (
        <div key={x.timestamp}>{x.content}</div>
      ))}
      <div className="flex-grow"></div>
      <MessageInputBar
        onSend={(content) => {
          addMessage({ content, author: "User" });
        }}
      />
    </div>
  );
};
