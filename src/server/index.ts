import { createServer } from 'node:http';
import { RPCHandler } from '@orpc/server/node';
import { CORSPlugin } from '@orpc/server/plugins';
import { onError } from '@orpc/server';
import { router } from './router.js';

const handler = new RPCHandler(router, {
    plugins: [new CORSPlugin()],
    interceptors: [
        onError((error) => {
            console.error(error);
        }),
    ],
});

const server = createServer(async (req, res) => {
    const result = await handler.handle(req, res, {
        context: { headers: req.headers },
    });

    if (!result.matched) {
        res.statusCode = 404;
        res.end('No procedure matched');
    }
});

server.listen(3000, () => console.log('Listening on localhost:3000'));

export { server };
