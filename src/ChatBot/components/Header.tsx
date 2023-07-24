import React from "react";
import { CloseIcon, SyncIcon } from "../icons";
import { IconButton } from "./IconButton";
import { useChatOpenStore } from "../stores/useChatOpenStore";

interface HeaderProps extends React.PropsWithChildren {}

export const Header: React.FC<HeaderProps> = () => {
  const { toggleOpen } = useChatOpenStore();

  return (
    <div className="p-2 md:p-4 border-b flex items-center space-x-2">
      <img src="/logo.png" className="h-8 w-8" />
      <h4 className="flex-grow px-2">Chatbot</h4>
      <IconButton>
        <SyncIcon size={18} />
      </IconButton>
      <IconButton onClick={toggleOpen}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};
