var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = fucntion() {
  this.honeyPot++;
}

HoneyMakerBee.prototype.giveHoney = fucntion() {
  this.honeyPot--;
}
