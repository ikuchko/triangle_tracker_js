function Triangle(firstSide, secondSide, thirdSide) {
  this.firstSide = firstSide;
  this.secondSide = secondSide;
  this.thirdSide = thirdSide;
}

Triangle.prototype.triangleType = function () {
  if(this.isTriangle()){
    return this.getType();
  } else {
    return "This is not a triangle";
  }
}

Triangle.prototype.isTriangle = function () {
  if(((this.firstSide + this.secondSide) <= this.thirdSide) || ((this.firstSide + this.thirdSide) <= this.secondSide) || ((this.secondSide + this.thirdSide) <= this.firstSide)) {
    return false;
  } else {
    return true;
  }
}

Triangle.prototype.getType = function () {
  if ((this.firstSide === this.secondSide) && (this.secondSide === this.thirdSide)) {
    return "equilateral";
  }
  if ((this.firstSide === this.secondSide) || (this.secondSide === this.thirdSide) || (this.firstSide === this.thirdSide)) {
    return "isosceles";
  }
  if ((this.firstSide !== this.secondSide) && (this.secondSide !== this.thirdSide) && (this.firstSide !== this.thirdSide)) {
    return "scalene";
  }
}
