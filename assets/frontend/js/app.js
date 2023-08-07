
const slides = [
    {
        img: 'slide1.png',
    },
    {
        img: 'slide2.png',
    },
    {
        img: 'slide3.png',
    }
]

const tagSlides = document.querySelector('.slide')

   
function showSlide(duration) {
    var count = 0
    var slideLength = slides.length
    setInterval(() => {
        count = count + 1
        if (count > slideLength - 1) { 
            count = 0
        }
        tagSlides.style.backgroundImage = `url('assets/frontend/image/${slides[count].img}')`
    }, duration)
}

showSlide(duration = 4000)