// joyceDancerSpec

describe("joyceDancer", function() {

  var joyceDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    joyceDancer = new JoyceDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(joyceDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that modifies its node's img attribute", function() {
    sinon.spy(joyceDancer.$node, 'attr');
    joyceDancer.step();
    expect(joyceDancer.$node.attr.called).to.be.true;
  });

  it("should have a property to hold a football object that starts out null", function() {
    sinon.spy(joyceDancer.$node, 'attr');
    joyceDancer.step();
    expect(joyceDancer.hasBall).to.be.equal(null);
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(joyceDancer, "step");
      expect(joyceDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(joyceDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(joyceDancer.step.callCount).to.be.equal(2);
    });
  });
});