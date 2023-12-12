function area(shape, width, height) {
    if (shape === 'rectangle') {
        return "".concat(shape, " ").concat(width);
    }
    else {
        return "".concat(shape, " ").concat(width, " ").concat(height);
    }
}
console.log(area("circle", 20));
