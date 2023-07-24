import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useClientOnly } from "src/ChatBot/hooks/useClientOnly";
import { useChatOpenStore } from "./stores/useChatOpenStore";

interface ChatBotProps extends React.PropsWithChildren {}

export const ChatBot: React.FC<ChatBotProps> = () => {
  const { open, toggleOpen } = useChatOpenStore();
  const isMounted = useClientOnly();

  if (!isMounted) return null;

  return createPortal(
    <div className="absolute bottom-6 right-6">
      {open && (
        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[65vh] w-80 md:w-96 lg:w-[456px] absolute bottom-16 right-0"></div>
      )}
      <button onClick={toggleOpen}>
        <img src="/logo.png" className="h-12 w-12" />
      </button>
    </div>,
    document.querySelector("body")!
  );
};
