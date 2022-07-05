const axios = require('axios');

const getTruth = () => {
  return Promise.resolve()
    .then(() => axios.get(`https://truth-dare.tk/api/truth`))
    .then((res) => {
      return res.data.truth
    })
}
const getDare = () => {
  return Promise.resolve()
    .then(() => axios.get(`https://truth-dare.tk/api/dare`))
    .then((res) => {
      return res.data.dare
    })
}

module.exports = {
  getTruth,
  getDare
}