var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var imgPath = "./public/images";

// var React = require("react");
// var ReactDOM = require("react-dom");
// var App = React.createFactory(require("../react-js/react"));



//get the list of jpg files in the image dir
function getImages(imageDir, callback) {
    var fileType = '.png',
        files = [], i;
    fs.readdir(imageDir, function (err, list) {
        if(!err) {
            for(i=0; i<list.length; i++) {
                if(path.extname(list[i]) === fileType) {
                    files.push(path.join('/images/', list[i])); //store the file name into the array files
                }
            }
        }
        else
            console.log(err);
        callback(err, files);
    });
}
/* GET home page. */
router.get('/', function(req, res, next) {
    // var html = React.renderToString(App);

    getImages(imgPath, function (err, files) {
        if (!err) {
            res.render('index', {list: JSON.stringify(files)});
            console.log(files);
        }

        else{
            res.render('index');
            console.log(err);
        }

    });
    
});

module.exports = router;
