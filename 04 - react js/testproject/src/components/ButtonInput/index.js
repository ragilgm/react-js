import React, { Component } from 'react';

class ButtonInput extends Component {
   constructor(props) { 
      super(props)
      this.state = {}
   }
   render() {
      var {  typeInput, valueInput, onClickValue, classNameValue} = this.props;
      return (
         <>
            <input type={typeInput} className={classNameValue} value={valueInput}
                        onClick={onClickValue}/>
         </>
      );
   }
}

export default ButtonInput;