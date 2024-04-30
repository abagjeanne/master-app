import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQCard = () => {
  const [infoData, setInfo] = useState([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get('http://localhost:8008/api/info/');
        if (response.status === 200) {
          // Initialize the showAnswer property for each FAQ object
          const faqs = response.data.reverse().map(faq => ({ ...faq, showAnswer: false }));
          setInfo(faqs);
        } else {
          console.error("Did not get data", response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchFAQs();
  }, []);

  const toggleAnswer = (index) => {
    setInfo(prevState => {
      return prevState.map((faq, i) => {
        if (i === index) {
          return { ...faq, showAnswer: !faq.showAnswer };
        } else {
          return { ...faq, showAnswer: false }; // Close other answers
        }
      });
    });
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8008/api/blog/comment/${id}`, { comment });
      if (response.status === 200) {
        const updatedComments = await axios.get(`http://localhost:8008/api/blog/comments/${id}`);
        setComments(updatedComments.data);
        setComment('');
      } else {
        console.error("Failed to submit comment", response.status);
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="display-6" style={{fontWeight:'bold'}}>Information</h2>
          </div>
        </div>
        <div className="accordion-solid-header card mb-3">
          {infoData.map((faq, index) => (
            <div key={index}>
              <div className="card-header" style={{backgroundColor:""}} onClick={() => toggleAnswer(index)}>
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="mb-0">{faq.question}</h4>
                  <div>
                    {faq.showAnswer ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
                  </div>
                </div>
              </div>
              {faq.showAnswer && (
                <div className="card-body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5 card shadow-lg p-3">
        <h3 className="mb-3">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment}>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write your comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="mt-3 btn btn-primary">Submit</button>
        </form>
      </div>
      </div>

    </div>
  );
};

export default FAQCard;
