import { createServer } from 'zeit-now-node-server';
import helloLambda from '../main';

const server = createServer(helloLambda);

// start listening on port 8000
server.listen(8000);
