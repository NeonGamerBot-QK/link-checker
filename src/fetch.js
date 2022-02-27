const http = require('https');
module.exports = (url) =>{
return new Promise((resolve, reject) => {
http.get(url, res => {
    let data = [];
    res.on('data', chunk => {
      data.push(chunk);
    });
  
    res.on('end', () => {
      resolve(data)
    });
  }).on('error', err => {
    console.log('Error: ', err.message);
    reject(err)
  });
})
}