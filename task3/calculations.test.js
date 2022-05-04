class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  substract() {
    return this.num1 - this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }
}

let calc1 = new Calculator;
calc1.num1 = 5;
calc1.num2 = 5;

describe('calc1', () => {
  test('is adding', () => {
    expect(calc1.add()).toBeTruthy;
  });

  test('is not a negative number', () => {
    expect(calc1.add()).not.toBeLessThan(0);
  });

  test('Grand total sum is correct', () => {
    expect(calc1.add()).toBe(10);
  })
});

let calc2 = new Calculator;
calc2.num1 = 200;
calc2.num2 = 150;

describe('calc1', () => {
  test('is substracting correctly', () => {
    expect(calc2.substract()).toBeLessThan(calc2.add());
  });

  test('is not a negative number', () => {
    expect(calc2.substract()).not.toBeLessThan(0);
  });

  test('Grand total substract is correct', () => {
    expect(calc2.substract()).toBe(50);
  })
});

let calc3 = new Calculator;
calc3.num1 = 20;
calc3.num2 = 4;

describe('calc3', () => {
  test('is dividing correctly', () => {
    expect(calc3.divide()).toBe(calc3.num1 / calc3.num2);
  });

  test('is not a negative number', () => {
    expect(calc3.divide()).not.toBeLessThan(0);
  });

  test('Grand total division is correct', () => {
    expect(calc3.divide()).toBe(5);
  })
});


