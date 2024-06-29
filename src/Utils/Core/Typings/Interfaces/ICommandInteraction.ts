import { ChatInputCommandInteraction, GuildMember } from "discord.js";

export interface ICommandInteraction extends ChatInputCommandInteraction {
  member: GuildMember;
}