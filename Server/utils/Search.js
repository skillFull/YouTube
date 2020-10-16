const  search = async (req) => {
    const data = await require('../data/dataBase');
    let resultSearch = await data.filter(obj => {
    if (`${obj.author.toLowerCase()}`.slice(0, `${req}`.length) === `${req}`.toLowerCase()) {
        return  obj.author;
    }
   });
   return  resultSearch
};

module.exports = search