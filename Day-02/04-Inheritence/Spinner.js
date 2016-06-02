function Spinner(){
	this.__count = 0;
}
Spinner.prototype.up = function(){ return ++this.__count;}
Spinner.prototype.down = function(){ return --this.__count;}