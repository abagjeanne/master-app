import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import GDSLogo from '../assets/3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TabButton({ label, onClick, isActive }) {
    return (
        <li className="nav-item">
            <button 
                className={`nav-link btn ${isActive ? 'btn-primary' : 'btn-light'}`} 
                onClick={onClick}
            >
                {label}
            </button>
        </li>
    );
}

function LinkCard({ id, title, content, image, author, dateTimeCreated, }) {
    
    const deleteUser = async () => {
        try {
          const response = await axios.delete(`http://localhost:8008/api/blog/delete/${id}`);
          if (response.status === 200) {
            console.log("User deleted successfully");
          }
        } catch (error) {
          console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="card mb-3 position-relative">
            <img src={image} className="card-img-top img-thumbnail" alt="Blog Post" style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
            <div className="card-body">
                <h4 className="card-title" style={{ fontWeight:'bold'}}>{title}</h4>
                <p className="card-text" style={{ fontStyle:'italic'}}>{author}</p>
                <p className="card-text">{content}</p>
                <p className="card-text" style={{ fontWeight:'bold', color:'lightgray'}}>{dateTimeCreated}</p>
                <button className="btn btn-danger position-absolute bottom-0 end-0 m-3" onClick={deleteUser}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}


function FAQCard({ id, question, answer, dateTimeCreated, onDelete }) {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="card mb-3 position-relative">
            <div className="card-body">
                <h4 className="card-title" style={{ fontWeight:'bold'}}>{question}</h4>
                <p className="card-text">{answer}</p>
                <p className="card-text" style={{ fontWeight:'bold', color:'lightgray'}}>{dateTimeCreated}</p>
                <button className="btn btn-danger position-absolute bottom-0 end-0 m-3" onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    );
}

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Links');
    const [blogPosts, setBlogPosts] = useState([]);
    const [faqs, setFaqs] = useState([]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        axios.get('http://localhost:8008/api/blog')
            .then(response => {
                setBlogPosts(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching blog data:', error);
            });
    }, []);

    return (
        <div className="container-fluid gray-bg">
            <div className="row">
                <nav className="col-md-2 sidebar shadow-lg d-flex flex-column" style={{ paddingTop: '50px' }}>
                    <div className="justify-content-center" style={{ marginTop: '20px' }}>
                        <img src={GDSLogo} alt="Logo" className="img-fluid" style={{ maxHeight: '80px', paddingTop: '10px', paddingBottom: '10px' }} />
                    </div>
                    <div className="nav flex-column flex-grow-1">
                        <TabButton label="Links" onClick={() => handleTabChange('Links')} isActive={activeTab === 'Links'} />
                        <TabButton label="FAQs" onClick={() => handleTabChange('FAQs')} isActive={activeTab === 'FAQs'} />
                        <TabButton label="Add New Link" onClick={() => handleTabChange('Add New Link')} isActive={activeTab === 'Add New Link'} />
                        <TabButton label="Add New FAQs" onClick={() => handleTabChange('Add New FAQs')} isActive={activeTab === 'Add New FAQs'} />
                    </div>
                </nav>

                <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
                    <header className="text-center mb-4">
                        <h1 className="dashboard-title" style={{ color: 'blue', paddingTop: '20px' }}>Dashboard</h1>
                    </header>
                    
                    <section className="p-4 border rounded shadow-sm mt-4" style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
                        {activeTab === 'Links' && (
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                {blogPosts.map((post, index) => (
                                    <div key={index} className="col">
                                        <LinkCard 
                                            id={post._id} 
                                            title={post.title} 
                                            author={post.author}  
                                            content={post.body} 
                                            image={post.thumbnail.link}
                                            dateTimeCreated={post.dateCreated}  
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'FAQs' && (
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="col">
                                        <FAQCard 
                                            id={faq.id} 
                                            question={faq.question} 
                                            answer={faq.answer} 
                                            dateTimeCreated={faq.dateTimeCreated} 
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'Add New Link' && (
                            <div className="container">
                                <div className="mb-3">
                                    <h2>Add New Link</h2>
                                    <NewLinkForm/>
                                </div>
                            </div>
                        )}
                        {activeTab === 'Add New FAQs' && (
                            <div className="container">
                                <div className="mb-3">
                                    <h2>Add New FAQ</h2>
                                    <NewFAQForm/>
                                </div>
                            </div>
                        )}
                    </section>
                </main>
            </div>
            <style jsx>{`
                .gray-bg {
                    background-color: #f0f0f0;
                }

                .sidebar {
                    background-color: #333;
                    transition: width 0.3s ease;
                }
            `}</style>
        </div>
    );
}

const NewLinkForm = () => {

    const formRef = useRef(null);
    
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: '',
        dateCreated: new Date().toLocaleDateString()
    });

    const [thumbnail, setThumbnail] = useState()
    const handleImage = (e) => {
        setThumbnail(e.target.files[0]);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        try {
            console.log(formData);
        
            // Create a FormData object
            var formObject = new FormData();
            formObject.append('file', thumbnail); // Append profile picture
            formObject.append('blog', JSON.stringify(formData)); // Append form data
        
            // Send POST request to the appropriate endpoint
            const response = await axios.post(`http://localhost:8008/api/blog/create`, formObject, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            console.log(response.data);
      
            setFormData({
                title: '',
                body: '',
                author: '',
                dateCreated: formatDate(new Date())
            });
            formRef.current.reset();
            
            toast.success('Registration successful!');
          } catch (error) {
            console.error('Error during registration: ', error.message);
          }
    };

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    name="title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                />
                <div className="invalid-feedback">
                    Please provide a title.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="thumbnail" className="form-label">Image URL:</label>
                <input 
                    type="file" 
                    className="form-control" 
                    id="thumbnail" 
                    name="thumbnail" 
                    value={formData.thumbnail} 
                    onChange={handleImage}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="author" 
                    name="author" 
                    value={formData.author} 
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Content:</label>
                <textarea 
                    className="form-control" 
                    id="body" name="body" 
                    value={formData.body} 
                    onChange={handleChange}
                    required>
                </textarea>
                <div className="invalid-feedback">
                    Please provide content.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="dateCreated" className="form-label">Date Published:</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="dateCreated" 
                    name="dateCreated" 
                    value={formData.dateCreated} 
                    onChange={handleChange}
                    disabled
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

function NewFAQForm({ newFAQQuestion, newFAQAnswer, setNewFAQQuestion, setNewFAQAnswer, addFAQ }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        addFAQ();
    };

    return (
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
                <label htmlFor="question" className="form-label">Question:</label>
                <input type="text" className="form-control" id="question" name="question" value={newFAQQuestion} onChange={(e) => setNewFAQQuestion(e.target.value)} required />
                <div className="invalid-feedback">
                    Please provide a question.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="answer" className="form-label">Answer:</label>
                <textarea className="form-control" id="answer" name="answer" value={newFAQAnswer} onChange={(e) => setNewFAQAnswer(e.target.value)} required></textarea>
                <div className="invalid-feedback">
                    Please provide an answer.
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Dashboard;
