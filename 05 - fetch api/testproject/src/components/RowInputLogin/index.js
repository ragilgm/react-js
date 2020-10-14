import React, { Component } from 'react';

class RowInput extends Component {
   constructor(props) { 
      super(props)
      this.state = {}
   }
   render() {
      var { classInput, typeInput, nameInput, placeholderInput,valueInput,onChangeValue,onClickValue } = this.props;
      return (
         <>
            <input className={classInput} type={typeInput} name={nameInput} placeholder={placeholderInput} value={valueInput} onChange={onChangeValue} onClick={onClickValue}/>
            <span className="focus-input100" data-placeholder="&#xe82a;"></span>
         </>
      );
   }
}

export default RowInput;