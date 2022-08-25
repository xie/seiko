import { TimeFormat } from '../DateDelta/types';

function convertTime(time: number, format: TimeFormat) {
  switch (format) {
    case TimeFormat.milliseconds:
      return time;

    case TimeFormat.seconds:
      return time / 1000;

    case TimeFormat.minutes:
      return time / 1000 / 60;

    case TimeFormat.hours:
      return time / 1000 / 60 / 60;

    case TimeFormat.days:
      return time / 1000 / 60 / 60 / 24;

    case TimeFormat.years:
      return time / 1000 / 60 / 60 / 24 / 365;
  }
}

export default convertTime;
