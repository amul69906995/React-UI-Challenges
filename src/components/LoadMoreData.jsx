import React, { useEffect, useState } from 'react'
import LoadMoreDataCard from './LoadMoreDataCard';


const LoadMoreData = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currPage, setCurrPage] = useState(1)
    useEffect(() => {
        fetchData()
    }, [currPage])
    const url = `https://dummyjson.com/products?limit=${20 * currPage}`
    const fetchData = async () => {
        setIsLoading(true)
        const res = await fetch(url);
        const result = await res.json();
        setData(result.products);
        setIsLoading(false);
        console.log(result);
    }
    const handleClick = () => {
        if (currPage < 5) {
            setCurrPage(currPage + 1)
        }
    }
    if (isLoading && data.length == 0) return (<h1>loading...</h1>)
    else {
        return (
            <>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                    {data.length > 0 && data.map(d => <LoadMoreDataCard title={d.title} price={d.price} thumbnail={d.images[0]} />)}
                </div>
                {isLoading ? (<p 
                style={{display:'flex',
                justifyContent:'center',
                marginBottom:'1rem'
                }}
                >loading...</p>) : (<button
                    disabled={currPage === 5}
                    onClick={handleClick}
                >Load more products</button>)}

                {currPage === 5 ? <p>you have reached 100 products</p> : null}
            </>
        )
    }
}

export default LoadMoreData;
