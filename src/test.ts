import { McsrClient } from './McsrClient.ts';

const Client = new McsrClient();

console.log(await Client.getUserData('R0dn3yS'));