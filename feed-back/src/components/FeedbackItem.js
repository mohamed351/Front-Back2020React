import React, {useContext} from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import Card  from "../shared/Card";
import {feedbackContext} from  "../context/feedback";

function FeedbackItem({item}) {
  const context =  useContext(feedbackContext);
  return (
    <Card>
    <div className='num-display'>{item.rating}</div>
    <button  className='close' onClick={()=> context.deleteFeedback(item.id)}>
      <FaTimes color='purple' />
    </button>
    <button  className='edit' onClick={()=> context.setFeedbackEdit((prev)=>{
      return {
        ...prev,
        edit:true,
        item:{
          text:item.text,
          rating:item.rating,
          id:item.id
        }
      }
    })}>
      <FaEdit color='purple' />
    </button>
    <div className='text-display'>{item.text}</div>
  </Card>
  )
}

export default FeedbackItem