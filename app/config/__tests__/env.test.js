import env from '../env.config';

describe('Default env settings', () => {
  it('mock should be false', () => {
    expect(env.MOCKAPI).toBe(false);
  });
});
