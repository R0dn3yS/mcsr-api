import type { UserProfile } from './UserProfile.ts';

export type LiveData = {
  players: number;
  liveMatches: LiveMatch[];
}

type LiveMatch = {
  currentTime: number;
  players: UserProfile[];
  data: Record<string, PlayerData>
}

type PlayerData = {
  liveUrl: string|null;
  timeline: {
    time: number;
    type: string;
  }
}