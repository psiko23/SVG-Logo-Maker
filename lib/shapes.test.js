const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle Test: ', () => {
    test('Triangle renders correctly: ', () => {
        const triangle = new Triangle();
        triangle.setColor('green');
        const result = triangle.render();
        // console.log(result);
        expect(result).toEqual('<polygon points="150,50 100,150 200,150" fill="green" />');
    });
});

describe('Circle Test: ', () => {
    test('Circle renders correctly: ', () => {
        const circle  = new Circle();
        circle.setColor('red');
        const result = circle.render();
        expect(result).toEqual(`<circle cx="150" cy="100" r="50" fill="red" />`)
    })
});

describe('Square Test: ', () => {
    test('Square renders correctly: ', () => {
        const square = new Square();
        square.setColor('yellow');
        const result = square.render();
        expect(result).toEqual(`<rect width="200" height="200" fill="yellow" />`)
    })
});