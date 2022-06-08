import Model from './src/modules/Model.js';

jest.mock('Model');

describe('Model', () => {
  test('Should return Model', async () => {
    const result = await Model(1);
    // eslint-disable-next-line no-console
    console.log(result);
    expect(result).toBe('Model');
  });
});
