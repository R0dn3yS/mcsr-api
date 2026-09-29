import type { UserProfile } from './UserProfile.ts';

export type VersusStats = {
  players: UserProfile[];
  results: {
    ranked: VersusResult;
    casual: VersusResult;
    changes: Record<string, number>;
  }
}

type VersusResult = {
  total: number;
  [uuid: string]: number;
}