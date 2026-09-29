import type { UserProfile } from './UserProfile.ts';

export type PhaseLeaderboard = {
  phase: {
    endsAt: number|null;
    number: number|null;
    season: number;
  }
  users: UserProfileLeaderboard[];
}

interface UserProfileLeaderboard extends UserProfile {
  predPhasePoint: number;
  seasonResult: {
    eloRate: number;
    eloRank: number;
    phasePoint: number;
    highest: number;
    phaseHighest: number|null;
  }
}