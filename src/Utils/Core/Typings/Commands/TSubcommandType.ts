import { AutocompleteInteraction } from "discord.js";
import { ICommandInteraction } from "../Interfaces";
import Client from "../../../Client/CustomClient";

export type TSubcommandType = {
  subcommand: string;
  run: (interaction: ICommandInteraction, client: Client) => void;
  autocomplete: (interaction: AutocompleteInteraction, client: Client) => void;
}