import React from 'react'
import Select from 'react-select'
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : 'black',
        backgroundColor: state.isSelected ? '#34d8e7' : state.isFocused ? '#93fbef' : 'white',
    }),
    control:(provided, state)=>({
        ...provided,
        width:200,
        borderColor:state.isSelected ? '#34d8e7' :  ' #E78234',
        boxShadow:'0 0 0 1px #34d8e7'

    }),

}

const SmallSelect = ({onChange,options}) => (
    <Select options={options} onChange={onChange} defaultValue={options[0]} styles={customStyles}/>
)
export default SmallSelect;