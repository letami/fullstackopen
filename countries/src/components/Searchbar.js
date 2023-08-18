const Searchbar = ({handleSearchChange}) => {
    return (
        <div>
            <p>find countries <input onChange={handleSearchChange}/></p>
        </div>
    )
}

export default Searchbar