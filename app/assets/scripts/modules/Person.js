function Person(name ){
	this.name = name;
	// this.favclr - favclr;

	this.greet = function(){
		console.log(name +" you and I both  did it");
	}
}

module.exports = Person;