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
                {this.props.list.map(function (val) {
                    return <Img src="http://placehold.it/550x550"/>
                })}
            </div>

        )
    }
});



var Gallery = React.createClass({
    render : function() {
        return (
            <div className="gallery">
                <ImageList list={[1,2,3,4,5,6,7,8,9,10,11,12]}/>
            </div>
        );
    }
});
export default Gallery;