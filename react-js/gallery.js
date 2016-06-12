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
                    <Img src={this.props.src}/>

            </div>

        )
    }
});



var Gallery = React.createClass({
    render : function() {
        return (
            <div className="gallery">
                <ImageList src={this.props.src}/>
            </div>
        );
    }
});
export default Gallery;