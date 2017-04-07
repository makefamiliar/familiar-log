# familiar-log

🤖 💬 a logger for the familiars

![doctor_strange-make_familiar](https://cloud.githubusercontent.com/assets/285708/24788999/b951fa1c-1b3e-11e7-9312-91a9734de280.jpg)

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
