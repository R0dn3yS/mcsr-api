import { McsrClient } from './McsrClient.ts';

const Client = new McsrClient();

// console.log(await Client.getUserData('R0dn3yS'));
// const data = await Client.getUserMatches('R0dn3yS', {
//   season: 10
// });

const data = await Client.getMatchInfo(13759934);

console.log(data);