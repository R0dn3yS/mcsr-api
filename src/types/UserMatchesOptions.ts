export interface UserMatchesOptions {
  before?: number,
  after?: number,
  sort?: 'newest'|'oldest'|'fastest'|'slowest',
  count?: number,
  type?: number,
  season?: number,
  excludedecay?: boolean,
}