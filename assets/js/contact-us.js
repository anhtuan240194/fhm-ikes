
//Click filter branch
const btnSearchBranch = document.querySelector('.filter-branch')

if(btnSearchBranch) {
    btnSearchBranch.addEventListener('click', () => {
        btnSearchBranch.classList.toggle('active')
    })

    const itemSearchBranch = document.querySelectorAll('.filter-branch .filter-list label')
    const name = btnSearchBranch.querySelector('.filter-branch-name')

    Array.from(itemSearchBranch).forEach((item) => {
        item.addEventListener('click', (e) => {
            e.stopPropagation()

            const data = item.querySelector('input').getAttribute('data-filter')

            name.textContent = data
            btnSearchBranch.classList.remove('active')
        })
    })
}

//Data branchs
const dataBranchs = {
    "co-so-1": ["./assets/images/blog-item-1.png",
            "./assets//images/blog-item-2.png",
            "./assets//images/blog-item-3.png"
    ],

    "co-so-2": ["./assets//images/about-banner.png",
    "./assets//images/about-banner.png",
    "./assets//images/about-banner.png"
],
}

//Callback func create element lightbox
const createELightbox = (data) => {
    const container = document.querySelector('.list-images')
    const itemsImg = dataBranchs[data]

    const stringXML = itemsImg.reduce((total, item) => {
        return total += `
        <div class="item-image" data-src='${item}'>
            <img src='${item}' alt="iKES" title="IKES">
        </div>
        `
    }, '')

    //Insert HTML
    container.innerHTML = stringXML
}

//Callback create light gallery
const callGallery = () => {
    const container = document.querySelector('.list-images')

    //Create Gallery
    const galleryBranch = lightGallery(container, {
        animateThumb: true,
        allowMediaOverlap: true,
        toggleThumb: true,
        download: false,
        speed: 500,
        slideShowAutoplay: true,
        plugins: [lgThumbnail, lgFullscreen],
        fullScreen: true,
        showZoomInOutIcons: false,
        actualSize: true,
    });

    //Call light gallery
    galleryBranch.openGallery(2);
}

//Click view images on one branch
const btnViewImageBranch = document.querySelectorAll('.branch-view-images')
if(btnViewImageBranch) {
    Array.from(btnViewImageBranch).forEach((btn) => {
        btn.addEventListener('click', () => {
            const data = btn.getAttribute('data-branch')

            //Callback light gallery
            createELightbox(data)
            callGallery()
        })
    })
}