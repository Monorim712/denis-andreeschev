import * as migration_20260417_200809_initial from './20260417_200809_initial';
import * as migration_20260424_201526 from './20260424_201526';

export const migrations = [
  {
    up: migration_20260417_200809_initial.up,
    down: migration_20260417_200809_initial.down,
    name: '20260417_200809_initial',
  },
  {
    up: migration_20260424_201526.up,
    down: migration_20260424_201526.down,
    name: '20260424_201526'
  },
];
