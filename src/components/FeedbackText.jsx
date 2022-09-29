import React from 'react'
import '../styles/feedbackText.css'


const FeedbackText = ({text, color}) => {
  return (
    <p className='feedback-text' style={{'color': color}}>{text}</p>
  )
}

export default FeedbackText