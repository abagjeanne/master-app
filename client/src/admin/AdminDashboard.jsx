import React, { useState, useRef } from 'react';
import axios from 'axios';

import GDSLogo from '../assets/3.png';

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

function BlogCard({ title, content, image, author, dateTimeCreated, category }) {
    return (
        <div className="card mb-3">
            {image && image.trim() !== '' && (
                <img src={image} className="card-img-top img-thumbnail" alt="Blog Post" style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
            )}
            <div className="card-body">
                <h4 className="card-title" style={{ fontWeight:'bold'}}>{title}</h4>
                <p className="card-text"style={{ fontStyle:'italic'}}>{author}</p>
                <p className="card-text">{content}</p>
                <p className="card-text" style={{ fontWeight:'bold', color:'lightgray'}}>{dateTimeCreated}</p>
                {category && (
                    <span className="badge bg-primary">{category}</span>
                )}
            </div>
        </div>
    );
}

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('blog');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [blogPosts, setBlogPosts] = useState([]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const addBlogPost = (newPost) => {
        const currentDate = new Date();
        const dateTimeCreated = currentDate.toLocaleString();

        // Add the date and time to the new blog post object
        const postWithDateTime = { ...newPost, dateTimeCreated };

        // Update the state with the new blog post
        setBlogPosts([...blogPosts, postWithDateTime]);
    };

    return (
        <div className="container-fluid gray-bg">
            <div className="row">
                <nav className={`col-md-2 sidebar shadow-lg d-flex flex-column ${isSidebarOpen ? 'open' : ''}`} style={{ paddingTop: '50px' }}>
                    <div className="justify-content-center" style={{ marginTop: '20px' }}>
                        <img src={GDSLogo} alt="Logo" className="img-fluid" style={{ maxHeight: '80px', paddingTop: '10px', paddingBottom: '10px' }} />
                    </div>
                    <div className={`nav flex-column flex-grow-1 ${isSidebarOpen ? 'show' : ''}`}>
                        <TabButton label="Blog" onClick={() => handleTabChange('blog')} isActive={activeTab === 'blog'} />
                        <TabButton label="Add New Post" onClick={() => handleTabChange('Add New Post')} isActive={activeTab === 'Add New Post'} />
                    </div>
                    <div className="mt-auto">
                        <button onClick={toggleSidebar} className="btn btn-sm btn-secondary">
                            {isSidebarOpen ? 'Hide Sidebar' : 'Show Sidebar'}
                        </button>
                    </div>
                </nav>

                <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
                    <header className="text-center mb-4">
                        <h1 className="dashboard-title" style={{ color: 'blue', paddingTop: '20px' }}>Dashboard</h1>
                    </header>
                    
                    <section className={`p-4 border rounded shadow-sm mt-4 ${isSidebarOpen ? 'sidebar-open' : ''}`} style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
                        {activeTab === 'blog' && (
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                {blogPosts.map((post, index) => (
                                    <div key={index} className="col">
                                        <BlogCard title={post.title} author={post.author}  content={post.content} image={post.image} dateTimeCreated={post.dateTimeCreated} category={post.category} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'Add New Post' && (
                            <div className="container">
                                <div className="mb-3">
                                    <h2>Add New Link</h2>
                                    <NewLinkForm addBlogPost={addBlogPost} />
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

                .sidebar-open {
                    transition: width 0.3s ease;
                }
            `}</style>
        </div>
    );
}

function NewLinkForm({ addBlogPost }) {

    const formRef = useRef(null);
    
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        author: '',
        dateCreated: Date.now
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
                dateCreated: Date.now
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
                <label htmlFor="image" className="form-label">Image URL:</label>
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
                <label htmlFor="content" className="form-label">Content:</label>
                <textarea 
                    className="form-control" 
                    id="content" name="content" 
                    value={formData.body} 
                    onChange={handleChange}
                    required>
                </textarea>
                <div className="invalid-feedback">
                    Please provide content.
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Dashboard;
