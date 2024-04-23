import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faQuestionCircle, faPlus, faComment, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import GDSLogo from '../assets/3.png';
import TabButton from "./AdminComponents/TabButton"
import LinkCard from "./AdminComponents/Link/LinkCard"
import FAQCard from "./AdminComponents/FAQ/FAQCard"
import NewLinkForm from "./AdminComponents/Link/LinkForm"
import NewFAQForm from "./AdminComponents/FAQ/FAQForm"
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Links');
    const [blogPosts, setBlogPosts] = useState([]);
    const [faqPosts, setFaqPosts] = useState([]);
    const [faqs, setFaqs] = useState([]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        axios.get('http://localhost:8008/api/blog')
            .then(response => {
                setBlogPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching blog data:', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8008/api/info')
            .then(response => {
                setFaqPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching blog data:', error);
            });

        axios.get('http://localhost:8008/api/faqs')
            .then(response => {
                setFaqs(response.data);
            })
            .catch(error => {
                console.error('Error fetching FAQs:', error);
            });
    }, []);

    const renderHeader = () => {
        switch (activeTab) {
            case 'Links':
                return 'Links';
            case 'FAQs':
                return 'FAQs';
            case 'Add New Link':
                return 'Add New Link';
            case 'Add New FAQs':
                return 'Add New FAQ';
            default:
                return '';
        }
    };

    return (
        <div className='row bg p-0 m-0' style={{ height: '100vh', backgroundColor: '#222840'}}>
            <nav className="col-md-2 shadow-lg d-flex flex-column px-3" style={{ paddingTop: '20px', backgroundColor: '#131633', borderRight: '1px solid #313452', position: 'sticky', margin: '0' }}>
                <div className="navbar-brand d-flex justify-content-center mb-auto">
                    <img src={GDSLogo} alt="GDS Logo" width="200px" className="align-top" />
                </div>
                <div className="nav flex-column flex-grow-1 pt-5">
                    <TabButton label="Links" icon={faLink} onClick={() => handleTabChange('Links')} isActive={activeTab === 'Links'} />
                    <TabButton label="FAQs" icon={faQuestionCircle} onClick={() => handleTabChange('FAQs')} isActive={activeTab === 'FAQs'} />
                    <TabButton label="Add New Link" icon={faPlus} onClick={() => handleTabChange('Add New Link')} isActive={activeTab === 'Add New Link'} />
                    <TabButton label="Add New FAQs" icon={faComment} onClick={() => handleTabChange('Add New FAQs')} isActive={activeTab === 'Add New FAQs'} />
                </div>
                <div className="d-flex justify-content-center flex-column mt-auto">
                    <button className="btn btn-danger w-100">
                        <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                    </button>
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
                                            content={post.content} 
                                            image={post.thumbnail.link}
                                            dateTimeCreated={post.dateCreated}  
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {activeTab === 'FAQs' && (
                            <div className="container">
                                {faqPosts.map((faq, index) => (
                                    <div key={index} className="row mb-4">
                                        <div className="col-12">
                                            <FAQCard
                                                id={faq._id} 
                                                question={faq.question} 
                                                answer={faq.answer} 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    {activeTab === 'FAQs' && (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {faqs.map((faq, index) => (
                                <div key={faq.id} className="col">
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
                                <NewLinkForm />
                            </div>
                        </div>
                    )}
                    {activeTab === 'Add New FAQs' && (
                        <div className="container">
                            <div className="mb-3">
                                <NewFAQForm />
                            </div>
                        </div>
                    )}
                </section>
            </main>

            <style jsx>{`
                .sidebar {
                    transition: width 0.3s ease;
                }

                ::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}

export default Dashboard;
