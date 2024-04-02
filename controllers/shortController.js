// const isValideURL = url => {
//     try {
//         new URL(url)
//         return true
//     } catch (error) {
//         console.log(error.message);
//         return false
//     }
// }

const isValideURL = (url) => {
  const pattern =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

    return pattern.test(url)

};
 

exports.createURL = (req, res) => {
  res.send("<h1>test<h1>");
  // res.status(200).json({
  //     original_url,
  //     short_url
  // })
};
