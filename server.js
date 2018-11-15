var serverImage = function(req, res) {
    res.type('image/jpg');
    resize('/image/images1187175_dji_0011.jpg').pipe(res);
    };