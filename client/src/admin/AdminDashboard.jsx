import React, { useState } from 'react';
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

function LinkCard({ id, title, content, image, author, dateTimeCreated, onDelete }) {
    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className="card mb-3 position-relative">
            {image && image.trim() !== '' && (
                <img src={image} className="card-img-top img-thumbnail" alt="Blog Post" style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
            )}
            <div className="card-body">
                <h4 className="card-title" style={{ fontWeight:'bold'}}>{title}</h4>
                <p className="card-text" style={{ fontStyle:'italic'}}>{author}</p>
                <p className="card-text">{content}</p>
                <p className="card-text" style={{ fontWeight:'bold', color:'lightgray'}}>{dateTimeCreated}</p>
                <button className="btn btn-danger position-absolute bottom-0 end-0 m-3" onClick={handleDelete}>
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
function Dashboard() {
    const [activeTab, setActiveTab] = useState('Links');
    const [blogPosts, setBlogPosts] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [newFAQQuestion, setNewFAQQuestion] = useState('');
    const [newFAQAnswer, setNewFAQAnswer] = useState('');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const addBlogPost = (newPost) => {
        const currentDate = new Date();
        const dateTimeCreated = currentDate.toLocaleString();

        // Add the date and time to the new blog post object
        const postWithDateTime = { ...newPost, dateTimeCreated };

        // Update the state with the new blog post
        setBlogPosts([...blogPosts, postWithDateTime]);
    };

    const addFAQ = () => {
        setFaqs([...faqs, { id: faqs.length + 1, question: newFAQQuestion, answer: newFAQAnswer }]);
        setNewFAQQuestion('');
        setNewFAQAnswer('');
    
    const currentDate = new Date();
    const dateTimeCreated = currentDate.toLocaleString();
        setFaqs([...faqs, { id: faqs.length + 1, question: newFAQQuestion, answer: newFAQAnswer, dateTimeCreated }]);
        setNewFAQQuestion('');
        setNewFAQAnswer('');
    };

    const deleteBlogPost = (id) => {
        const updatedBlogPosts = blogPosts.filter(post => post.id !== id);
        setBlogPosts(updatedBlogPosts);
    };

    const deleteFAQ = (id) => {
        const updatedFaqs = faqs.filter(faq => faq.id !== id);
        setFaqs(updatedFaqs);
    };

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
                                            id={post.id} 
                                            title={post.title} 
                                            author={post.author}  
                                            content={post.content} 
                                            image={post.image} 
                                            dateTimeCreated={post.dateTimeCreated} 
                                            onDelete={deleteBlogPost} 
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
                                            onDelete={deleteFAQ} 
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'Add New Link' && (
                            <div className="container">
                                <div className="mb-3">
                                    <h2>Add New Link</h2>
                                    <NewLinkForm addBlogPost={addBlogPost} />
                                </div>
                            </div>
                        )}
                        {activeTab === 'Add New FAQs' && (
                            <div className="container">
                                <div className="mb-3">
                                    <h2>Add New FAQ</h2>
                                    <NewFAQForm 
                                        newFAQQuestion={newFAQQuestion} 
                                        newFAQAnswer={newFAQAnswer} 
                                        setNewFAQQuestion={setNewFAQQuestion} 
                                        setNewFAQAnswer={setNewFAQAnswer} 
                                        addFAQ={addFAQ} 
                                    />
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

function NewLinkForm({ addBlogPost }) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlogPost({ id: Date.now(), title, content, image, author });
        setTitle('');
        setImage('');
        setAuthor('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title:</label>
                <input type="text" className="form-control" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <div className="invalid-feedback">
                    Please provide a title.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL:</label>
                <input type="text" className="form-control" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Author:</label>
                <input type="text" className="form-control" id="author" name="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">Content:</label>
                <textarea className="form-control" id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
                <div className="invalid-feedback">
                    Please provide content.
                </div>
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
