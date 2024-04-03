 

let i, url ;
const isValideURL = (url) => {
  const pattern =
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  return pattern.test(url);
};


exports.createURL = (req, res) => {
  const short_url = Math.round(Math.random() * 100);
  const { url: original_url } = req.body;
 
  console.log(original_url);
  

  if (!isValideURL(original_url)){
   return res.status(400).json({
      error: "invalid url",
    });
  }

  i = short_url;
  url = original_url;

 

  
  res.status(200).json({
    original_url,
    short_url,
  });
};

 exports.sendRedirectURL = (req, res) => {
  const {id} = req.params;
 
  if(Number(id) !== i){
    return   res.status(404).send('<h1>NOT FOUND!!</h1>')
    }
    res.redirect(url)
  
 }