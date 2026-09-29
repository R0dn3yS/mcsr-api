export interface RecentMatchesOptions {
  before?: number;
  after?: number;
  count?: number;
  type?: 1|2|3|4;
  tag?: string;
  season?: number;
  includedecay?: boolean;
}