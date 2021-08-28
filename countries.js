const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCointries(data))
}

loadCountries();

const displayCointries = (data) => {
    const countryDiv = document.getElementById('country-container')
    data.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryDetails('${country.name}')"><a href="#counry-details">Details</a></button>
        `;
        countryDiv.appendChild(div)
    });
}
const loadCountryDetails = (name) => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
    
}

const displayCountryDetails = (data) => {
    console.log(data)
    const details = document.getElementById('counry-details');
    details.innerHTML = `
    <h3>Name: ${data.name}</h3>
    <p>Capital:  ${data.capital}</p>
    <p>Area:  ${data.area} SqKm</p>
    <p>Region: ${data.region}</p>
    <p>Sub-region: ${data.subregion}</p>
    <p>Population: ${data.population}</p>
    <p>Language: ${data.languages[0].name}(${data.languages[0].nativeName})</p>
    <p>Borders: ${data.borders}</p>
    <p>Currencies: ${data.currencies[0].name}(${data.currencies[0].symbol})</p>
    <p>Calling Code: +${data.callingCodes[0]}</p>
    <p>Time Zone: ${data.timezones[0]}</p>
    <p>Flag: </p><img src='${data.flag}' alt='' height='100px'>
    `

}