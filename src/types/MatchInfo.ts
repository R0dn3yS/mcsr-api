import type { MatchSeed } from './MatchSeed.ts';
import type { UserProfile } from './UserProfile.ts';

export type MatchInfo = {
  id: number,
  type: number,
  season: number,
  category: string,
  date: number,
  players: UserProfile[],
  spectators: UserProfile[],
  seed: MatchSeed|null,
  result: {
    uuid: string|null,
    time: number
  },
  forfeited: boolean,
  decayed: boolean,
  rank: {
    season: number|null,
    allTime: number|null
  },
  changes: Change[],
  tag: string|null,
  beginner: boolean,
  vod: Vod[],
  completions: Completion[],
  timelines: Timeline[],
  replayExist: boolean
}

type Change = {
  uuid: string,
  change: number|null,
  eloRate: number|null
}

type Vod = {
  uuid: string,
  url: string,
  startsAt: number
}

type Completion = {
  uuid: string,
  time: number
}

type Timeline = {
  uuid: string,
  time: number,
  type: string
}