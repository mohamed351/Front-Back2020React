import React, {useContext} from 'react'
import {feedbackContext} from '../context/feedback';
import FeedbackForm from './FeedbackForm';
import FeedbackItem from "./FeedbackItem";
function FeedbackList() {
  const context =   useContext(feedbackContext);
 
  if(context.isLoading){
       return( <div>loading ... </div>);
    }
    console.log(context);
  return (
    

    <>
    <FeedbackForm />
    <div className='feedback-list'>

      {context.feedbacks.map((item) => (
        
          <FeedbackItem key={item.id} item={item} />
       
      ))}

  </div>
  </>
  )
}

export default FeedbackList