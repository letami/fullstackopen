import {useState, useEffect} from "react";
import Searchbar from "./components/Searchbar";
import countryService from './services/countries'
import Countries from "./components/Countries";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [countries, setCountries] = useState([])

    useEffect(() => {
        countryService
            .getAll()
            .then(countries => {
                setCountries(countries)
            })
    }, [])

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

    const showDetails = (name) => setSearchTerm(name)


    return (
        <div>
            <Searchbar handleSearchChange={handleSearchChange}/>
            <Countries countries={filteredCountries} showDetails={showDetails}/>
        </div>
    )
}

export default App