import Model from './src/modules/Model.js';

// test('properly adds Model', () => {
//   const model = [1, 2, 3];
//   expect(Model(model)).toEqual(model);
//   expect(Model(model)).not.toBe(model);
// });

jest.mock('./src/modules/Model.js', () => ({
  __esModule: true,
  default: {
    get: jest.fn().mockResolvedValue({ data: { name: 'Mock model' } }),
  },
}));

describe('Model', () => {
  test('Should return Model', async () => {
    const result = await Model(1);
    // eslint-disable-next-line no-console
    console.log(result);
    expect(result).toBe('Model');
  });
});
