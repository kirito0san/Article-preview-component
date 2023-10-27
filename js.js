let Share = document.querySelector(`.Share`)
let Share_span = document.querySelector(`.Share_span`)
Share.addEventListener(`click`, () => {
    if (Share_span.style.display == `` || Share_span.style.display == `none`) {
        Share_span.style.display = `flex`
        Share.style.backgroundColor = `hsl(214, 17%, 51%)`
        Share.children[0].style.filter = `brightness(0) invert(1)`
    } else {
        Share_span.style.display = `none`
        Share.style.backgroundColor = ``
        Share.children[0].style.filter = ``
    }
})



