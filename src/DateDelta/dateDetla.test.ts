import dateDelta from './dateDelta';
import { TimeFormat } from './types';

describe('DateDelta', () => {
  it('returns 0 when dates are equal', () => {
    const date1 = new Date('07/16/1998');
    const date2 = new Date('07/16/1998');
    expect(dateDelta(date1, date2)).toBe(0);
  });

  it('returns negative difference', () => {
    const date1 = new Date('07/16/1998');
    const date2 = new Date('07/17/1998');
    expect(dateDelta(date1, date2)).toBe(-86400000);
  });

  describe('Options', () => {
    it('returns difference in milliseconds', () => {
      const date1 = new Date('07/16/1998.12:00:01');
      const date2 = new Date('07/16/1998.12:00:00');
      expect(dateDelta(date1, date2, { timeFormat: TimeFormat.milliseconds })).toBe(1000);
    });
    it('returns difference in seconds', () => {
      const date1 = new Date('07/16/1998.12:00:01');
      const date2 = new Date('07/16/1998.12:00:00');
      expect(dateDelta(date1, date2, { timeFormat: TimeFormat.seconds })).toBe(1);
    });
    it('returns difference in minutes', () => {
      const date1 = new Date('07/16/1998.12:00:01');
      const date2 = new Date('07/16/1998.12:00:00');
      expect(dateDelta(date1, date2, { timeFormat: TimeFormat.minutes })).toBe(1 / 60);
    });
    it('returns difference in hours', () => {
      const date1 = new Date('07/16/1998.12:00:01');
      const date2 = new Date('07/16/1998.12:00:00');
      expect(dateDelta(date1, date2, { timeFormat: TimeFormat.hours })).toBe(1 / 60 / 60);
    });
    it('returns difference in days', () => {
      const date1 = new Date('07/16/1998.12:00:01');
      const date2 = new Date('07/16/1998.12:00:00');
      expect(dateDelta(date1, date2, { timeFormat: TimeFormat.days })).toBe(1 / 60 / 60 / 24);
    });
    it('returns difference in years', () => {
      const date1 = new Date('07/16/1998.12:00:01');
      const date2 = new Date('07/16/1998.12:00:00');
      expect(dateDelta(date1, date2, { timeFormat: TimeFormat.years })).toBe(1 / 60 / 60 / 24 / 365);
    });
  });
});
