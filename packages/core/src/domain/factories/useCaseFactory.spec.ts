import { useCaseFactory } from './useCaseFactory';

describe('use case factory', () => {
  test('should create a use case', async () => {
    const useCase = useCaseFactory();
    expect(useCase).not.toBeNull();
  });
});
