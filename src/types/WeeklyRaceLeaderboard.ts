import type { UserProfile } from './UserProfile.ts';

export type WeeklyRaceLeaderboard = {
  id: number;
  seed: {
    overworld: string;
    nether: string;
    theEnd: string;
    rng: string;
  }
  endsAt: number;
  leaderboard: LeaderboardEntry[];
}

type LeaderboardEntry = {
  rank: number;
  player: UserProfile;
  time: number;
  replayExist: boolean;
}