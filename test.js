const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js');
test('One euro should be 1.10 dollars', () => {
    let valueInDollar = fromEuroToDollar(1);
    expect(valueInDollar).toBe(1.10);
});

const { fromDollarToYen } = require('./app.js');
test('One dollar should be 146.5 yens', () => {
    let valueInYen = fromDollarToYen(1);
    expect(valueInYen).toBe(146.5);
})