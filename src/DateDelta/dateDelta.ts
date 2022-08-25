import { Options, TimeOptions } from './types';
import { convertTime } from '../ConvertTime';

function dateDelta(d1: Date, d2: Date, options?: Options): number {
  const d1Milliseconds = d1.getTime();
  const d2Milliseconds = d2.getTime();

  if (d1Milliseconds === d2Milliseconds) {
    return 0;
  }

  const diff = d1Milliseconds - d2Milliseconds;
  const convertedDiff = convertTime(diff, options?.timeFormat ?? TimeOptions.milliseconds);

  return convertedDiff;
}

export default dateDelta;
