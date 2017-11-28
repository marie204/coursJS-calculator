$(".btn").click(function(event) {
	if(document.getElementById('result').innerHTML == 'erreur' ){
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