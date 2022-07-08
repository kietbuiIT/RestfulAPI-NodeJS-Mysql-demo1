
const getOffer = (currentPage = 1, listPerPage) => {
    return (currentPage - 1) * [listPerPage];
}

const emptyOrRows = (rows) => {
    if (!rows){
        return [];
    }
    return rows;
}

module.exports = {
    getOffer,
    emptyOrRows
}