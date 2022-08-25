import { TimeOptions } from '../DateDelta/types';

function convertTime(time: number, format: keyof typeof TimeOptions): number {
  switch (format) {
    case TimeOptions.milliseconds:
      return time;

    case TimeOptions.seconds:
      return time / 1000;

    case TimeOptions.minutes:
      return time / 1000 / 60;

    case TimeOptions.hours:
      return time / 1000 / 60 / 60;

    case TimeOptions.days:
      return time / 1000 / 60 / 60 / 24;

    case TimeOptions.years:
      return time / 1000 / 60 / 60 / 24 / 365;
  }

  return time;
}

export default convertTime;
