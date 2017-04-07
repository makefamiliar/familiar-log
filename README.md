# familiar-log

## Install

```
npm i --save familiar-log
```

## a logger for familiars 

```
import { log } from 'familiar-log';

log('hello');

log('hello', 'world');

log('hello').json({ world: true });

const response = await service.getData(options);

log(`Count: ${response.length}`);
```
