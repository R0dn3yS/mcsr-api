import type { ClientOptions } from './types/ClientOptions.ts';
import { DefaultOptions } from './types/DefaultOptions.ts';
import type { SeasonsData } from './types/SeasonsData.ts';
import type { UserData } from './types/UserData.ts';
import type { UserMatches } from './types/UserMatches.ts';
import type { UserMatchesOptions } from './types/UserMatchesOptions.ts';
import { paramBuilder } from './util/paramBuilder.ts';

export class McsrClient {
  private apiKey?: string|null;
  private apiUrl: string;

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
    const requestUrl = `${this.apiUrl}/users/${user}/matches/${paramString}`;

    const resp = await fetch(requestUrl);

    if (resp.status) {
      const matchesInfo: UserMatches = JSON.parse(await resp.text()).data;

      return matchesInfo
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
}
