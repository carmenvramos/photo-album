const { counter } = require('./hof');

describe('counter', () => {
  it('counts the number of times it is called' , () => {
    const count = counter();

    expect(count()).toEqual(1);
    expect(count()).toEqual(2);
    expect(count()).toEqual(3);
    expect(count()).toEqual(4);
  });
});

describe('partial add', () => {
  it('partially applies the add function', () => {
    const add2 = partialAdd(2);
    const add5 = partialAdd(5);
    const add100 = add.bind(null, 100);

    expect(add2(5)).toEqual(7);
    expect(add5(5)).toEqual(10);
    expect(add100(30)).toEqual(130);
  });

  it('partially applies add', () => {
    const addPart = partialAdd( 2, 3);
    const add4 = partialAdd(2,2);

    const add4 = curryAdd(4);
    const add4And6 = add4(6);
    const add4And5 = add4(5);
    const result = add4And5(10);

    expect(addPart(0)).toEqual(5);
    expect(add4(2)).toEqual(6);
  });

  it('curries a multiply function' , () => {
    expect(curryMultiply(2)(2)(3)(4)(1)).toEqual(48);
  });

  it('memoizes a function', () => {
    const fn = jest.fn();

    memo(1, 2);
    memo(1, 2);

    expect(fn).toHaveBeenCalledTimes(1);
  })

})