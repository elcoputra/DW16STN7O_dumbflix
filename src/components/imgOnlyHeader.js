import React, { Component } from 'react';
import {Button} from '@material-ui/core'
import headerImage from '../img/header/YourName.jpg'

class imgOnlyHeader extends Component {
    render() {
        return (
            <div>
                <img src={headerImage} alt=""/>
                <Button>TEST</Button>
            </div>
        );
    }
}

export default imgOnlyHeader;