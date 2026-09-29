import type { MatchSeed } from './MatchSeed.ts';
import type { UserProfile } from './UserProfile.ts';

export type MatchInfo = {
  /** Match ID */
  id: number;
  /** Match Type
   * 1: Casual match
   * 2: Ranked match
   * 3: Private room match
   * 4: Event mode match
   */
  type: 1|2|3|4;
  /** Season number of match */
  season: number;
  /** Match completions category. Default is `ANY` */
  category: string;
  /** Date of match in UNIX Epoch */
  date: number;
  players: UserProfile[];
  spectators: UserProfile[];
  /** Seed ID if it's a ranked filtered seed. This is not the seed number. It is `null` if the seed is not filtered */
  seed: MatchSeed|null;
  result: {
    /** Winner's UUID. It is `null` if the match was a draw */
    uuid: string|null;
    /** Completion time in milliseconds */
    time: number;
  }
  forfeited: boolean;
  /** Indicates a synthetic match inserted to simulate rank decay due to inactivity, rather than a real match */
  decayed: boolean;
  rank: {
    /** Record rank of current season */
    season: number|null;
    /** Record rank of all-time */
    allTime: number|null;
  }
  changes: Change[];
  /** Special tag of this match. Used to get matches by tag */
  tag: string|null;
  /** Whether beginner mode is enabled in the match */
  beginner: boolean;
  vod: Vod[];
  completions: Completion[];
  timelines: Timeline[];
  /** Whether the match replay exists in the server */
  replayExist: boolean;
}

type Change = {
  /** UUID of player */
  uuid: string;
  /** Amount of changed Elo rate. It is `null` if the match is a placement */
  change: number|null;
  /** Elo rate of the player. It is `null` if the match is a placement */
  eloRate: number|null;
}

type Vod = {
  /** UUID of VOD owner. Only players with public stream activated will be included */
  uuid: string;
  /** VOD URL of this match. */
  url: string;
  /** VOD start date. You can get a timestamp with `{date} - {vod[].startsAt}` */
  startsAt: number;
}

type Completion = {
  /** Player UUID of completion */
  uuid: string;
  /** Match time of completion */
  time: number;
}

type Timeline = {
  /** Player UUID of timeline */
  uuid: string;
  /** Match time of timeline */
  time: number;
  /** Identifier of timeline */
  type: string;
}