import React, { useState } from 'react';
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

function Dashboard() {
    const [activeTab, setActiveTab] = useState('blog');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className={`col-md-2 bg-white sidebar shadow d-flex flex-column ${isSidebarOpen ? 'open' : ''}`}>
                    <div className="justify-content-center" style={{ marginTop: '20px' }}>
                        <img src={GDSLogo} alt="Logo" className="img-fluid" style={{ maxHeight: '80px', paddingTop: '10px', paddingBottom: '10px' }} />
                    </div>
                    <div className={`nav flex-column flex-grow-1 ${isSidebarOpen ? 'show' : ''}`}>
                        <TabButton label="Blog" onClick={() => handleTabChange('blog')} isActive={activeTab === 'blog'} />
                        <TabButton label="Add New Links" onClick={() => handleTabChange('Add New Links')} isActive={activeTab === 'Add New Links'} />
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
                            <div>
                            <h2>Blog Posts</h2>
                            <ul>
                                <li>Blog Post 1</li>
                                <li>Blog Post 2</li>
                                <li>Blog Post 3</li>
                                {/* Add more blog post items as needed */}
                            </ul>
                        </div>
                        )}
                    {activeTab === 'Add New Links' && (
                        <div className="container">
                            <div className="mb-3">
                                <h2>Add New Link</h2> {/* Moved the <h2> inside the container */}
                                <form className="needs-validation" noValidate>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title:</label>
                                        <input type="text" className="form-control" id="title" name="title" required />
                                        <div className="invalid-feedback">
                                            Please provide a title.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="content" className="form-label">Content:</label>
                                        <textarea className="form-control" id="content" name="content" required></textarea>
                                        <div className="invalid-feedback">
                                            Please provide content.
                                        </div>
                                    </div>
                                    {/* Add more fields as needed, such as author, tags, etc. */}
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    )}


                    </section>
                </main>
            </div>
            <style jsx>{`
                .sidebar {
                    transition: width 0.3s ease;
                }

                .sidebar-open {
                    transition: width 0.3s ease;
                }
            `}</style>
        </div>
    );
}

export default Dashboard;
