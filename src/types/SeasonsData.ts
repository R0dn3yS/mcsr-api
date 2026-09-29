export type SeasonsData = {
  uuid: string;
  nickname: string;
  roleType: number;
  eloRate: number|null;
  eloRank: number|null;
  country: string|null;
  seasonResults: Record<string, SeasonResult>;
}

type SeasonResult = {
  last: {
    eloRate: number;
    eloRank: number|null;
    phasePoint: number;
    percentile: number|null;
  }
  highest: number;
  lowest: number;
  phases: Phase[];
}

type Phase = {
  phase: number;
  eloRate: number;
  eloRank: number;
  point: number;
}