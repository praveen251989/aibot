import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import './App.css';
const responsive = {
	desktop: {
		breakpoint: { max: 2000, min: 1024 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	tablet: {
		breakpoint: { max: 1024, min: 768 },
		items: 3,
		slidesToSlide: 3, // optional, default to 1.
	},
	mobile: {
		breakpoint: { max: 767, min: 464 },
		items: 2,
		slidesToSlide: 1, // optional, default to 1.
	},
};
// const sliderImageUrl = [
// 	{
// 		url: "/static/images/1.jpg",
// 	},
// 	{
// 		url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
// 	},
// 	{
// 		url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
// 	},
// 	{
// 		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
// 	},
// 	{
// 		url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
// 	},
// ];

const Slider = () => {
	return (
		<div>
			<Carousel
				responsive={responsive}
				autoPlay={true}
				showDots={true}
				infinite={true}
                renderButtonGroupOutside={true}
                autoPlaySpeed={3000}
                transitionDuration={1000}
			>
                <div >
                    <img src={img1} alt="movie" />
                </div>
                <div >
                    <img src={img2} alt="movie" />
                </div>
                <div >
                    <img src={img3} alt="movie" />
                </div>
                <div >
                    <img src={img4} alt="movie" />
                </div>
                <div >
                    <img src={img5} alt="movie" />
                </div>                
			</Carousel>
		</div>
	);
};
export default Slider;
