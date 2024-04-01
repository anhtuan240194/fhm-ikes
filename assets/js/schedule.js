//Click filter schedule opening
const btnsSearchSchedule = document.querySelectorAll('.schedule-filter .filter-item')

if(btnsSearchSchedule) {
    Array.from(btnsSearchSchedule).forEach((filter) => {
        filter.addEventListener('click', () => {
            filter.classList.toggle('active')
        })

        const values = filter.querySelectorAll('.filter-list label')
        const name = filter.querySelector('.filter-name')
    
        Array.from(values).forEach((value) => {
            value.addEventListener('click', (e) => {
                e.stopPropagation()
    
                const data = value.querySelector('input').getAttribute('data-filter')
    
                name.textContent = data
                filter.classList.remove('active')
            })
        })
    })
}

//Click show, collapse schedule
const itemsSchedule = document.querySelectorAll('.schedule-item .td-name')
if(itemsSchedule) {
    [...itemsSchedule].forEach((item) => {
        item.addEventListener('click', () => {
            const itemCurrent = document.querySelector('.schedule-opening .schedule-item.active')

            if(item.parentElement != itemCurrent && itemCurrent) {
                itemCurrent.classList.remove('active')
            }

            item.parentElement.classList.toggle('active')
        })
    })
}

//Click view more schedule center

const dataScheduleCenter = [
    {
        name: "Cơ sở TP Hồ Chí Minh",
        address:"Số 10 Trần Quốc Vượng, Cầu Giấy, Hà Nội",
        img: "./assets/images/logo-landing.png",
        messenger: "#",
        map: "#",
        center: "Hà Nội"
    },
    {
        name: "Cơ sở TP Hồ Chí Minh",
        address:"Số 10 Trần Quốc Vượng, Cầu Giấy, Hà Nội",
        messenger: "#",
        img: "./assets/images/logo-landing.png",
        map: "#",
        center: "Hà Nội"
    },
    {
        name: "Cơ sở TP Hồ Chí Minh",
        address:"Số 10 Trần Quốc Vượng, Cầu Giấy, Hà Nội",
        messenger: "#",
        img: "./assets/images/logo-landing.png",
        map: "#",
        center: "Hà Nội"
    }
]

const btnMoreScheduleCenter = document.querySelector('.schedule-with-center .view-more')
if(btnMoreScheduleCenter) {
    btnMoreScheduleCenter.addEventListener('click', () => {
        if(dataScheduleCenter.length == 0) {
            return true
        }

        const stringXML = dataScheduleCenter.reduce((string, item) => {
            return string += `
                <div class="center-item">
                <div class="center-item-icon">
                    <img src='${item.img}' alt="IKES" title="IKES">
                </div>
                <div class="center-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.address}</p>
                    <div class="center-info-btn">
                        <img src="./assets/images/branch-messenger.svg" alt="Messenger" title="Messenger">
                        <a href='${item.messenger}' title="Inbox Facebook">Inbox Facebook</a>
                    </div>
                    <div class="center-info-btn">
                        <img src="./assets/images/schedule-address.svg" alt="Address" title="Address">
                        <a href='${item.map}' title="Xem chỉ đường">Xem chỉ đường</a>
                    </div>
                    <button class="btn-main" data-center='${item.center}' data-bs-target="#popupSchedule" data-bs-toggle="modal">Xem lịch học</button>
                </div>
            </div>
            `
        }, '')

        const container = document.querySelector('.schedule-with-center .list-center')
        container.insertAdjacentHTML('beforeend', stringXML)

        //Remove data
        dataScheduleCenter.splice(0, 3)
    })
}
