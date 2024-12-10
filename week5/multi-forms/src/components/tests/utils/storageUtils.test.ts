import { saveToStorage, getFromStorage, clearStorage } from '../../utils/storageUtils';

describe('storageUtils', () => {
  const key = 'testKey';
  const value = { name: 'John Doe' };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and retrieve data from localStorage', () => {
    saveToStorage(key, value);
    const retrieved = getFromStorage(key);
    expect(retrieved).toEqual(value);
  });

  it('should return null for non-existent keys', () => {
    const retrieved = getFromStorage('nonExistentKey');
    expect(retrieved).toBeNull();
  });

  it('should clear data from localStorage', () => {
    saveToStorage(key, value);
    clearStorage(key);
    const retrieved = getFromStorage(key);
    expect(retrieved).toBeNull();
  });
});
