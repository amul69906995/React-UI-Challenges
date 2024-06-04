import React, { useEffect, useState } from 'react'

const Autowriting = () => {
    const data = "hi this is amul kumar";
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {

            setCurrentIdx(prevState => {
                if (prevState >= data.length) {
                    return 0;
                }

                return prevState + 1;
            }

            )

        }, 500)
        return () => {
            console.log("cleanup")
            clearInterval(timer);
        }
    }, [])

    return (
        <div>
            <h1> {data.slice(0, currentIdx + 1)}</h1>
            <h2>{currentIdx}</h2>
        </div>
    )
}

export default Autowriting;
