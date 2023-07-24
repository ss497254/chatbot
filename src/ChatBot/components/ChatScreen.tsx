import React from "react";
import { Header } from "./Header";
import { MessageInputBar } from "./MessageInputBar";
import { MessagesContainer } from "./Messages";
import { MessageSuggestions } from "./MessageSuggestions";

interface ChatScreenProps extends React.PropsWithChildren {}

export const ChatScreen: React.FC<ChatScreenProps> = () => {
  return (
    <div className="bg-white rounded-lg flex flex-col overflow-hidden shadow-lg h-[75vh] w-80 md:w-96 lg:w-[456px] absolute bottom-16 right-0">
      <Header />
      <MessagesContainer />
      <MessageSuggestions />
      <MessageInputBar />
    </div>
  );
};
