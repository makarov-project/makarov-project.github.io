const contextMenu = document.getElementById('context-menu')

window.addEventListener('contextmenu', function(e) {
	e.preventDefault()
	const menuWidth = contextMenu.offsetWidth
	const menuHeight = contextMenu.offsetHeight
	const posX = e.pageX
	const posY = e.pageY

	const rightSpace = window.innerWidth - posX
	const bottomSpace = window.innerHeight - posY

	contextMenu.style.left = (rightSpace < menuWidth) ? posX - menuWidth + 'px' : posX + 'px'
	contextMenu.style.top = (bottomSpace < menuHeight) ? posY - menuHeight + 'px' : posY + 'px'
	
	contextMenu.style.display = 'block'
})

window.addEventListener('click', function() {
	contextMenu.style.display = 'none'
})