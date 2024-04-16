const ErrorRepository = require('./ErrorRepository');

describe('ErrorRepository', () => {
  let errorRepository;

  beforeEach(() => {
    errorRepository = new ErrorRepository();
    errorRepository.addError(404, 'Не найдено');
    errorRepository.addError(500, 'Внутренняя ошибка сервера');
  });

  it('должен правильно переводить коды ошибок', () => {
    expect(errorRepository.translate(404)).toBe('Не найдено');
    expect(errorRepository.translate(500)).toBe('Внутренняя ошибка сервера');
    expect(errorRepository.translate(403)).toBe('Неизвестная ошибка');
  });

  it('должен добавлять новые ошибки в хранилище', () => {
    errorRepository.addError(403, 'Доступ запрещен');
    expect(errorRepository.translate(403)).toBe('Доступ запрещен');
  });
});
