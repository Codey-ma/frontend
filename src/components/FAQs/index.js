import React from 'react'
import './index.css'
import FaqCard from '../Utils/FaqCard';

const Faqs = () => {
  return (
    <div className='faqs-section'>

    <div class="partners">
        <div className="sponsor-rectangle"></div>
        <div className="sponsor-rectangle"></div>
        <div className="sponsor-rectangle"></div>
        <p className='sponsors'>Partners</p>
        <div className="sponsor-rectangle"></div>
        <div className="sponsor-rectangle"></div>
        <div className="sponsor-rectangle"></div>
        </div>

        <div className='faqs'>
            <h2 className="section-title">FAQs</h2>
            <FaqCard
                question="What is Codey.tech?"
                response="Codey.tech is an online platform for learning coding and programming."
                />
            <FaqCard
                question="How can I join courses on Codey.tech?"
                response="You can join courses by signing up on our website and selecting the desired course."
                />
            <FaqCard
                question="Is there a fee for using Codey.tech?"
                response="Codey.tech offers both free and paid courses. You can choose the ones that suit your needs."
        />
    </div>
    </div>
    

    
  )
}

export default Faqs