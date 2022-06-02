import './style.css';

import { of, map, Observable, from, concatMap, delay, forkJoin, toArray, tap } from 'rxjs';

of('World')
  .pipe(map((name) => `Hello, ${name}!`))
  .subscribe(console.log);

const rand = () => Math.floor(Math.random() * 3) * 1000;
const delayedEcho = (message) => of(message).pipe(delay(rand()));

const ids = ['1', '2', '3', '4', '5'];
const observables = ids.map(delayedEcho);

from(ids)
  .pipe(
    concatMap(delayedEcho),
    tap(console.log),
    toArray(),
  )
  .subscribe(console.log);


// Open the console in the bottom right to see results.
