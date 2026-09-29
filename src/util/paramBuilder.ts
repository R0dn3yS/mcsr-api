import type { RecentMatchesOptions } from '../types/RecentMatchesOptions.ts';
import type { UserMatchesOptions } from '../types/UserMatchesOptions.ts';
import type { VersusMatchesOptions } from '../types/VersusMatchesOptions.ts';

export function paramBuilder(params: UserMatchesOptions|VersusMatchesOptions|RecentMatchesOptions): string {
  let paramString = '';

  for (const [key, value] of Object.entries(params)) {
    paramString += `?${key}=${value}`;
  }

  return paramString;
}