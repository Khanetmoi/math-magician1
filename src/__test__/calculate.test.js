import calculate from "../logic/calculate";

describe('Unit tests of calculate.js', () => {
  test('testing 1st operand', () => {
    const testObj = {
      next: null,
      operation: null,
      total: 0,
    };
    const calculation = calculate(testObj, '5');
    expect(calculation.next).toEqual('5');
  });

  test('testing operation', () => {
    const testObj = {
      next: '5',
      operation: null,
      total: 0,
    };
    const calculation = calculate(testObj, 'x');
    expect(calculation.operation).toEqual('x');
  });

  test('testing 2nd operand', () => {
    const testObj = {
      next: null,
      operation: 'x',
      total: '5',
    };
    const calculation = calculate(testObj, '2');
    expect(calculation.total).toEqual('5');
    expect(calculation.next).toEqual('2');
    expect(calculation.operation).toEqual('x');
  });

  test('testing total', () => {
    const testObj = {
      next: '2',
      operation: 'x',
      total: '5',
    };
    const calculation = calculate(testObj, '=');
    expect(calculation.total).toEqual('10');
  });

  it('returns an empty object when given the 0 button name and the current next value is also 0', () => {
    const obj = { total: '100', next: '0', operation: '+' };
    const result = calculate(obj, '0');
    expect(result).toEqual({});
  });

  it('calculates the result of the operation when given the equals button name and there is a current operation and next value', () => {
    const obj = { total: '100', next: '5', operation: '+' };
    const result = calculate(obj, '=');
    expect(result).toEqual({ total: '105', next: null, operation: null });
  });
});