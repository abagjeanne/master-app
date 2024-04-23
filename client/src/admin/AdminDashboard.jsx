import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faQuestionCircle, faPlus, faCog, faComment } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import GDSLogo from '../assets/3.png';
import TabButton from "./AdminComponents/TabButton"
import LinkCard from "./AdminComponents/Link/LinkCard"
import FAQCard from "./AdminComponents/FAQ/FAQCard"
import NewLinkForm from "./AdminComponents/Link/LinkForm"
import NewFAQForm from "./AdminComponents/FAQ/FAQForm"

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
        <div className='row bg' style={{ height: '100vh', backgroundColor: '#222840' }}>
            <nav className="col-md-2 sidebar shadow-lg d-flex flex-column" style={{ paddingTop: '20px', backgroundColor: '#131633', borderRight: '1px solid #313452', position: 'sticky' }}>
                <div className="navbar-brand d-flex justify-content-center mb-auto">
                    <img src={GDSLogo} alt="GDS Logo" width="200px" className="align-top" />
                </div>
                <div className="nav flex-column flex-grow-1">
                    <TabButton label="Links" icon={faLink} onClick={() => handleTabChange('Links')} isActive={activeTab === 'Links'} />
                    <TabButton label="FAQs" icon={faQuestionCircle} onClick={() => handleTabChange('FAQs')} isActive={activeTab === 'FAQs'} />
                    <TabButton label="Add New Link" icon={faPlus} onClick={() => handleTabChange('Add New Link')} isActive={activeTab === 'Add New Link'} />
                    <TabButton label="Add New FAQs" icon={faComment} onClick={() => handleTabChange('Add New FAQs')} isActive={activeTab === 'Add New FAQs'} />
                </div>
            </nav>

            <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
                <header className="text-center mb-4">
                    <h1 className="dashboard-title" style={{ color: 'white', paddingTop: '20px' }}>{renderHeader()}</h1>
                </header>
                <section className="p-4 rounded shadow-sm mt-4 text-white" style={{ border: '1px solid #313452', backgroundColor: '#131633' }}>
                    {activeTab === 'Links' && (
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            {blogPosts.map((post, index) => (
                                <div key={post._id} className="col">
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
