import type { EloLeaderboardOptions } from '../types/EloLeaderboardOptions.ts';
import type { PhaseLeaderboardOptions } from '../types/PhaseLeaderboardOptions.ts';
import type { RecentMatchesOptions } from '../types/RecentMatchesOptions.ts';
import type { RecordLeaderboardOptions } from '../types/RecordLeaderboardOptions.ts';
import type { UserMatchesOptions } from '../types/UserMatchesOptions.ts';
import type { VersusMatchesOptions } from '../types/VersusMatchesOptions.ts';

export function paramBuilder(params: UserMatchesOptions|VersusMatchesOptions|RecentMatchesOptions|EloLeaderboardOptions|PhaseLeaderboardOptions|RecordLeaderboardOptions): string {
  let paramString = '';

  for (const [key, value] of Object.entries(params)) {
    paramString += `?${key}=${value}`;
  }

  return paramString;
}