import Image from 'next/image';
import React from 'react';

const Homepage = () => {
  return (
<div className='flex min-h-screen items-center justify-center'>
      <div className='max-w-8/12'>
      <div className="carousel  ">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src="https://www.apple.com/v/app-store/c/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
          className="w-full" width={100}
          height={100}
          alt="Picture of the author" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/055/352/823/small/lake-and-mountain-nature-beautiful-photo.jpg"
          className="w-full" width={100}
          height={100}
          alt="Picture of the author" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src="https://thumbs.dreamstime.com/b/free-happy-woman-enjoying-nature-beauty-girl-outdoor-freedom-concept-beauty-girl-over-sky-sun-sunbeams-enjoyment-free-happy-131504534.jpg"
          className="w-full" width={200}
          height={200}
          alt="Picture of the author" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src="https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=2048x2048&w=is&k=20&c=xye_THXrYSdonhfGkhpRY4JvUGqLqjzV0tcxkbkvJVY="
          className="w-full" width={100}
          height={100}
          alt="Picture of the author " />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>

      </div>
    </div>
    </div>
</div>
  );
};

export default Homepage;