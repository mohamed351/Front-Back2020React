import {createContext, useEffect, useState} from 'react';


export const feedbackContext = createContext();

export const FeedbackProvider = (props)=>{
    const [feedbacks,setFeedBacks]= useState(null);
    const [isLoading,setIsLoading] = useState(true);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
      })
    const getFeedbacks = async ()=>{
        const api = await fetch("/feedbacks");
        const currentData = await api.json();
   
       setFeedBacks(currentData);
       setIsLoading(false);

    }

    const postFeedBack = async(data)=>{
    
        const api = await fetch("/feedbacks",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
    
        });
       const currentData = await api.json();
       setFeedBacks((prev)=>{
            return [currentData, ...prev];
       });
      
    }
    const deleteFeedback = async (id)=>{
        if (window.confirm('Are you sure you want to delete?')) {
            await fetch(`/feedbacks/${id}`, { method: 'DELETE' })
           
            setFeedBacks(feedbacks.filter((item) => item.id !== id))
          }
    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`/feedbacks/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updItem),
        })
    
        const data = await response.json()
    
        // NOTE: no need to spread data and item
        setFeedBacks(feedbacks.map((item) => (item.id === id ? data : item)))
    
        // FIX: this fixes being able to add a feedback after editing
        // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
        setFeedbackEdit({
          item: {},
          edit: false,
        })
      }

    useEffect(()=>{
        getFeedbacks();
    },[]);

  return (  <feedbackContext.Provider value={{
    feedbacks,
    isLoading,
    postFeedBack,
    deleteFeedback,
    setFeedBacks,
    feedbackEdit,
    setFeedbackEdit,
    updateFeedback
  }}>
        {props.children}
    </feedbackContext.Provider>);
}