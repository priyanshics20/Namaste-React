export function filterData(searchInput, restraurants) {
    const filterData = restraurants.filter((restrauant) =>
        restrauant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData; 
}