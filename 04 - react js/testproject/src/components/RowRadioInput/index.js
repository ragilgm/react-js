import React, { Component } from 'react';

class RowRadioInput extends Component {
   constructor(props) { 
      super(props)
      this.state = {}
   }
   render() {
      var {  typeInput, idInput ,nameInput, valueInput, onchangeValue } = this.props;
      return (
         <>
            <input type={typeInput} name={nameInput} id={idInput} value={valueInput} className="ml-3 mr-2"
             onChange={onchangeValue}/>
            {valueInput}
         </>
      );
   }
}

export default RowRadioInput;