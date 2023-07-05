import React, { useEffect, useState } from 'react'


const Service = () => {
    const[data, setData]=useState([])
    useEffect(()=>{

        const getData=async()=>{
            let request= await fetch("http://localhost:1337/api/services")
            let res = await request.json();
            setData(res.data)
        }
        getData();

    },[])
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                {
                    data.map((item)=>(

                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={item.id}>
                    <div className="d-flex py-5 px-4">
                        <i className={`fa ${item.attributes.icon} fa-3x text-primary flex-shrink-0`}></i>
                        <div className="ps-4">
                            <h5 className="mb-3">{item.attributes.title}</h5>
                            <p>{item.attributes.paragraph}</p>
                            <a target="_blank" href={item.attributes.URL} className="text-secondary border-bottom" >Read More</a>
                        </div>
                    </div>
                </div>
                    ))
                }
                {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Expert Workers</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Modern Equipment</h5>
                            <p>Diam dolor diam ipsum sit amet diam et eos erat ipsum</p>
                            <a className="text-secondary border-bottom" href="">Read More</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default Service
