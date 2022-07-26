import React, {useState, useContext, useEffect} from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import RatingSelect  from "./RatingSelect";
import {feedbackContext} from '../context/feedback';


function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const context = useContext(feedbackContext);

    useEffect(()=>{ 
      setText(context.feedbackEdit.item.text);
      setBtnDisabled(false);
      
    },[context.feedbackEdit])

    const handleTextChange = ({ target: { value } }) => { // 👈  get the value
        if (value === '') {
          setBtnDisabled(true)
          setMessage(null)
          
      // prettier-ignore
        } else if (value.trim().length < 10) { // 👈 check for less than 10
          setMessage('Text must be at least 10 characters')
          setBtnDisabled(true)
        } else {
          setMessage(null)
          setBtnDisabled(false)
        }
        setText(value)
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
          const newFeedback = {
            text,
            rating,
          }
          if(context.feedbackEdit.edit === true){
            context.updateFeedback(context.feedbackEdit.item.id,{id:context.feedbackEdit.item.id, ...newFeedback});
          }
          else{
            context.postFeedBack(newFeedback);
          }
    
        //   if (feedbackEdit.edit === true) {
        //     updateFeedback(feedbackEdit.item.id, newFeedback)
        //   } else {
        //     addFeedback(newFeedback)
        //   }

          // NOTE: reset to default state after submission
          setBtnDisabled(true) // 👈  add this line to reset disabled
          setRating(10) //👈 add this line to set rating back to 10
          setText('')
        }
      }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
 
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={ text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
           { context.feedbackEdit.edit === true? "Edit": "New"}
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm