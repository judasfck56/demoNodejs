// var getHelloView = function(req, res) {
//     return res.render('hello.pug', {title: 'Title cua page', user:{name: 'Judas FC', email: 'judasFC@gmail.com'}});
//   };
//   exports.getHelloView = getHelloView;

  var getHelloView = function(req, res) {
    return res.render('submitFile.ejs', {title: 'Title cua page', user:{name: 'Judas FC', email: 'judasFC@gmail.com'}});
  };
  exports.getHelloView = getHelloView;