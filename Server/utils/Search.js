
const search = (req, data) => {
   let resultSearch =  data.filter(obj => {
    if (`${obj.author.toLowerCase()}`.slice(0, `${req}`.length) === `${req}`.toLowerCase()) {
        return  obj.author;
    }
   });
   return  resultSearch
};

module.exports = search