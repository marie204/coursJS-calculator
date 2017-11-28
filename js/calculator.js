$("body").keypress(function(key){
	console.log(key.keyCode);
	if(document.getElementById('result').innerHTML == 'NaN' ){
		document.getElementById('result').innerHTML = '';
	}
	switch (key.keyCode) {
		case 13:
			fonctionResult();
			break;
		case 115:
		document.getElementById('result').innerHTML = '';
		break;
		case 47:
		case 42:
		case 45:
		case 43:
		case 48:
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
		document.getElementById('result').innerHTML += String.fromCharCode(key.keyCode);
		//console.log(String.fromCharCode(key.keyCode));
		break;
		//document.getElementById('result').innerHTML += key;
		default:
			// statements_def
			break;
	}



})



$(".btn").click(function(event) {
	if(document.getElementById('result').innerHTML == 'NaN' ){
		document.getElementById('result').innerHTML = '';
	}
	switch (this.innerHTML) {
		case "c":
			document.getElementById('result').innerHTML = '';
			break;
		case "=":
			fonctionResult();
			//document.getElementById('result').innerHTML = '';
			break;
		default:
			document.getElementById('result').innerHTML += this.innerHTML;
			break;
	}
});
function fonctionResult(){
	var a = [];
	for (var i = 0; i <= document.getElementById('result').innerHTML.length-1 ; i++) {
		b = a.length;
		a[b] = document.getElementById('result').innerHTML.substr(i,1);
	}
	char1 = '';
	char2 = '';
	total = 0;
	lastId = '';
	for (var i = 0; i < a.length; i++) {
		switch (a[i]) {
			case "+":
			total = fonctionVerif(lastId, char1, char2);
				char2 = fonctionRecup(a,i,char1);
				char2 = parseInt(char2);
				char1 = parseInt(char1);
				oper = char1 + char2;
				total = fonctionCalcul(lastId, oper, total);
				char1 = '';
				lastId = a[i];
				break;
			case '-':
			total = fonctionVerif(lastId, char1, char2);
				char2 = fonctionRecup(a, i, char1);
				//total = parseInt(total);
				char2 = parseInt(char2);
				char1 = parseInt(char1);	
				if (lastId == '-') {
					oper = char1 + char2;
				}else {
					oper = char1 - char2;
				}			
				total = fonctionCalcul(lastId, oper, total);
				char1 = '';
				lastId = a[i];
			break;
			case '*':
			total = fonctionVerif(lastId, char1, char2);
				char2 = fonctionRecup(a,i,char1);
				char2 = parseInt(char2);
				char1 = parseInt(char1);
				oper = char1 * char2;
				total = fonctionCalcul(lastId, oper, total);
				char1 = '';
				lastId = a[i];
				break;
			break;
			case '/':
			total = fonctionVerif(lastId, char1, char2);
				char2 = fonctionRecup(a,i,char1);
				char2 = parseInt(char2);
				char1 = parseInt(char1);
				oper = char1 / char2;
				total = fonctionCalcul(lastId, oper, total);
				char1 = '';
				lastId = a[i];
				break;

			default:
				char1 = char1 + '' + a[i];
				break;
		}
		
		
	}

	document.getElementById('result').innerHTML = total;
}

function fonctionCalcul(lastId, oper, total){
	switch (lastId) {
		case '+':
			total = total + oper;
			return total;
			break;
		case '-':
			total = total - oper;
			return total;
			break;
		case '*':
			total = total * oper;
			return total;
			break;
		case '/':
			total = total / oper;
			return total;
			break;
		default:
			total = oper;
			return total;			
			break;

	}
}

function fonctionVerif(lastId, char1, char2){
	switch (lastId) {
		case '+':
			total = total - char2;
			avtLast = '+';
			break;
		case '-':
			total = total + char2;
			avtLast = '-';
			break;
		case '/':
			total = total * char2;
			avtLast = '/';
			break;
		case '*':
			total = total / char2;
			avtLast = '*';
			break;
		default:
			total = total;
			break;
	}
	return (total);
}


function fonctionRecup(a,i,char1){
	
	i++;
	cat2 = '';
	for(i=i; i < a.length ; i++){
		if((a[i] == '+') || (a[i] == '-') || (a[i] == '/') || (a[i] == '*')){
			break;
		} else {
			cat2 += ''+a[i];
		}
		}
	return cat2;
}