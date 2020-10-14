import React, { Component } from 'react';

class RowTextArea extends Component {
   constructor(props) { 
      super(props)
      this.state = {}
   }
   render() {
      var { labelInput, nameInput, valueInput, onchangeValue,  placeholderInput} = this.props;
      return (
         <>
            <label htmlFor={labelInput}>{labelInput}</label>
               <br/>
            <textarea type="textarea" className="form-control" name={nameInput} placeholder={placeholderInput}
               value={valueInput} onChange={onchangeValue}
               />
         </>
      );
   }
}

export default RowTextArea;