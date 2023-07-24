import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useClientOnly } from "src/ChatBot/hooks/useClientOnly";
import { useChatOpenStore } from "./stores/useChatOpenStore";
import { ChatScreen } from "./components/ChatScreen";

interface ChatBotProps extends React.PropsWithChildren {}

export const ChatBot: React.FC<ChatBotProps> = () => {
  const { open, toggleOpen } = useChatOpenStore();
  const isMounted = useClientOnly();

  if (!isMounted) return null;

  return createPortal(
    <div className="absolute bottom-6 right-6">
      {open && <ChatScreen />}
      <button onClick={toggleOpen}>
        <img src="/logo.png" className="h-12 w-12" />
      </button>
    </div>,
    document.querySelector("body")!
  );
};
