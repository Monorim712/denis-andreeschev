import * as migration_20260417_200809_initial from './20260417_200809_initial';

export const migrations = [
  {
    up: migration_20260417_200809_initial.up,
    down: migration_20260417_200809_initial.down,
    name: '20260417_200809_initial'
  },
];
