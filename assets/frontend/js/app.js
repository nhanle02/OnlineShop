const obSlides = {
    slides: [
        {
            img: 'slide1.png',
        },
        {
            img: 'slide2.png',
        },
        {
            img: 'slide3.png',
        }
    ],
    duration: 4000,
    initial: 0,
    stringUrl: 'assets/frontend/image/'
}

const obAdvertising = {
    slides: [
        {
            img: 'slide1.png',
        },
        {
            img: 'slide2.png',
        },
        {
            img: 'slide3.png',
        }
    ],
    duration: 4000,
    initial: 0,
    stringUrl: 'assets/frontend/image/advertising/'
}

const tagSlides = document.querySelector('.slide')
const tagAdvertising = document.querySelector('.content__advertising')

function showSlide({ slides, duration, initial, stringUrl }, tagHtmls) {
    setInterval(() => {
        const lenghtSlide = slides.length
        initial = initial + 1
        if (initial > lenghtSlide - 1) { 
            initial = 0
        }
        tagHtmls.style.backgroundImage = `url('${stringUrl}${slides[initial].img}')`
    }, duration)
}

if(tagSlides) {
    showSlide({ ...obSlides }, tagSlides)
}

if (tagAdvertising) {
    showSlide({ ...obAdvertising }, tagAdvertising)
}

const tagCateWrap = document.querySelector('.content__product__category')
const tagCategories = document.querySelectorAll('.content__product__category-title')
const tagBtnPrevious = document.querySelector('.content__product__button__previous')
const tagBtnNext = document.querySelector('.content__product__button__next')
const tagProductList = document.querySelector('.content__product__list__wrap')

let lengthCategory = tagCategories.length
let indexSlide = 0;

if (tagBtnNext) {
    tagBtnNext.onclick = () => {
        if (indexSlide >= lengthCategory - 1) {
            indexSlide = indexSlide
        } else {
            indexSlide++;
            btnNext();
        }
    }
}

if (tagBtnPrevious) {
    tagBtnPrevious.onclick = () => { 
        if (indexSlide == 0) {
            indexSlide = 0;
        } else {
            indexSlide--;
            btnPrevious();
        }
    }
}

function btnNext() {
    if (indexSlide == 1) {
        tagCategories[indexSlide].classList.add('active');
        tagCategories[indexSlide].classList.add('slick-active');
        tagCategories[indexSlide].classList.remove('slick-hide');
        tagCategories[indexSlide + 1].classList.add('slick-active');
        tagCategories[indexSlide + 1].classList.remove('slick-hide');
        tagCategories[0].style.color = '#b8b8b8';   
    } else if (indexSlide < lengthCategory - 1) {
        tagCategories[indexSlide - 2].classList.remove('slick-active');
        tagCategories[indexSlide - 2].classList.add('slick-hide');
        tagCategories[indexSlide - 1].classList.remove('active');
        tagCategories[indexSlide].classList.add('active');
        tagCategories[indexSlide + 1].classList.add('slick-active');
        tagCategories[indexSlide + 1].classList.remove('slick-hide');
    } else if (indexSlide == lengthCategory - 1) {
        tagCategories[indexSlide - 2].classList.remove('slick-active');
        tagCategories[indexSlide - 2].classList.add('slick-hide');
        tagCategories[indexSlide - 1].classList.remove('active');
        tagCategories[indexSlide - 1].classList.remove('slick-active');
        tagCategories[indexSlide - 1].classList.add('slick-hide');
        tagCategories[indexSlide].style.color = '#3f3f3f'; 
    }

    tagCateWrap.classList.add('content__product__category-next')
    let stringCate = `${tagCateWrap.className}`
    if(stringCate.indexOf('content__product__category-next') !== -1) {
        setTimeout(() => {
            tagCateWrap.classList.remove('content__product__category-next')
        }, 200)
    }
    hideAndShow()

    tagProductList.children[indexSlide].classList.add('active')
    tagProductList.children[indexSlide - 1].classList.remove('active')
}

