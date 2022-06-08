import Model from './src/modules/Model.js';

describe('Model', () => {
  test('Should return modelTest complete', () => {
    const result = Model();
    // eslint-disable-next-line no-console
    console.log(result);
    expect(result).toBe('modelTest complete');
  });
});