export enum TimeOptions {
  'milliseconds' = 'milliseconds',
  'seconds' = 'seconds',
  'minutes' = 'minutes',
  'hours' = 'hours',
  'days' = 'days',
  'years' = 'years',
}

export interface Options {
  timeFormat?: keyof typeof TimeOptions;
  ignoreTz?: boolean;
}
