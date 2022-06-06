var axios = require('axios');

export default function Api(){
// var config = {
//     method: 'get',
//     url: '/ToDo'
//   };

      return(
        axios.get("/ToDo")
        .then(function (response) {
          console.log((response.data));
        })
        .catch(function (error) {
          console.log(error);
        })
      )
}
