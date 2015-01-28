
//1//////////////


// var letterCapitalize = function(str){
// 	var capitalized = str;
// 	var stringArray = capitalized.split(" ");
// 	for ( var i = 0; i < stringArray.length; i++){
// 		var word = stringArray[i][0].toUpperCase() + stringArray[i].substring(1);
// 		console.log(word);

// 	};
// };


// letterCapitalize("hello there tom its nice out");




//2///////////////

	var wordCount = function(str){
		var stringArray = str.split(" ");
		var stringNum = stringArray.length;
		console.log("Number of words: ", stringNum);
	};


wordCount("hi there bill how are you doing?");