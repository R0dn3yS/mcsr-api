# MCSR API

A lightweight, typed TypeScript client for the [MCSR Ranked API](https://api.mcsrranked.com).

Published on [JSR](https://jsr.io/@r0dn3ys/mcsr-api).

## Installation

### Deno

```bash
deno add jsr:@r0dn3ys/mcsr-api
```

### Import

```ts
import { McsrClient } from '@r0dn3ys/mcsr-api';
```

## Quick Start

```ts
import { McsrClient } from '@r0dn3ys/mcsr-api';

const client = new McsrClient();

const user = await client.getUserData('R0dn3yS');

console.log(user);
```

The client uses `https://api.mcsrranked.com` by default.

## Configuration

You can provide a custom API URL when creating the client:

```ts
const client = new McsrClient({
  apiUrl: 'https://api.mcsrranked.com',
});
```

An API key can also be provided through the client options (functionality hasn't been implemented yet):

```ts
const client = new McsrClient({
  apiKey: 'your-api-key',
});
```

## API

### Users

Get information about a user:

```ts
const user = await client.getUserData('R0dn3yS');
```

Get information for a specific season:

```ts
const user = await client.getUserData('R0dn3yS', 10);
```

Get a user's matches:

```ts
const matches = await client.getUserMatches('R0dn3yS', {
  season: 10,
});
```

Get a user's season results:

```ts
const seasons = await client.getUserSeasonResults('R0dn3yS');
```

### Versus

Get statistics for two players:

```ts
const stats = await client.getVersusStats(
  'R0dn3yS',
  'player2',
);
```

A season can optionally be specified:

```ts
const stats = await client.getVersusStats(
  'R0dn3yS',
  'player2',
  10,
);
```

Get matches between two players:

```ts
const matches = await client.getVersusMatches(
  'R0dn3yS',
  'player2',
);
```

Options can be supplied to filter the results:

```ts
const matches = await client.getVersusMatches(
  'R0dn3yS',
  'player2',
  {
    season: 10,
  },
);
```

### Matches

Get recent matches:

```ts
const matches = await client.getRecentMatches();
```

Options can be used to filter the results:

```ts
const matches = await client.getRecentMatches({
  season: 10,
  count: 20,
});
```

Get information about a specific match:

```ts
const match = await client.getMatchInfo(12345);
```

### Live

Get the current live data:

```ts
const live = await client.getLiveData();
```

### Leaderboards

Get the ELO leaderboard:

```ts
const leaderboard = await client.getEloLeaderboard();
```

Options can be used to filter the leaderboard:

```ts
const leaderboard = await client.getEloLeaderboard({
  season: 10,
});
```

Get the phase leaderboard:

```ts
const leaderboard = await client.getPhaseLeaderboard();
```

Get the record leaderboard:

```ts
const leaderboard = await client.getRecordLeaderboard();
```

### Weekly Race

Get the current weekly race leaderboard:

```ts
const weeklyRace = await client.getWeeklyRaceLeaderboard();
```

Get a specific weekly race:

```ts
const weeklyRace = await client.getWeeklyRaceLeaderboard(123);
```

## Available Methods

| Method                       | Description                      |
| ---------------------------- | -------------------------------- |
| `getUserData()`              | Get information about a user     |
| `getUserMatches()`           | Get matches for a user           |
| `getUserSeasonResults()`     | Get a user's season results      |
| `getVersusStats()`           | Get statistics between two users |
| `getVersusMatches()`         | Get matches between two users    |
| `getRecentMatches()`         | Get recent matches               |
| `getMatchInfo()`             | Get information about a match    |
| `getLiveData()`              | Get current live data            |
| `getEloLeaderboard()`        | Get the ELO leaderboard          |
| `getPhaseLeaderboard()`      | Get the phase leaderboard        |
| `getRecordLeaderboard()`     | Get the record leaderboard       |
| `getWeeklyRaceLeaderboard()` | Get a weekly race leaderboard    |

All methods are asynchronous and return typed results.

## Related Projects

* [MCSR Ranked](https://mcsrranked.com/)
* [MCSR Ranked API](https://api.mcsrranked.com/)
* [MCSR Ranked API Documentation](https://docs.mcsrranked.com/)
* [MCSR Ranked OpenAPI specification](https://ranked-oas.mcsr.tools/)

## License

This project is licensed under the **GNU General Public License v3.0 or later**.

See [LICENSE](./LICENSE) for the full license text.

## AI Note

AI hasn't been used for the development of this project, it has however been used to help me write the README and Documentation.
