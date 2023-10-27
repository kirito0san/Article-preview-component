let Share = document.querySelector(`.Share`)
let Share_span = document.querySelector(`.Share_span`)
let one1 = document.querySelector(`.one1`)

Share.addEventListener(`click`, () => {
    if (Share_span.style.display == `` || Share_span.style.display == `none`) {
        Share_span.style.display = `flex`
        Share.style.backgroundColor = `hsl(214, 17%, 51%)`
        Share.children[0].style.filter = `brightness(0) invert(1)`
    } else {
        Share_span.style.display = `none`
        Share.style.backgroundColor = `#ecf2f8`
        Share.children[0].style.filter = `brightness(1) invert(0)`
    }
})

window.onload = () => {
    res()
}
window.onresize = () => {
    res()
}

function res() {
    if (window.innerWidth < 752) {
        one1.style.display = `flex`
        one1.addEventListener(`click`, () => {
            if (Share_span.style.display == `` || Share_span.style.display == `none`) {
                Share_span.style.display = `flex`
                Share.style.backgroundColor = `hsl(214, 17%, 51%)`
                Share.children[0].style.filter = `brightness(0) invert(1)`
            } else {
                Share_span.style.display = `none`
                Share.style.backgroundColor = `#ecf2f8`
                Share.children[0].style.filter = `brightness(1) invert(0)`
            }
        })
    } else {
        one1.style.display = `none`
    }
}
