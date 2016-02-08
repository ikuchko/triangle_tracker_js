function Triangle(firstSide, secondSide, thirdSide) {
  this.firstSide = firstSide;
  this.secondSide = secondSide;
  this.thirdSide = thirdSide;
}

Triangle.prototype.triangleType = function () {
  if(this.isTriangle()){
    return this.getType();
  } else {
    return "not actually a triangle.";
  }
}

Triangle.prototype.isTriangle = function () {
  // if(((this.firstSide + this.secondSide) <= this.thirdSide) || ((this.firstSide + this.thirdSide) <= this.secondSide) || ((this.secondSide + this.thirdSide) <= this.firstSide)) {
  //   return false;
  // } else {
  //   return true;
  // }
  if((this.firstSide + this.secondSide) <= this.thirdSide) {
    return false;
  } else if ((this.firstSide + this.thirdSide) <= this.secondSide) {
    return false;
  } else if ((this.secondSide + this.thirdSide) <= this.firstSide) {
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


function resetFields() {
    $("input#firstSide").val("");
    $("input#secondSide").val("");
    $("input#thirdSide").val("");
}
$(document).ready(function() {
  $("form").submit(function (event){
    event.preventDefault();
    var firstSide = parseInt($("input#firstSide").val());
    var secondSide = parseInt($("input#secondSide").val());
    var thirdSide = parseInt($("input#thirdSide").val());

    var newTriangle = new Triangle(firstSide, secondSide, thirdSide);
    $(".triangle-type").text(newTriangle.triangleType());

    // $("input#firstSide").val("side" + newTriangle.firstSide);
    // $("input#secondSide").val("side" + newTriangle.secondSide);
    // $("input#thirdSide").val("side" + newTriangle.thirdSide);
    $("#result").show();
    resetFields();
  });

});
