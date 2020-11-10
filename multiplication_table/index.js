for (var i=1; i<=9; i++){
	var printString = '';
	for (var j=1; j<=i; j++){
		if(printString != ''){
			printString += ' '
		}
		printString += i + '*' + j + '=' + i*j
	}
	console.log(printString)
}