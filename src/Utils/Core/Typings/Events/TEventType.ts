import { ClientEvents, RestEvents } from "discord.js";
import Client from "../../../Client/CustomClient";

export type TClientEventType<T extends keyof ClientEvents> = {
  name: T,
  once: boolean
  run: (client: Client, ...args: ClientEvents[T]) => void
}

export type TClientRestEventType<T extends keyof RestEvents> = {
  name: T,
  once: boolean
  run: (client: Client, ...args: RestEvents[T]) => void
}