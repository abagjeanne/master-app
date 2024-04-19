import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import GDSLogo from '../assets/3.png';
import TabButton from "./AdminComponents/TabButton"
import LinkCard from "./AdminComponents/LinkCard"
import FAQCard from "./AdminComponents/FAQCard"


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
                {/* Sidebar */}
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

                {/* Main Content */}
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
                        {/* Add New Link Form */}
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

export default Dashboard;
