export interface IMessage {
  content: string;
  author: string & "User";
  timestamp: number;
}
