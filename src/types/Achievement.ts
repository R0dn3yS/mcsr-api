export type Achievement = {
  /** Achievement Identifier */
  id: string;
  /** Timestamp of when the achievement was earned as UNIX Epoch */
  date: number;
  /** Additional data */
  data: string[];
  /** Level of achievement */
  level: number;
  /** Contains the current player's progression of the achievement. It is `null` if the achievement is not a leveling one */
  value: number|null;
  /** Next level goal of the achievement. It is `null` if the achievement is at the max level or not a leveling one */
  goal: number|null;
}