import type { UserProfile } from './UserProfile.ts';

export type EloLeaderboard = {
  season: {
    /** Date of season start as UNIX Epoch */
    startsAt: number;
    /** Date of season end as UNIX Epoch */
    endsAt: number;
    /** Season number */
    number: number;
  }
  users: UserProfileLeaderboard[];
}

interface UserProfileLeaderboard extends UserProfile {
  seasonResult: {
    /** Final Elo rate of player in target season */
    eloRate: number;
    /** Final leaderboard rank of player in target season */
    eloRank: number;
    /** Final phase points of player in target season */
    phasePoint: number;
    /** Highest Elo rate of player in target season */
    highest: number;
    /** Highest Elo rate of player in target phase */
    phaseHighest: number;
  }
}