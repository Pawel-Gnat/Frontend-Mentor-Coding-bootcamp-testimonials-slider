const images = document.querySelectorAll('.slider > img') // my slider images
const texts = document.querySelectorAll('.textbox > div')
const prevBtn = document.querySelector('#previous-btn') // previous image icon button
const nextBtn = document.querySelector('#next-btn') // next image icon button

let i = 0

function prevSlide() {
	if (i == 0) {
		i = images.length - 1
	} else {
		i--
	}
	changeSlide()
}

function nextSlide() {
	if (i == images.length - 1) {
		i = 0
	} else {
		i++
	}
	changeSlide()
}

function changeSlide() {
	// loop function that adds opacity:1 to my image and text area
	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove('fade-in')
		texts[i].classList.remove('fade-in')
	}
	images[i].classList.add('fade-in')
	texts[i].classList.add('fade-in')
}

changeSlide()

document.addEventListener('keyup', e => {
	// switch statement that execute previous or next slide, while pressing up my left/right keyboard arrow
	const key = e.key
	switch (key) {
		case 'ArrowLeft':
			prevSlide()
			break
		case 'ArrowRight':
			nextSlide()
			break
	}
})

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
