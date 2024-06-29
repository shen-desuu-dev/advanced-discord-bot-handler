import {
  AutocompleteInteraction,
  CommandInteractionOptionResolver,
  PermissionResolvable,
  SlashCommandBuilder,
  SlashCommandOptionsOnlyBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "discord.js";
import { ICommandInteraction } from "../Interfaces";
import Client from "../../../Client/CustomClient";

export type TCommandType = {
  data:
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
    | SlashCommandSubcommandsOnlyBuilder
    | SlashCommandOptionsOnlyBuilder;
  developerOnly: boolean;
  adminsOnly: boolean;
  userPermissions: PermissionResolvable[];
  botPermissions: PermissionResolvable[];
  run: (interaction: ICommandInteraction, client: Client) => void;
  autocomplete: (interaction: AutocompleteInteraction, client: Client) => void;
};
