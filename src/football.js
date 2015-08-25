var BallDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer red" style="width:30px;height:30px" src="http://icons.iconarchive.com/icons/martin-berube/sport/256/Football-icon.png"></img>');
  this.setPosition(top, left);
};
BallDancer.prototype = Object.create(Dancer.prototype);
BallDancer.prototype.constructor = BallDancer;
