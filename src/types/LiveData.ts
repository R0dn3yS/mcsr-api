import type { UserProfile } from './UserProfile.ts';

export type LiveData = {
  /** Concurrent number of players who are connected to the MCSR Ranked server */
  players: number;
  liveMatches: LiveMatch[];
}

type LiveMatch = {
  /** Current time in milliseconds */
  currentTime: number;
  /** Only players with public stream enabled are included */
  players: UserProfile[];
  data: Record<string, PlayerData>
}

type PlayerData = {
  /** Live stream of the player. This is `null` if the player hasn't activated public stream */
  liveUrl: string|null;
  timeline: {
    /** Match time of last player split update in milliseconds */
    time: number;
    /** Timeline identifier of last player split update */
    type: string;
  }
}