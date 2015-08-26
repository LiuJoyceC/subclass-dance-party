// taylorDancerSpec

describe("taylorDancer", function() {

  var taylorDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    taylorDancer = new TaylorDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(taylorDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that moves object's position", function() {
    sinon.spy(taylorDancer, 'setPosition');
    taylorDancer.step();
    expect(taylorDancer.setPosition.called).to.be.true;
  });

  it("should have a property to hold a football object that starts out null", function() {
    sinon.spy(taylorDancer.$node, 'attr');
    taylorDancer.step();
    expect(taylorDancer.hasBall).to.be.equal(null);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(taylorDancer, "step");
      expect(taylorDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(taylorDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(taylorDancer.step.callCount).to.be.equal(2);
    });
  });
});