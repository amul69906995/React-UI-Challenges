import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 10)
        return () => { clearInterval(interval) }
    }, [])
    return (
        <>
            <h1>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</h1>
            <h2>{`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`}</h2>
        </>
    )
}

export default DigitalClock
