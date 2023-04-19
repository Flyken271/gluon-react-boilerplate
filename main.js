import * as Gluon from '@gluon-framework/gluon';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

import * as path from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


if ( process.env.NODE_ENV === "development") {
    const Window = await Gluon.open(`http://localhost:3000`, {allowHTTP: true});
}else if (process.env.NODE_ENV === "production" ) {
    const Window = await Gluon.open(`${path.join(__dirname, '../react-gluon/build/index.html')}`);
}