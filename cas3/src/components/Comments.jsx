import React from 'react';
import {PropTypes} from 'prop-types'
export const Comments = ({listOfComments,datum}) => {
    return(
        <div id='comments'>
            {listOfComments.map(comment=>{
               return(
                <div key = {comment.id}>
                    <h3 style={{color: comment.author=== "Filip" ? 'red' : ''}}>Author: {comment.author}</h3>
                    {comment.author === 'Ivana' ? <p>Book: {comment.content} </p> : <p style={{fontWeight: 'bold'}}>Author Unknown</p>}
                    <p>Datum:{datum}</p>
                </div>
               )
            })}

        </div>
    )
}

Comments.propTypes = {
    listOfComments: PropTypes.arrayOf(PropTypes.object),
    datum: PropTypes.string.isRequired
}