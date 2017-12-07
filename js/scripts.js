
	var list = document.getElementById('list');
	var add = document.getElementById('addElem');
	console.log(add);
	var number = document.getElementsByTagName('li');
	console.log(number);
	

	add.addEventListener('click', function() {
		var element = document.createElement('li');
		var numberLength = number.length;
		element.innerHTML = 'item ' + numberLength;
		list.appendChild(element);
	})



