export interface IMessage {
  content: string;
  author: "User" | "Bot";
  timestamp: number;
}
