import { InteractionReplyOptions } from "discord.js";

export type TReplyOptions = Omit<InteractionReplyOptions, "ephemeral">