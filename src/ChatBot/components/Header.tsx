import React from "react";
import { CloseIcon, SyncIcon } from "../icons";
import { IconButton } from "./IconButton";
import { useChatOpenStore } from "../stores/useChatOpenStore";
import { useMessageStore } from "../stores/useMessagesStore";

interface HeaderProps extends React.PropsWithChildren {}

export const Header: React.FC<HeaderProps> = () => {
  const { toggleOpen } = useChatOpenStore();
  const { clearMessages } = useMessageStore();

  return (
    <div className="p-2 border-b flex items-center space-x-1">
      <img src="/logo.png" className="h-8 w-8 mx-2" />
      <h4 className="flex-grow">Chatbot</h4>
      <IconButton onClick={clearMessages}>
        <SyncIcon size={18} />
      </IconButton>
      <IconButton onClick={toggleOpen}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};
