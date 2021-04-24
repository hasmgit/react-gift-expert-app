import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
  const [inpuValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
      //console.log(e.target.value);
      setInputValue(e.target.value);
  }

  const handleSumbit = (e) => {
      e.preventDefault();

      if (inpuValue.trim().length > 2) {
        setCategories( categories => [inpuValue, ...categories]);
        setInputValue('');
      }
  }

    return (
        <form onSubmit={handleSumbit}>
        <input 
            type='text'
            value={inpuValue}
            onChange={handleInputChange}>                
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
