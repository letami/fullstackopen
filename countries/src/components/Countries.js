import Country from "./Country";

const Countries = ({countries, showDetails}) => {
    if (countries.length > 10)
        return <div><p>Too many matches, specify another filter</p></div>

    if (countries.length === 1)
        return <Country country={countries[0]}/>

    return (
        <div>
            {countries.map(country =>
                <p key={country.tld}>{country.name.common} <button onClick={showDetails}>show</button></p>
            )}
        </div>
    )
}

export default Countries