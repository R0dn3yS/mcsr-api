import type { UserMatchesOptions } from '../types/UserMatchesOptions.ts';

export function paramBuilder(params: UserMatchesOptions): string {
  let paramString = '';

  for (const [key, value] of Object.entries(params)) {
    paramString += `?${key}=${value}`;
  }

  return paramString;
}