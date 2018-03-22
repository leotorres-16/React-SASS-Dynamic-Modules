import React, {Component} from 'react';

class PageTitle extends Component {

    constructor(props, context){
        super(props,context);

        this.state = {
            styles: null
        };
    }

    componentWillMount(){
        if(this.props.brand === 'a'){
            this.state.styles = require('./page-title-a.scss');
        } else {
            this.state.styles = require('./page-title-b.scss');
        }
    }

    render(){
        return(
            <div className={this.state.styles.title}>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default PageTitle;
