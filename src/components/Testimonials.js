import React, { useState } from 'react'
import Card from './Card'

const Testimonials = (props) => {
    let reviews= props.reviews;

    let [index,setIndex]=useState(0);

    function rightShiftHandler(){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function leftShiftHandler(){
        if(index-1<=0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    function surpriseShiftHandler(){
        let randomIndex=Math.floor(Math.random() *reviews.length)
        setIndex(randomIndex);
    }


  return (
    <div className='testi'>
        {
            <Card key={reviews.id} review={reviews[index]}/>
        }

        <div>
            <button className='plusminus' onClick={rightShiftHandler}>+</button>

            <button className='plusminus' onClick={leftShiftHandler}>-</button>
        </div>

        <div>
            <button className='surprise' onClick={surpriseShiftHandler}>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials

// {
//     reviews.map((review) => 
//     <Card key={review.id} review={review}/>
// )
// }