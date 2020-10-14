import React, { Component } from 'react';

class RowInput extends Component {
   constructor(props) { 
      super(props)
      this.state = {}
   }
   render() {

      var { labelInput, typeInput, nameInput, valueInput, onchangeValue,  placeholderInput} = this.props;

      return (
         <>
            <label htmlFor={labelInput}>{labelInput}</label>
            <input type={typeInput} className="form-control" name={nameInput} placeholder={placeholderInput}
               value={valueInput} onChange={onchangeValue}
            />
         </>
      );
   }
}

export default RowInput;