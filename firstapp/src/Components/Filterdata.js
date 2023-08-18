import React from 'react'
import { useState, useEffect } from 'react'

const Filterdata = () => {

    const [data, setData] = useState([]);
    const [filterlist, setFilterList] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setData(json)
                setFilterList(json)
            })
    }, [])

    const filterHandler = (item) => {
        const output = filterlist.filter((current) => { return current.category === item; })
        setData(output);

    }



    return (
        <>
            <h1>FakeApi Products Data</h1>
            <button onClick={() => filterHandler("men's clothing")}> Mens clothing </button>
            <button onClick={() => filterHandler("jewelery")}> jewelery </button>
            <button onClick={() => filterHandler("electronics")}>Electronics</button>
            <button onClick={() => filterHandler("women's clothing")}>Women's clothing</button>

            <div className='container'>
                <div className='row mt-5'>

                    {data.map((cval) => {
                        return (<>
                            <div className='col-md-4 mt-5'>
                                <div className="card" >
                                    <img src={cval.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{cval.title}Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <p><b>Price:</b>{cval.price}</p>
                                        <p><b>category:</b>{cval.category}</p>
                                    </div>
                                </div>
                            </div>


                        </>
                        )
                    })
                    }</div>
            </div>
        </>
    )
}

export default Filterdata