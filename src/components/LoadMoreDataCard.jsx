import React from 'react'

const LoadMoreDataCard = ({ title, price, thumbnail }) => {
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            height:'300px',
            border:'2px solid green'
        }}>
            <img 
            style={{
                width: '100%',
                height: '85%',
             objectFit:'cover',
             objectPosition:'center'
                
            }}
            src={thumbnail} alt="img" />
            <span>{title}</span>
            <span>{price}</span>
        </div>

    )
}

export default LoadMoreDataCard
