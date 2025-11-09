import { createORPCClient } from '@orpc/client';
import { RPCLink } from '@orpc/client/fetch';
import type { RouterClient } from '@orpc/server';
import type { RouterType } from '../server/router.js';

const link = new RPCLink({
    url: 'http://localhost:3000',
});

export const orpc: RouterClient<RouterType> = createORPCClient(link);
