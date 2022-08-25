export enum TimeFormat {
  'milliseconds',
  'seconds',
  'minutes',
  'hours',
  'days',
  'years',
}

export interface Options {
  timeFormat?: TimeFormat;
  ignoreTz?: boolean;
}
