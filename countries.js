const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
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
        <h3>${country.name.official}</h3>
        <p>Capital: ${country.capital}</p>
        <button onclick="loadCountryDetails('${country.cca2}')"><a href="#counry-details">Details</a></button>
        `;
        countryDiv.appendChild(div)
    });
}
const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]))
    
}

const displayCountryDetails = (data) => {
    console.log(data)
    const details = document.getElementById('counry-details');
    details.innerHTML = `
    <h3>Name: ${data.name.common}</h3>
    <p>Capital:  ${data.capital}</p>
    <p>Area:  ${data.area} SqKm</p>
    <p>Region: ${data.region}</p>
    <p>Sub-region: ${data.subregion}</p>
    <p>Population: ${data.population}</p>
    <p>Language: ${Object.values(data.languages)}</p>
    <p>Borders: ${data?.borders?.map(border=>border) || 'none'}</p>
    <p>Currencies: ${Object.keys(data.currencies)}</p>
    <p>Calling Code: +${data.idd.suffixes[0]}</p>
    <p>Time Zone: ${data.timezones}</p>
    <p>Flag: </p><img src='${data.flags.svg}' alt='' height='100px'>
    `

}