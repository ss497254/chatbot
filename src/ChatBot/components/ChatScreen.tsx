import React from "react";
import { Header } from "./Header";

interface ChatScreenProps extends React.PropsWithChildren {}

export const ChatScreen: React.FC<ChatScreenProps> = () => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[65vh] w-80 md:w-96 lg:w-[456px] absolute bottom-16 right-0">
      <Header />
    </div>
  );
};
