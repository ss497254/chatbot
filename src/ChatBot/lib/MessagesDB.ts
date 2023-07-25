import { IDBPDatabase, openDB } from "idb";
import { IMessage } from "../types/IMessage";

let db: IDBPDatabase<IMessage>;

export const MessageStoreName = "message-store";

export async function getDBInstance() {
  if (!db)
    db = await openDB("MessagesDB", 1, {
      upgrade(db) {
        db.createObjectStore(MessageStoreName, {
          keyPath: "timestamp",
        });
      },
    });

  return db;
}
