// footballSpec

describe("ballDancer", function() {

  var ballDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ballDancer = new BallDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(ballDancer.$node).to.be.an.instanceof(jQuery);
  });

});