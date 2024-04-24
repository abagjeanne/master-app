import React, { useState } from 'react';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2 className="accordion-header-text">
          <button className="accordion-button btn btn-link" aria-expanded={isOpen}>
            <strong>{question}</strong>
          </button>
        </h2>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p  className='m-4'>{answer}</p>
        </div>
      )}
    </div>
  );
};

const AccordionList = ({ faqs }) => {
  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <Accordion key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

const AboutUs = () => {
  const faqs = [
    { question: 'What is the GDS Group of Companies Resource Center?', answer: ' The GDS Group of Companies Resource Center is a centralized platform designed to provide our staff/employees with convenient access to various company resources, irrespective of their work setup - be it Work From Home, Hybrid, or On-Site office works.' },
    { question: 'What kind of resources are available on the platform?', answer: ' The platform hosts a diverse range of resources including but not limited to company policies, employee benefits information, training materials, HR forms, IT support guides, company news, and updates, among others.' },
    { question: 'Who can access the GDS Group of Companies Resource Center?', answer: "All employees of the GDS Group of Companies have access to the resource center. Access credentials and permissions may vary depending on the employee's role and department within the company." },
    { question: 'How do I access the Resource Center?', answer: "Employees can access the Resource Center by logging in through the company's intranet portal using their designated username and password. Detailed instructions for access will be provided by the HR department or IT support team." },
    { question: ' What if I encounter technical issues while accessing the Resource Center?', answer: " Yes, the Resource Center is accessible from anywhere with an internet connection, allowing employees to conveniently access company resources from the comfort of their homes." },
    { question: 'What kind of resources are available on the platform?', answer: 'If you encounter any technical issues or have trouble accessing the Resource Center, please reach out to the IT support team for assistance. They will be able to help troubleshoot and resolve any issues promptly.' },
    { question: "Are there specific guidelines for using the Resource Center?", answer: "While using the Resource Center, employees are expected to adhere to company policies regarding data security, confidentiality, and acceptable use of company resources. Any misuse or violation of these guidelines may result in disciplinary action." },
    { question: "Can I suggest additional resources to be added to the platform?", answer: "Absolutely! We value input from our employees and welcome suggestions for additional resources that could benefit the company. Please feel free to submit your suggestions to the HR department or the designated resource center administrator." },
    { question: "Is the Resource Center regularly updated with new information?", answer: " Yes, the Resource Center is regularly updated with new information, including policy updates, training materials, and company announcements. We strive to ensure that the content remains relevant and up-to-date for the benefit of our employees" },
    // { question: "", answer: "" },
    // Add more FAQs as needed
  ];

  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1 className="fw-bold fs-5">GDS GROUP OF COMPANIES RESOURCES CENTER</h1>
            <h1 className="fs-4">WHAT IS THIS?</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mt-3">Welcome to the GDS Group of Companies Resource Center! This website serves as a comprehensive platform tailored to the needs of our valued staff and employees across the GDS Group of Companies. Here’s a breakdown of what you can expect:<br/><br/>1. <strong>Centralized Access</strong>: Our platform provides centralized access to a wide array of company resources. Whether you're working from home, adopting a hybrid model, or on-site at our offices, you can conveniently access the tools and information you need from one location.<br/><br/>2. <strong>Diverse Resources</strong>: From company policies and employee benefits information to training materials and HR forms, we've got you covered. You'll find everything you need to navigate your role within the company, stay informed, and access essential documents and resources.<br/><br/>3. <strong>User-Friendly Interface</strong>: We've designed our platform with user experience in mind. Navigating through the website is intuitive, making it easy for you to find what you're looking for quickly. Whether you're a new hire or a seasoned employee, you'll find the layout intuitive and user-friendly.<br/><br/>4. <strong>Accessibility</strong>: With the increasing prevalence of remote work, accessibility is paramount. Our website is accessible from anywhere with an internet connection, allowing you to access company resources from the comfort of your home or wherever you may be working.<br/><br/>5. <strong>Regular Updates</strong>: We understand the importance of keeping information current and relevant. That's why we ensure that our website is regularly updated with the latest company policies, training materials, HR forms, and other essential resources. You can trust that the information you find here is up-to-date and accurate.<br/><br/>6. <strong>Feedback and Suggestions</strong>: Your feedback matters to us. We encourage you to share your thoughts and suggestions for improving the platform. Whether you have ideas for additional resources or suggestions for enhancing user experience, we're all ears. Your input helps us continuously improve and better serve our employees.<br/><br/>In essence, this website is your go-to destination for all things related to your employment within the GDS Group of Companies. It's designed to empower you with the resources and information you need to succeed in your role and stay connected with the broader company community. Welcome aboard, and thank you for being a part of our team!</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h1 className="fs-4">Frequently Asked Questions (FAQs)</h1>
          </div>
        </div>
        <AccordionList faqs={faqs} />
      </div>
    </div>
  );
};

export default AboutUs;
