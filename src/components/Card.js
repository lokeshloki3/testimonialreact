import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
    // console.log(props.review);
    let review= props.review;
  return (
    <div className='card'>
        <div>
            <img src={review.image} className='image'></img>
        </div>

        <div>
            <p>{review.name}</p>
            <p>{review.job}</p>
        </div>

        <div>
            <FaQuoteLeft />
        </div>

        <div>
            {review.text}
        </div>

        <div>
            <FaQuoteRight />
        </div>
    </div>
  )
}

export default Card


{/* <div>
<img src={props.reviews[0].image}></img>
</div>
<div>
{props.reviews[0].name}
</div>
<div>
{props.reviews[0].job}
</div>

<div>
{props.reviews[0].text}
</div> */}