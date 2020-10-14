import React, { Component } from 'react';

class HeaderLink extends Component {
   render() {
      var { TitlePage,onClickValue } = this.props
      return (
         <>
            <a className="nav-link" onClick={onClickValue}>{TitlePage}</a>
         </>
      );
   }
}

export default HeaderLink;