function btnPrevious() {
    if(indexSlide == lengthCategory - 2) {
        tagCategories[indexSlide].classList.remove('slick-hide');
        tagCategories[indexSlide].classList.add('slick-active');
        tagCategories[indexSlide].classList.add('active');
        tagCategories[indexSlide - 1].classList.add('slick-active');
        tagCategories[indexSlide - 1].classList.remove('slick-hide');
        tagCategories[indexSlide + 1].classList.remove('active');
        tagCategories[indexSlide + 1].style.color = '#b8b8b8';   
    } else if (indexSlide < lengthCategory - 2 && indexSlide > 0) {
        tagCategories[indexSlide + 2].classList.remove('slick-active');
        tagCategories[indexSlide + 2].classList.add('slick-hide');
        tagCategories[indexSlide].classList.add('active');
        tagCategories[indexSlide + 1].classList.remove('active');
        tagCategories[indexSlide - 1].classList.add('slick-active');
        tagCategories[indexSlide - 1].classList.remove('slick-hide');
    } else if (indexSlide == 0) {
        tagCategories[indexSlide].style.color = '#3f3f3f';   
        tagCategories[indexSlide + 2].classList.remove('slick-active');
        tagCategories[indexSlide + 2].classList.add('slick-hide');
        tagCategories[indexSlide + 1].classList.remove('active');
        tagCategories[indexSlide + 1].classList.remove('slick-active');
        tagCategories[indexSlide + 1].classList.add('slick-hide');
    }

    tagCateWrap.classList.add('content__product__category-previous')
    let stringCate = `${tagCateWrap.className}`
    if(stringCate.indexOf('content__product__category-previous') !== -1) {
        setTimeout(() => {
            tagCateWrap.classList.remove('content__product__category-previous')
        }, 200)
    }
    hideAndShow()

    tagProductList.children[indexSlide].classList.add('active')
    tagProductList.children[indexSlide + 1].classList.remove('active')
}


function hideAndShow() {
    if (indexSlide == 0) {
        tagBtnPrevious.style.cursor = 'default';        
        tagCategories[0].style.color = '#3f3f3f';      
        tagBtnPrevious.classList.remove('active');
    } else if (indexSlide < lengthCategory - 1) {
        tagBtnPrevious.style.cursor = 'pointer';
        tagBtnNext.style.cursor = 'pointer';
        tagBtnPrevious.classList.add('active');
        tagBtnNext.classList.add('active');
    } else if (indexSlide == lengthCategory - 1) {
        tagBtnNext.style.cursor = 'default';
        tagBtnNext.classList.remove('active');
    }
}

if (tagBtnPrevious) {
    hideAndShow()
}   

const tagTestimonial = document.querySelector('.content__testimonial__author')
const btnNextAuthor = document.querySelector('.content__testimonial__button-next')
const btnPreviousAuthor = document.querySelector('.content__testimonial__button-previous')
if(tagTestimonial) {
    var lenghtAuthor = tagTestimonial.children.length
}   


let countAuthor = 0
if (btnNextAuthor) {
    btnNextAuthor.onclick = () => {
        if (countAuthor >= lenghtAuthor - 1) {
            countAuthor = countAuthor
        } else {
            countAuthor++;
            handleNextAuthor(countAuthor, tagTestimonial, 
                btnNextAuthor, btnPreviousAuthor, duration = 400,
                className = 'content__testimonial__author-next');
        }
    }
}   

if (btnPreviousAuthor) {
    btnPreviousAuthor.onclick = () => {
        if (countAuthor == 0) {
            countAuthor = 0;
        } else {
            countAuthor--;
            handlePreviousAuthor(countAuthor, tagTestimonial, 
                btnNextAuthor, btnPreviousAuthor, duration = 400,
                className = 'content__testimonial__author-previous');
        }
    }
}

function handleNextAuthor(count, tagHtmls, btnNext, btnPrev, duration, className) {
    tagHtmls.children[count].classList.add('active');
    tagHtmls.children[count - 1].classList.remove('active');
    
    tagHtmls.classList.add(className)

    const string = `${tagHtmls.className}`

    if (string.indexOf(className) !== -1) { 
        setTimeout(() => {
            tagHtmls.classList.remove(className)
        }, duration)
    }

    btnAuthor(count, btnNext, btnPrev, lenghtAuthor) 
}

function btnAuthor(count, btnNext, btnPrev, lenghtHtmls) {
    if (count == 0) {
        btnPrev.classList.remove('active')
    } else if (count < lenghtHtmls - 1) {
        btnPrev.classList.add('active');
        btnNext.classList.add('active');
    } else if (count == lenghtHtmls - 1) {
        btnNext.classList.remove('active');
    }
}

function handlePreviousAuthor(count, tagHtmls, btnNext, btnPrev, duration, className) {
    tagHtmls.children[count].classList.add('active');
    tagHtmls.children[count + 1].classList.remove('active');

    tagHtmls.classList.add(className)

    const string = `${tagHtmls.className}`

    if (string.indexOf(className) !== -1) { 
        setTimeout(() => {
            tagHtmls.classList.remove(className)
        }, duration)
    }

    btnAuthor(count, btnNext, btnPrev, lenghtAuthor)
}


