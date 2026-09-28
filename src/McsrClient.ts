import type { ApiError } from './types/ApiError.ts';
import type { ClientOptions } from './types/ClientOptions.ts';
import { DefaultOptions } from './types/DefaultOptions.ts';
import type { UserData } from './types/UserData.ts';

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

  async getUserData(user: string, season?: number): Promise<UserData|ApiError> {
    let requestUrl = `${this.apiUrl}/users/${user}`;
    if (season) requestUrl += `?season=${season}`;

    const resp = await fetch(requestUrl);

    if (resp.status === 200) {
      const userData: UserData = JSON.parse(await resp.text()).data;

      return userData;
    } else {
      return {
        code: resp.status,
        status: 'WIP'
      }
    }
  }
}
