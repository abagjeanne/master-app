import React, { useState, useRef } from 'react';
import axios from 'axios';

const NewFAQForm = ({ newFAQQuestion, newFAQAnswer, setNewFAQQuestion, setNewFAQAnswer, addFAQ }) => {
  const handleSubmit = (e) => {
      e.preventDefault();
      addFAQ();
  };

  return (
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
          <div className="mb-3">
              <label htmlFor="question" className="form-label">Question:</label>
              <input
                  type="text"
                  className="form-control"
                  id="question"
                  name="question"
                  value={newFAQQuestion}
                  onChange={(e) => setNewFAQQuestion(e.target.value)}
                  required
              />
              <div className="invalid-feedback">Please provide a question.</div>
          </div>
          <div className="mb-3">
              <label htmlFor="answer" className="form-label">Answer:</label>
              <textarea
                  className="form-control"
                  id="answer"
                  name="answer"
                  value={newFAQAnswer}
                  onChange={(e) => setNewFAQAnswer(e.target.value)}
                  required
              ></textarea>
              <div className="invalid-feedback">Please provide an answer.</div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  );
};

export default NewFAQForm ;