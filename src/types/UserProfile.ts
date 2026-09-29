export type UserProfile = {
  uuid: string;
  nickname: string;
  roleType: number;
  eloRate: number|null;
  eloRank: number|null;
  country: string|null;
}