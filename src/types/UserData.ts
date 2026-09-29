import type { Achievement } from './Achievement.ts';

export type UserData = {
  uuid: string;
  nickname: string;
  roleType: number;
  eloRate: number|null;
  eloRank: number|null;
  country: string|null;
  achievements: {
    display: Achievement[];
    total: Achievement[];
  }
  timestamp: {
    nextDecay: number|null;
    firstOnline: number;
    lastRanked: number;
    lastOnline: number;
  }
  statistics: {
    season: {
      bestTime: {
        ranked: number|null;
        casual: number|null;
      }
      highestWinStreak: {
        ranked: number|null;
        casual: number|null;
      }
      currentWinStreak: {
        ranked: number|null;
        casual: number|null;
      }
      playedMatches: {
        ranked: number|null;
        casual: number|null;
      }
      playtime: {
        ranked: number|null;
        casual: number|null;
      }
      completionTime: {
        ranked: number|null;
        casual: number|null;
      }
      forfeits: {
        ranked: number|null;
        casual: number|null;
      }
      completions: {
        ranked: number|null;
        casual: number|null;
      }
      wins: {
        ranked: number|null;
        casual: number|null;
      }
      loses: {
        ranked: number|null;
        casual: number|null;
      }
    }
    total: {
      bestTime: {
        ranked: number|null;
        casual: number|null;
      }
      highestWinStreak: {
        ranked: number|null;
        casual: number|null;
      }
      currentWinStreak: {
        ranked: number|null;
        casual: number|null;
      }
      playedMatches: {
        ranked: number|null;
        casual: number|null;
      }
      playtime: {
        ranked: number|null;
        casual: number|null;
      }
      completionTime: {
        ranked: number|null;
        casual: number|null;
      }
      forfeits: {
        ranked: number|null;
        casual: number|null;
      }
      completions: {
        ranked: number|null;
        casual: number|null;
      }
      wins: {
        ranked: number|null;
        casual: number|null;
      }
      loses: {
        ranked: number|null;
        casual: number|null;
      }
    }
  }
  connections: {
    discord?: {
      id: string;
      name: string;
    }
    twitch?: {
      id: string;
      name: string;
    }
    youtube?: {
      id: string;
      name: string;
    }
  }
  seasonResult: {
    last: {
      eloRate: number|null;
      eloRank: number|null;
      phasePoint: number;
    }
    highest: number|null;
    lowest: number|null;
    phases: Phases[];
    weeklyRaces: WeeklyRaces[];
  }
}

type Phases = {
  phase: number;
  eloRate: number;
  eloRank: number;
  point: number;
}

type WeeklyRaces = {
  id: number;
  time: number;
  rank: number;
}