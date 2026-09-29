import { McsrClient } from './McsrClient.ts';

const Client = new McsrClient();

// console.log(await Client.getUserData('R0dn3yS'));
// const data = await Client.getUserMatches('R0dn3yS', {
//   season: 10
// });

const data = await Client.getVersusMatches('R0dn3yS', 'Aqua_Hoshino');

console.log(data);