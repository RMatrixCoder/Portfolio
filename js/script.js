// Filter content
const filterContaniner = document.querySelector(".portfilio-filter"),
    filterBtns = filterContaniner.children,
    totalFilterBtns = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfilio-item");
totalPortfolio = portfolioItems.length;

for (let i = 0; i < totalFilterBtns; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContaniner.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPortfolio; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            } else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}


// portfolio lightbox
const lightbox = document.querySelector(".lightbox"),
    lightboxImage = lightbox.querySelector(".lightbox-img"),
    lightBoxClose = lightbox.querySelector(".lightbox-close"),
    lightboxText = lightbox.querySelector(".caption-text"),
    lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;
for (let i = 0; i < totalPortfolio; i++) {
    portfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightBox();
    })
}

function nextItem() {
    if (itemIndex === totalPortfolio - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolio - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfilio-img img").getAttribute("src");
    lightboxImage.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolio;
}

function toggleLightBox() {
    lightbox.classList.toggle("open");
}

// LightBox Close
lightbox.addEventListener("click", function (event) {
    if (event.target === lightBoxClose || event.target === lightbox) {
        toggleLightBox();
    }
})