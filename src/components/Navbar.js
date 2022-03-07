import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props){
    return(
        <div>
            Hello i am a {props.name} <br />
            Here is the content {props.content}
        </div>
    );
}
 Navbar.propTypes = {
      name:PropTypes.string,
      content:PropTypes.string    
}

Navbar.defaultProps = {
    name:"name here",
    content:"content here"
};


