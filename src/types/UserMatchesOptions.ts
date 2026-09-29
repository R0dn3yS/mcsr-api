export interface UserMatchesOptions {
  before?: number;
  after?: number;
  sort?: 'newest'|'oldest'|'fastest'|'slowest';
  count?: number;
  type?: 1|2|3|4;
  season?: number;
  excludedecay?: boolean;
}