import {UseCase} from './usecases';

describe('use case', () => {
    test('first test', async () => {
        const useCase = new UseCase();

        const result = await useCase.execute();

        expect(result).toBe("OK!");
    })
});
