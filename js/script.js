const dataPercent = [
    4,
    0,
    0,
    0,
    44,
    50,
    -9,
    0,
    -6,
    -6
]

const percentText = document.querySelectorAll(".table__percent");
const tableStroke = document.querySelectorAll("tr");
dataPercent.forEach((item, i) => {
    percentText[i].textContent = `${item}%`;
    if(item > 0) {
        percentText[i].parentNode.classList.add("table__green")
        percentText[i].classList.add("green-percent");
    } else if(item < 0) {
        percentText[i].parentNode.classList.add("table__red");
        percentText[i].classList.add("red-percent");
    } else {
        return;
    }
});


Highcharts.chart('container', {
    title: {
        text: ''
    },
    xAxis: {
        categories: ["Вчера", "Текущий день"]
    },
    yAxis: {
        type: 'logarithmic',
        title: {
            text: 'Показатели'
        }
    },
    series: [{
        name: '',
        data: [480521, 500521],
        color: 'var(--highcharts-color-10,rgb(16, 139, 5))'
    }]
});


tableStroke.forEach(item => {
    item.addEventListener("click", (e) => {
        if(e.target.classList.contains("table__data")) {
            let tableDataToday = e.target.parentNode.querySelectorAll(".table__data")[1].textContent.replaceAll(" ", "");
            let tableDataYesterday = e.target.parentNode.querySelectorAll(".table__data")[2].querySelectorAll("span")[0].textContent.replaceAll(" ", "");
            console.log(tableDataToday)
            console.log(tableDataYesterday)
            Highcharts.chart('container', {
                title: {
                    text: ''
                },
                xAxis: {
                    categories: ["Вчера", "Текущий день"]
                },
                yAxis: {
                    type: 'logarithmic',
                    title: {
                        text: 'Показатели'
                    }
                },
                series: [{
                    name: '',
                    data: [Number(tableDataYesterday), Number(tableDataToday)],
                    color: 'var(--highcharts-color-10,rgb(16, 139, 5))'
                }]
            });
        }
    })
})