// brand
const tagBrands = document.querySelector('.content__brand-list')
const btnNextBrand = document.querySelector('.content__brand__button-next')
const btnPreviousBrand = document.querySelector('.content__brand__button-previous')
if (tagBrands) {
    var lenghtBrand = tagBrands.children.length
}

let countBrand = 0
if (btnNextBrand) {
    btnNextBrand.onclick = () => {
        if (countBrand >= lenghtBrand - 1) {
            countBrand = countBrand
        } else {
            countBrand++;
            handleNextAuthor(countBrand, tagBrands, 
                btnNextBrand, btnPreviousBrand, duration = 400,
                className = 'content__brand-list--next');
        }
    }
}

if (btnPreviousBrand) {
    btnPreviousBrand.onclick = () => {
        if (countBrand == 0) {
            countBrand = 0;
        } else {
            countBrand--;
            handlePreviousAuthor(countBrand, tagBrands, 
                btnNextBrand, btnPreviousBrand, duration = 400,
                className = 'content__brand-list--previous');
        }
    }
}

//lastest headding and content
const tagHeading = document.querySelector('.lastest__heading-list')
const tagContent = document.querySelector('.lastest__content-wrapper')
const btnNextLastest = document.querySelector('.lastest__heading__button-next')
const btnPrevLastest = document.querySelector('.lastest__heading__button-previous')

let countLastest = 0
if(tagHeading) {
    var lenghtHeading = tagHeading.children.length
}

//heading 
if(btnNextLastest)  {
    btnNextLastest.onclick = () => {
        if (countLastest >= lenghtHeading - 1) {
            countLastest = countLastest
        } else {
            countLastest++;
            handleNextAuthor(countLastest, tagHeading, 
                btnNextLastest, btnPrevLastest, duration = 200,
                className = 'lastest__heading-list--next');
            handleNextAuthor(countLastest, tagContent, 
                btnNextLastest, btnPrevLastest, duration = 0,
                className = 'lastest__content-wrapper--next');
        }
    }
}

if (btnPrevLastest) {
    btnPrevLastest.onclick = () => {
        if (countLastest == 0) {
            countLastest = 0;
        } else {
            countLastest--;
            handlePreviousAuthor(countLastest, tagHeading, 
                btnNextLastest, btnPrevLastest, duration = 200,
                className = 'lastest__heading-list--previous');
            handlePreviousAuthor(countLastest, tagContent, 
                btnNextLastest, btnPrevLastest, duration = 0,
                className = 'lastest__content-wrapper--previous');
        }
    }
}


const obFlickImg = [
    {
        img: 'flickr1.png'
    },
    {
        img: 'flickr2.png'
    },
    {
        img: 'flickr1.png'
    },
    {
        img: 'flickr2.png'
    },
    {
        img: 'flickr1.png'
    },
    {
        img: 'flickr2.png'
    },
]

const tagFlickImg = document.querySelectorAll('.footer__content__flickr__item-link')
if (tagFlickImg) {
    for (let i = 0; i < tagFlickImg.length; i++) {
        tagFlickImg[i].style.backgroundImage = `url('assets/frontend/image/${obFlickImg[i].img}')`
    }
}

const tagImg = document.querySelectorAll('.product__detail__product__left-img')
const tagProduct = document.querySelectorAll('.product__detail__product__left__r-item-img')
const btnNextImg = document.querySelector('.product__detail__product__left__r-btn-next')
const btnPreImg = document.querySelector('.product__detail__product__left__r-btn-previous')
if (tagProduct) {
    var lengthImg = tagProduct.length
}
let countImg = 0

// if (btnNextImg) {
//     btnNextImg.onclick = () => {
//         if (countImg >= 0 && countImg < lengthImg - 1) {
//             countImg++
//             handleNextImg()
//         } else if (countImg == lengthImg - 1){
//             countImg = 0
//             handleNextImg()
//         }
//     }
// }

// function handleNextImg() {
//     console.log('countImg:', countImg)
//     tagImg[countImg].classList.add('active')
//     tagImg[countImg - 1].classList.remove('active')

//     tagProduct[countImg].classList.add('active')
//     tagProduct[countImg - 1].classList.remove('active')
//     if (countImg == 0) {
//         tagImg[countImg].classList.add('active')
//         tagImg[lengthImg - 1].attributes.class.nodeValue = "product__detail__product__left-img"

//         tagProduct[countImg].classList.add('active')
//         tagProduct[lengthImg - 1].attributes.class.nodeValue = "product__detail__product__left__r-item-img"
//     }
// }
