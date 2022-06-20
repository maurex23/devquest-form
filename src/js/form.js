const item = document.getElementsByClassName('item')
const aviso = document.querySelectorAll('.advice')
const enviar = document.querySelector('.btn')

enviar.addEventListener('click', function (e) {
    e.preventDefault()
    for (let i = 0; i < item.length; i++) {
        if (item[i].classList.contains('incomplete') != true) {
            if (item[i].value === "") {
                marcarIncompletos(i)
            } else {
                marcarCompletos(i)
            }
        }
    }

    for (let i = 0; i < item.length; i++) {
        item[i].addEventListener('change', function () {
            console.log(i)
            item[i].classList.add('complete')
            item[i].classList.remove('incomplete')
            aviso[i].classList.remove('show')
            console.log(i)
        })
    }
})

function marcarCompletos(i) {
    item[i].classList.add('complete')
}

function marcarIncompletos(i) {
    item[i].classList.add('incomplete')
    aviso[i].classList.add('show')
}

