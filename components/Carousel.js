import React from 'react'

const Carousel = () => {
  return (
    <>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"></link>
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>

    <div id="carouselExampleIndicators" className='carousel slide' data-ride="carousel">
                <ol className='carousel-indicators'>
                    <li data-target="#carouselExampleIndicators" data-slide-to="100" className='active'></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./portada.jpg" className='d-block w-100' ></img>
                    </div>
                </div>
            </div>

    </>

)
}

export default Carousel;

