console.log("I am in a pluralizer")

var thing = 'cat';
var count = '5';

var pluralizer = function (thing, count) {
	if (count === 1) {
		console.log(count + " " + thing);
	} else {
		console.log(count + " " + thing + "s");
}
}
pluralizer("dog", 3);