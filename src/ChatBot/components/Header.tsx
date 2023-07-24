import React from "react";
import { CloseIcon, SyncIcon } from "../icons";

interface HeaderProps extends React.PropsWithChildren {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="p-4 border-b flex items-center space-x-3">
      <img src="/logo.png" className="h-8 w-8" />
      <h4 className="flex-grow">Chatbot</h4>
      <SyncIcon />
      <CloseIcon />
    </div>
  );
};
