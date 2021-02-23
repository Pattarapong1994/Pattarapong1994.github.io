let new_cases = document.getElementById('new_cases');
let new_deaths = document.getElementById('new_deaths');
let total_deaths = document.getElementById('total_deaths');
let total_recovered = document.getElementById('total_recovered');
let total_cases = document.getElementById('total_cases');
let table = document.getElementById('countries_stat');

//Fetcing the World Data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "02cacb7b09msh794371d5a4bc24fp1522fdjsn4df439fa779a"
	}
})
.then(response => response.json().then(data  => {
    console.log(data);
    total_case.innerHTML = data.total_cases;
    new_deaths.innerHTML = data.new_deaths;
    total_deaths.innerHTML = data.total_deaths;
    total_recovered.innerHTML = data.total_recovered;
    new_cases.innerHTML = data.new_cases;
}))
.catch(err => {
	console.log(err);
});

//Fetcing the case  by country data
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "02cacb7b09msh794371d5a4bc24fp1522fdjsn4df439fa779a"
	}
})
.then(response => response.json().then(data => {
    console.log(data);
    let countries_stat = data.countries_stat;
    console.log(countries_stat)
    for (let i = 0; i < countries_stat.length; i++) {
        console.log(countries_stat[i]);
        let row = table.insertRow(i + 1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let total_recovered = row.insertCell(4);
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        total_recovered.innerHTML = countries_stat[i].total_recovered;
    }
}))
.catch(err => {
	console.log(err);
});