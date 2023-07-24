export interface IMessage {
  content: string;
  author: string & ("User" | "Bot");
  timestamp: number;
}
