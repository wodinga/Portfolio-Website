/**
 * Created by tetrix on 5/22/16.
 */

import React from 'react';

var Img = React.createClass({

    render : function() {
        return (
            <div className="column">
                <img className="thumbnail" src={this.props.src}/>
                <h5>My Site</h5>
            </div>
        );
    }
});

var ImageList = React.createClass({
    render : function() {
        return (
            <div className="imgList">
                {this.props.list.map(function(val){
                    return  <Img src= {val}/>
                })}
            </div>

        )
    }
});



var Gallery = React.createClass({
    render : function() {
        return (
            <div className="gallery">
                <ImageList src={this.props.src} list={this.props.list}/>

            </div>
        );
    }
});
export default Gallery;