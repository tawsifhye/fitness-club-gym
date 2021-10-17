import React from 'react';
import bannerImg from '../../images/banner-img.jpg'
const Home = () => {
    return (
        <div>
            <h1 className=' text-center display-3 fw-bold'>Welcome to <span className='text-primary'>Fitness Club</span></h1> 
            <p className='text-center fw-bold'>Don’t give up on your dreams, or your dreams will give up on you.</p>
            <div className='container'>
            <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        <img className='img-fluid rounded-circle' src={bannerImg} alt="" />
                    </div>
                    <div className='col-lg-6 align-items-center py-5'>
                        <p className='fs-1'>Elite Personal Training Services</p>
                        <h1 className='display-1 fw-bold'>MAKE IT <span className='text-danger'>SHAPE</span></h1>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;