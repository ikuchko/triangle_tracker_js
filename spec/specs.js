describe('Triangle', function() {
  it("creates a new triangle with all prototypes", function() {
    var testTriangle = new Triangle(1,2,3);
    expect(testTriangle.firstSide).to.equal(1);
    expect(testTriangle.secondSide).to.equal(2);
    expect(testTriangle.thirdSide).to.equal(3);
  });
  it("triangleType method returns 'equilateral' if all sides are the same", function() {
    var testTriangle = new Triangle(2, 2, 2);
    expect(testTriangle.triangleType()).to.equal("equilateral");
  });
  it("triangleType method returns 'isosceles' if all sides are the same", function() {
    var testTriangle = new Triangle(2, 2, 3);
    expect(testTriangle.triangleType()).to.equal("isosceles");
  });
  it("triangleType method returns 'scalene' if no sides are the same", function() {
    var testTriangle = new Triangle(2, 3, 4);
    expect(testTriangle.triangleType()).to.equal("scalene");
  });
  it("method isTriangle return true if one side is greater than sum of the other two", function() {
    var testTriangle = new Triangle(2, 3, 20);
    expect(testTriangle.isTriangle()).to.equal(false);
  });
});
