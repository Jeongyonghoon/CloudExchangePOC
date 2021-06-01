import React, { Component } from 'react'
import { withRouter } from 'next/router'
import PageHeader from '../components/PageHeader';

class PageHeaderContainer extends Component{

    getTitle = (pathname) => {
        const str = pathname.slice(1)
        return str.charAt(0).toUpperCase(0) + str.slice(1);
    }
    
    render(){
        return(
            <PageHeader title={this.getTitle(this.props.router.pathname)}></PageHeader>
        );
    }
    
}

export default withRouter(PageHeaderContainer);