import Model from './src/modules/Model.js';

describe('Model', () => {
  test('Should return Model', () => {
    const result = new Model();
    // eslint-disable-next-line no-console
    console.log(result);
    result.updateLocalStorage([]);
    expect(result.items).toEqual([]);
  });
});
