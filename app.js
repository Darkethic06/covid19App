function getData() {
    let dataTable = document.getElementById("data")
    let url = "https://data.covid19india.org/data.json"
    fetch(url).then((response) => {
        return response.json();

    }).then((data) => {

        // console.log(data.statewise[1].state)
        let length = data.statewise.length
        for (let i = 1; i < length; i++) {
            dataTable.innerHTML += `<tr>
                 <td> ${data.statewise[i].state}</td>
                 <td> ${data.statewise[i].deaths}</td>
                 <td> ${data.statewise[i].recovered}</td>
           </tr>
                 `
            console.log(data.statewise[i].state)
        }

        // console.log(length)

    })

}

getData();

// <td>${data.Global.TotalDeaths}</td>
// <td>${data.Global.TotalRecovered}</td>