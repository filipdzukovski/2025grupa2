import React from 'react';

export const Input = ({type,placeholder,name,value,onChange,setToggle,renderTextArea,changeInput}) => {
    return(
        <p> 
            {renderTextArea ?
            <textarea
                rows={8}
                cols={20}
                value={value}
                onChange={onChange}
            />
            : <input
                type = {type}
                placeholder = {placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />}
            {name === 'password' && 
            <button type='button' className='eye-button' onClick={setToggle}>
            <i className={type === 'password' ? 'fa fa-eye-slash' : 'fa fa-eye'}></i> </button>}
            {name ==='comment' &&
            <button type='button' onClick={changeInput} className='eye-button'>
                <i className={renderTextArea ? 'fa fa-comment-o' : 'fa fa-comments-o'}></i>
            </button>
            }
        </p>
    )
}