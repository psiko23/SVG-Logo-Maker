class Shape { 
    constructor() {
        this.color = '';
    }

    setColor(shapeColor) {
        this.color = shapeColor;
    }
}

class Triangle extends Shape {
   render() {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
   }
}

class Circle extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><circle cx="150" cy="100" r="50" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g><rect x="50" y="5" width="200" height="200" fill="${this.color}" />`
    }
}

module.exports = { Triangle, Square, Circle };