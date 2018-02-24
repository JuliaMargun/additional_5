module.exports = function check(str, bracketsConfig) {
  var openedBrackets = [];
  var openingBrackets = "";
  var closingBrackets = "";
  var deletingBracket = "";
  for (var i = 0; i < bracketsConfig.length; i++) {
  	openingBrackets += bracketsConfig[i][0];
  	closingBrackets += bracketsConfig[i][1];
  }

  for (i = 0; i < str.length; i++) {

  	if ( openingBrackets.indexOf(str[i]) != -1) {
  		if (openingBrackets[openingBrackets.indexOf(str[i])] == closingBrackets[openingBrackets.indexOf(str[i])] ) {

  			if (openedBrackets.length > 0) {
	  			if ( str[i] != openedBrackets[openedBrackets.length - 1]) 
	  				openedBrackets.push(str[i]);
	  			else 
	  				deletingBracket = openedBrackets.pop();
	  		}
	  		else
  				openedBrackets.push(str[i]);
  		} 
  		else {
  			openedBrackets.push(str[i]);
  		}
  	}
  	else {
  			deletingBracket = openedBrackets.pop();
  			if (openingBrackets[closingBrackets.indexOf(str[i])] != deletingBracket )
  				return false;
  		}  			
  	}   			 
  	 
	if (openedBrackets.length != 0)
		return false;

	return true;
}
