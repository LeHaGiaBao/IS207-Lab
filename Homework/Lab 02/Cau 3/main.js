var input = document.getElementById('userInput')

function createList() {
	var li = document.createElement('li')
	li.appendChild(document.createTextNode(input.value))
	document.querySelector('ul').appendChild(li)

	function crossOut() {
		li.classList.toggle('done')
	}

	li.addEventListener('click', crossOut)
	var del = document.createElement('button')
	del.appendChild(document.createTextNode('X'))
	li.appendChild(del)
	del.addEventListener('click', deleteListItem)

	function deleteListItem() {
		li.classList.add('delete')
	}
}

function addList(event) {
	if (input.value.length > 0 && event.which == 13) {
		createList()
	}
}

input.addEventListener('keypress', addList)
