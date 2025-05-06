import React from 'react';

export const LinkedIn = ({user,settings}) => {

    return(
        <div style={{
            width: '320px',
            padding: '16px',
            border: '1px solid #ddd',
            borderRadius: '16px',
            backgroundColor:'#0072b1'
        }}>
            <div
            style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                <img 
                src={user.image}
                alt={"Profile Image"}
                style={{
                    width: '96px',
                    height:'96px',
                    borderRadius: '50%'

                }}
                />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <div>
                  {settings.showConnect && <button
                    style={{
                        padding: '8px 12px',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor:'pointer',
                        fontSize: '14px',
                        backgroundColor: '#10b981'
                    }}>
                        {settings.isConnected ? 'Connected' :  'Connect'}
                    </button>}
                </div>
            </div>
           
        </div>
    )
}