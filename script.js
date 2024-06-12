var ctxPH = document.getElementsByClassName("ph__chart");
new Chart(ctxPH, {
    type: 'bar',
    data: {
        labels: ["Vermelha do centro","Itamambuca","Pereque-Açu","Prumirim"],
        datasets: [{
            label: "pH atual",
            data: [6, 7, 8, 6],
            borderWidth: 2,
            backgroundColor: ["Red","Blue","Grey","White"],
        },
        {
            label: "pH adequado",
            data: [7, 7, 7, 7],
            borderWidth: 2,
            backgroundColor: "Green"
        }
    ]
    }
});

var ctxOX = document.getElementsByClassName("OX__chart");
new Chart(ctxOX, {
    type: 'bar',
    data: {
        labels: ["Vermelha do centro","Itamambuca","Pereque-Açu","Prumirim"],
        datasets: [{
            label: "Oxigênio atual",
            data: [7, 6, 8, 9],
            borderWidth: 2,
            backgroundColor: ["Red","Blue","Grey","White"],
        },
        {
            label: "Oxigênio adequado",
            data: [7,7,7,7],
            borderWidth: 2,
            backgroundColor: "Green"
        }
    ]

    }
})

var ctxSal = document.getElementsByClassName("sal__chart");
new Chart(ctxSal, {
    type: 'bar',
    data: {
        labels: ["Vermelha do centro","Itamambuca","Pereque-Açu","Prumirim"],
        datasets: [{
            label: "Salinidade atual (ppt)",
            data: [32,33,35,32],
            borderWidth: 2,
            backgroundColor: ["Red","Blue","Grey","White"],
        },
        {
            label: "Salinidade adequada (ppt)",
            data: [33,33,33,33],
            borderWidth: 2,
            backgroundColor: ["Green"],
        }
    ]
    }
})

var ctxTemp = document.getElementsByClassName("temp__chart")
new Chart(ctxTemp, {
    type: 'bar',
    data: {
        labels: ["Vermelha do centro","Itamambuca","Pereque-Açu","Prumirim"],
        datasets: [{
            label: "Temperatura atual",
            data: [26,25,28,29],
            borderWidth: 2,
            backgroundColor: ["Red","Blue","Grey","White"],
        },
        {
            label: "Temperatura adequada",
            data: [28,28,28,28],
            borderWidth: 2,
            backgroundColor: ["green"],
        }
    ]
    }
})

function abrirVideo() {
    alert("Veja o Video abaixo no Youtube.")
    const videoDiv = document.querySelector('.video__introducao');
    const videoYou = document.createElement('iframe');
    videoYou.src = 'https://www.youtube.com/embed/OAamTd9Z4vE?si=jR_o2UCZ4iF733mr';
    videoDiv.appendChild(videoYou);
}

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 1,
    autoplay: {
        delay: 1500,
    },
    loop: true,
});
