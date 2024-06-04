import React, { useEffect, useState } from 'react'

const ScrollIndicator = () => {
    const [products, setProducts] = useState("")
    const [scrollPercentage, setScrollPercentage] = useState(0)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const currPage = Math.floor(Math.random() * 10 + 1)
        const response = await fetch(`https://dummyjson.com/products?limit=${20 * currPage}`)
        const data = await response.json()
        setProducts(data.products)
        console.log(data.products)
    }
    useEffect(() => {
        const handleScroll = () => {
            const totalBodyHeight = document.body.scrollHeight- window.innerHeight;
            const scrollTopAndClient = window.scrollY ;
            setScrollPercentage((scrollTopAndClient / totalBodyHeight) * 100)
        }
        window.addEventListener('scroll', handleScroll)
        return (
            () => {
                window.removeEventListener('scroll', handleScroll)
            }
        )
    }, [])
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="container-fluid" style={{ width: scrollPercentage + '%', backgroundColor: 'blue', height: '20px', border: '2px solid yellow', position: 'fixed', top: '0' }}></div>
            <div>
                {products?.length > 0 && products.map((p, i) => <li key={i}>{p.title}</li>)}
            </div>
        </div>
    )
}

export default ScrollIndicator
