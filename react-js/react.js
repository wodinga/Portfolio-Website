/**
 * Created by tetrix on 5/20/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
//import Gallery from 'gallery';

var Gallery = React.createClass({
    //var pics =
    render : function() {
        return (
            <div className="gallery">
                <div class="column">
                    <img class="thumbnail" src="http://placehold.it/550x550"/>
                    <h5>My Site</h5>
                </div>
                <div class="column">
                    <img class="thumbnail" src="http://placehold.it/550x550"/>
                    <h5>My Site</h5>
                </div>
            </div>
        )
    }
});

ReactDOM.render(
    <Gallery />,
    document.getElementById('example')
);