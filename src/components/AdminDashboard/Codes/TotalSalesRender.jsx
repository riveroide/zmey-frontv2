import React, { useEffect, useState } from 'react'
import axios from "../../../app/axiosConfig"

const TotalSalesRender = ({code}) => {
    const [totalSales, setTotalSales] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`/orders/code/${code}`)
                
                setTotalSales(res.data.total)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [code])

    if (loading) {
        <h1>Loading...</h1>}
  return (
    <div className='text-center'>{totalSales}</div>
  )
}

export default TotalSalesRender