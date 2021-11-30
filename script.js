function getData() {
    let dataTable = document.getElementById("data")
    let url = "https://data.covid19india.org/data.json";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data.statewise)
        let length = data.statewise.length
            // console.log(length)
        for (i = 1; i <= length; i++) {

            dataTable.innerHTML += `
            <tr>
            <td>${data.statewise[i].state}</td>
            <td>${data.statewise[i].active}</td>
            <td>${data.statewise[i].deaths}</td>
            <td>${data.statewise[i].recovered}</td>
            </tr>
            `
        }
    })
}

getData();