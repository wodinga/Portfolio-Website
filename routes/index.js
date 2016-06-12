var express = require('express');
var fs = require('fs');
var router = express.Router();
var imgPath = "/public/images";
// var React = require("react");
// var ReactDOM = require("react-dom");
// var App = React.createFactory(require("../react-js/react"));



//get the list of jpg files in the image dir
function getImages(imageDir, callback) {
    var fileType = '.jpg',
        files = [], i;
    fs.readdir(imageDir, function (err, list) {
        for(i=0; i<list.length; i++) {
            if(path.extname(list[i]) === fileType) {
                files.push(list[i]); //store the file name into the array files
            }
        }
        callback(err, files);
    });
}
/* GET home page. */
router.get('/', function(req, res, next) {
    // var html = React.renderToString(App);
    res.render('index');
    // React.render(<App />, document.getElementById())
    // getImages(imgPath, function (err, list) {
    //        if(!err)
    //         // React.render(<App />, document.body);
    //     else
    //         console.log(err);
    // })
    // next();
    
});

module.exports = router;
