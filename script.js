const inputEl = document.querySelector(".input-text")
const inputBtnEl = document.querySelector(".btn")
const listEl = document.querySelector(".list")
const cross = document.querySelector(".close")


inputBtnEl.addEventListener("click", addElementIntoList)

listEl.addEventListener("click", changeColor)

listEl.addEventListener("click", remove)


//---------------------------------------------------------------------------------

function addElementIntoList(e) {
	if (inputEl.value) {
		createLiEl(inputEl.value)
		inputEl.value = ""
	} else {
		return
	}
}

function changeColor(e) {
	if (e.target.closest(".list-item")) {
		e.target.classList.toggle("green")
	}
}

function remove(e) {
	if (e.target.closest(".close")) {
		listEl.removeChild(e.target.closest(".list-item"))
	}
}

function createLiEl(value) {
	const li = document.createElement("li")
	li.className = "list-item"
	li.id = Math.random()
	li.innerHTML = `<a href="#" class="close"></a>`
	li.textContent = value
	listEl.appendChild(li)

	const closing = document.createElement("a")
	closing.className = "close"
	closing.href = "#"
	li.appendChild(closing)

}








