var BallDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer red" style="width:30px;height:30px" src="http://icons.iconarchive.com/icons/martin-berube/sport/256/Football-icon.png"></img>');
  this.setPosition(top, left);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
BallDancer.prototype = Object.create(Dancer.prototype);
BallDancer.prototype.constructor = BallDancer;
