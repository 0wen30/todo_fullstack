import { createServer } from 'http'

import app from "./src/app.js";

const sevidor = createServer(app);

sevidor.listen(process.env.PORT || 3000);