import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faQuestionCircle, faPlus, faComment, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'; // Add faSignOutAlt
import axios from 'axios';
import GDSLogo from '../assets/3.png';
import TabButton from "./AdminComponents/TabButton"
import LinkCard from "./AdminComponents/Link/LinkCard"
import FAQCard from "./AdminComponents/FAQ/FAQCard"
import NewLinkForm from "./AdminComponents/Link/LinkForm"
import NewFAQForm from "./AdminComponents/FAQ/FAQForm"
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Links');
    const [blogPosts, setBlogPosts] = useState([]);
    const [faqPosts, setFaqPosts] = useState([]);
    const navigate = useNavigate(); // useNavigate hook

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const fetchBlogPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8008/api/blog');
            setBlogPosts(response.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    const fetchFAQs = async () => {
        try {
            const response = await axios.get('http://localhost:8008/api/info');
            setFaqPosts(response.data);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        }
    };

    useEffect(() => {
        fetchBlogPosts(); // Fetch blog posts initially

        // Fetch blog posts every 5 minutes
        const blogInterval = setInterval(fetchBlogPosts, 5 * 60 * 1000);

        return () => clearInterval(blogInterval);
    }, []);

    useEffect(() => {
        fetchFAQs(); // Fetch FAQs initially

        // Fetch FAQs every 5 minutes
        const faqInterval = setInterval(fetchFAQs, 5 * 60 * 1000);

        return () => clearInterval(faqInterval);
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
    const handleSignOut = () => {
        // Handle sign out action
        window.history.pushState(null, '', '/admin');
        navigate('/admin'); // Navigate to the admin login page
    };

    return (
        <div className='row bg p-0 m-0' style={{ height: '100vh', backgroundColor: '#222840'}}>
            <nav className="col-md-2 shadow-lg d-flex flex-column px-3" style={{ paddingTop: '20px', backgroundColor: '#131633', borderRight: '1px solid #313452', position: 'sticky', margin: '0' }}>
                <Link to="/"> {/* Link to the root route */}
                    <div className="navbar-brand d-flex justify-content-center mb-auto">
                        <img src={GDSLogo} alt="GDS Logo" width="200px" className="align-top" />
                    </div>
                </Link>
                <div className="nav flex-column flex-grow-1 pt-5">
                    <TabButton label="Links" icon={faLink} onClick={() => handleTabChange('Links')} isActive={activeTab === 'Links'} />
                    <TabButton label="FAQs" icon={faQuestionCircle} onClick={() => handleTabChange('FAQs')} isActive={activeTab === 'FAQs'} />
                    <TabButton label="Add New Link" icon={faPlus} onClick={() => handleTabChange('Add New Link')} isActive={activeTab === 'Add New Link'} />
                    <TabButton label="Add New FAQs" icon={faComment} onClick={() => handleTabChange('Add New FAQs')} isActive={activeTab === 'Add New FAQs'} />
                </div>
                <div className="d-flex justify-content-center flex-column mt-auto">
                    <button className="btn btn-danger w-100" onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
                    </button>
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

            <style>{`
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
