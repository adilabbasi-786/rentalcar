import React, { useState } from 'react'

const FactCounter = () => {
     const [data, setData]= useState([
        {
            "id": 1,
            "attributes": {
            "icon": "fa-check ",
            "counter": 1234,
            "title": "Years Experience",
            "createdAt": "2023-07-05T11:39:22.402Z",
            "updatedAt": "2023-07-05T11:39:25.226Z",
            "publishedAt": "2023-07-05T11:39:25.224Z"
            }
            },
            {
            "id": 2,
            "attributes": {
            "icon": "fa-users-cog",
            "counter": 1234,
            "title": "Expert Technicians",
            "createdAt": "2023-07-05T11:39:53.659Z",
            "updatedAt": "2023-07-05T11:39:56.820Z",
            "publishedAt": "2023-07-05T11:39:56.819Z"
            }
            },
            {
            "id": 3,
            "attributes": {
            "icon": "fa-users",
            "counter": 1234,
            "title": "Satisfied Clients",
            "createdAt": "2023-07-05T11:40:31.905Z",
            "updatedAt": "2023-07-05T11:40:32.670Z",
            "publishedAt": "2023-07-05T11:40:32.668Z"
            }
            },
            {
            "id": 4,
            "attributes": {
            "icon": "fa-car",
            "counter": 1234,
            "title": "Compleate Projects",
            "createdAt": "2023-07-05T11:40:52.806Z",
            "updatedAt": "2023-07-05T11:41:52.236Z",
            "publishedAt": "2023-07-05T11:41:52.233Z"
            }
            }

     ])
  return (
    <>
      <div class="container-fluid fact bg-dark my-5 py-5">
        <div class="container">
            <div class="row g-4">
                {
                    data.map((item)=>(

                <div class="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i class={`fa ${item.attributes.icon} fa-2x text-white mb-3`}></i>
                    <h2 class="text-white mb-2" data-toggle="counter-up">{item?.attributes?.counter}</h2>
                    <p class="text-white mb-0">{item?.attributes?.title}</p>
                </div>
                    ))
                }
              
            </div>
        </div>
    </div>
    </>
  )
}

export default FactCounter
