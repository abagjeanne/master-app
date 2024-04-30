import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const FAQCard = () => {
  const [infoData, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get('http://localhost:8008/api/info/');
        if (response.status === 200) {
          const faqs = response.data.reverse().map(faq => ({ ...faq, showAnswer: false }));
          setInfo(faqs);
        } else {
          console.error("Did not get data", response.status);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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

  return (
    <div className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="display-6" style={{fontWeight:'bold'}}>Information</h2>
        </div>
      </div>
      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p className='col text-center'>Loading...</p>
        </div>
      ) : (
        <div>
          {infoData.length === 0 ? (
            <div className="row">
              <div className="col text-center">
                <p>No Information found</p>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
};

export default FAQCard;
