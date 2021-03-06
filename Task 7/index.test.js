import { swapCase } from './index';

describe('swapCase', function() {
  test('should return AbC when text are aBc', function() {
    const result = swapCase('aBc');

    expect(result).toBe('AbC');
  });

  test('should return gOOd when text are GooD', function() {
    const result = swapCase('GooD');

    expect(result).toBe('gOOd');
  });

  test('should return HELLO when text are hello', function() {
    const result = swapCase('hello');

    expect(result).toBe('HELLO');
  });

  test('should return 75386 when text are 75386', function() {
    const result = swapCase('75386');

    expect(result).toBe('75386');
  });

  test('should return asdfghjkl when text are ASDFGHJKL', function() {
    const result = swapCase('ASDFGHJKL');

    expect(result).toBe('asdfghjkl');
  });

  test('should return QWERTYUIOP when text are qwertyuiop', function() {
    const result = swapCase('qwertyuiop');

    expect(result).toBe('QWERTYUIOP');
  });

  test('should return clean string when text are clear', function() {
    const result = swapCase('');

    expect(result).toBe('');
  });
});
