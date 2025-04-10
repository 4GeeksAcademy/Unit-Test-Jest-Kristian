test('One euro should be 1.10 dollars', function() {
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.10;
    expect(fromEuroToDollar(3.5)).toBe(3.85);
})