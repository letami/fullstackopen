const Country = ({country}) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
            </div>
            <div>
                <h4>languages :</h4>
                <ul>
                    {Object.entries(country.languages).map(([key, value]) =>
                        <li key={key}>{value}</li>)}
                </ul>
            </div>
            <div>
                <img src={country.flags.png}/>
            </div>
        </div>
    )
}

export default Country