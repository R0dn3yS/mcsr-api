import type { ClientOptions } from './types/ClientOptions.ts';
import { DefaultOptions } from './types/DefaultOptions.ts';
import type { EloLeaderboard } from './types/EloLeaderboard.ts';
import type { EloLeaderboardOptions } from './types/EloLeaderboardOptions.ts';
import type { LiveData } from './types/LiveData.ts';
import type { MatchInfo } from './types/MatchInfo.ts';
import type { PhaseLeaderboard } from './types/PhaseLeaderboard.ts';
import type { PhaseLeaderboardOptions } from './types/PhaseLeaderboardOptions.ts';
import type { RecentMatches } from './types/RecentMatches.ts';
import type { RecentMatchesOptions } from './types/RecentMatchesOptions.ts';
import type { RecordLeaderboard } from './types/RecordLeaderboard.ts';
import type { RecordLeaderboardOptions } from './types/RecordLeaderboardOptions.ts';
import type { SeasonsData } from './types/SeasonsData.ts';
import type { UserData } from './types/UserData.ts';
import type { UserMatches } from './types/UserMatches.ts';
import type { UserMatchesOptions } from './types/UserMatchesOptions.ts';
import type { VersusMatches } from './types/VersusMatches.ts';
import type { VersusMatchesOptions } from './types/VersusMatchesOptions.ts';
import type { VersusStats } from './types/VersusStats.ts';
import type { WeeklyRaceLeaderboard } from './types/WeeklyRaceLeaderboard.ts';
import { paramBuilder } from './util/paramBuilder.ts';

/**
 * Client for the MCSR Ranked API
 */
export class McsrClient {
  /** API Key */
  private apiKey?: string|null;
  /** URL used for reach the API */
  private apiUrl: string;

  /**
   * Create a new Client for the MCSR Api
   * @param options Optional options for the Client
   */
  constructor(options?: ClientOptions) {
    if (options) {
      this.apiKey = options.apiKey ? options.apiKey : null;
      this.apiUrl = options.apiUrl ? options.apiUrl : DefaultOptions.apiUrl!;
    } else {
      this.apiKey = null;
      this.apiUrl = DefaultOptions.apiUrl!;
    }
  }

  async getUserData(user: string, season?: number): Promise<UserData> {
    let requestUrl = `${this.apiUrl}/users/${user}`;
    if (season) requestUrl += `?season=${season}`;

    const resp = await fetch(requestUrl);

    if (resp.status === 200) {
      const userData: UserData = JSON.parse(await resp.text()).data;

      return userData;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getUserMatches(user: string, options?: UserMatchesOptions): Promise<UserMatches> {
    const paramString = options ? paramBuilder(options) : '';
    const requestUrl = `${this.apiUrl}/users/${user}/matches${paramString}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const matchesInfo: UserMatches = JSON.parse(await resp.text()).data;

      return matchesInfo;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getUserSeasonResults(user: string): Promise<SeasonsData> {
    const requestUrl = `${this.apiUrl}/users/${user}/seasons`;

    const resp = await fetch(requestUrl);

    if (resp.status === 200) {
      const seasonsData: SeasonsData = JSON.parse(await resp.text()).data;

      return seasonsData;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getVersusStats(user1: string, user2: string, season?: number): Promise<VersusStats> {
    let requestUrl = `${this.apiUrl}/users/${user1}/versus/${user2}`;
    if (season) requestUrl += `?season=${season}`;

    const resp = await fetch(requestUrl);

    if (resp.status === 200) {
      const versusStats: VersusStats = JSON.parse(await resp.text()).data;

      return versusStats;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getVersusMatches(user1: string, user2: string, options?: VersusMatchesOptions): Promise<VersusMatches> {
    const paramString = options ? paramBuilder(options) : '';
    const requestUrl = `${this.apiUrl}/users/${user1}/versus/${user2}/matches${paramString}`;

    const resp = await fetch(requestUrl);

    if (resp.status === 200) {
      const versusMatches: VersusMatches = JSON.parse(await resp.text()).data;

      return versusMatches;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getRecentMatches(options?: RecentMatchesOptions): Promise<RecentMatches> {
    const paramString = options ? paramBuilder(options) : '';
    const requestUrl = `${this.apiUrl}/matches${paramString}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const recentMatches: RecentMatches = JSON.parse(await resp.text()).data;

      return recentMatches;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getMatchInfo(matchId: number): Promise<MatchInfo> {
    const requestUrl = `${this.apiUrl}/matches/${matchId}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const matchInfo: MatchInfo = JSON.parse(await resp.text()).data;

      return matchInfo;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getLiveData(): Promise<LiveData> {
    const requestUrl = `${this.apiUrl}/live`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const liveData: LiveData = JSON.parse(await resp.text()).data;

      return liveData;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getEloLeaderboard(options?: EloLeaderboardOptions): Promise<EloLeaderboard> {
    const paramString = options ? paramBuilder(options) : '';
    const requestUrl = `${this.apiUrl}/leaderboard${paramString}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const eloLeaderboard: EloLeaderboard = JSON.parse(await resp.text()).data;

      return eloLeaderboard;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getPhaseLeaderboard(options?: PhaseLeaderboardOptions): Promise<PhaseLeaderboard> {
    const paramString = options ? paramBuilder(options) : '';
    const requestUrl = `${this.apiUrl}/phase-leaderboard${paramString}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const phaseLeaderboard: PhaseLeaderboard = JSON.parse(await resp.text()).data;

      return phaseLeaderboard;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getRecordLeaderboard(options?: RecordLeaderboardOptions): Promise<RecordLeaderboard> {
    const paramString = options ? paramBuilder(options) : '';
    const requestUrl = `${this.apiUrl}/record-leaderboard${paramString}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const recordLeaderboard: RecordLeaderboard = JSON.parse(await resp.text()).data;

      return recordLeaderboard;
    } else {
      throw new Error(`Something went wrong`);
    }
  }

  async getWeeklyRaceLeaderboard(id?: number): Promise<WeeklyRaceLeaderboard> {
    let requestUrl = `${this.apiUrl}/weekly-race`;
    if (id) requestUrl += `/${id}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const weeklyRaceLeaderboard: WeeklyRaceLeaderboard = JSON.parse(await resp.text()).data;

      return weeklyRaceLeaderboard;
    } else {
      throw new Error(`Something went wrong`);
    }
  }
}
