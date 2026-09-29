import type { UserProfile } from './UserProfile.ts';

export type EloLeaderboard = {
  season: {
    startsAt: number;
    endsAt: number;
    number: number
  }
  users: UserProfileLeaderboard[];
}

interface UserProfileLeaderboard extends UserProfile {
  seasonResult: {
    eloRate: number;
    eloRank: number;
    phasePoint: number;
    highest: number;
    phaseHighest: number;
  }
}