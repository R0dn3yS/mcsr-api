import type { MatchSeed } from './MatchSeed.ts';
import type { UserProfile } from './UserProfile.ts';

export type RecordLeaderboard = Result[];

type Result = {
  rank: number;
  season: number;
  date: number;
  id: number;
  time: number;
  user: UserProfile;
  seed: MatchSeed;
}