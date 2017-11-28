// add your code here to make the calculator work
document.getElementById('result').innerHTML = ""; 
//document.getElementById('result').innerHTML='test';

/*document.getElementsByClassName('btn').setAttribute('onclick', 'fonctionAttribute();');
*/
$(".btn").click(function(event) {
	//console.log(this.innerHTML);
	if(document.getElementById('result').innerHTML == 'erreur'){
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
		console.log(a);
	}
	char1 = '';
	total = 0;
	for (var i = 0; i < a.length; i++) {
		switch (a[i]) {
			case "+":
				char2 = fonctionRecup(a,i,char1);
				total = parseInt(total);
				char2 = parseInt(char2);
				char1 = parseInt(char1);
				total = total + char2 + char1;
				char1 = '';
				break;
			case '-':
				char2 = fonctionRecup(a, i, char1);
				total = parseInt(total);
				char2 = parseInt(char2);
				char1 = parseInt(char1);
				total = total + char1 - char2;
				char1 = '';
			break;

			default:
				char1 = char1 + '' + a[i];
				break;
		}
		/*console.log(char1);*/
		
	}
	console.log(total);
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
	//console.log(cat2);
	return cat2;
	console.log("my my");
}