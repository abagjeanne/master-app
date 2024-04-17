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
                    <div className="justify-content-center" style={{ marginTop: '20px' }}> {/* Added margin top */}
                        <img src={GDSLogo} alt="Logo" className="img-fluid" style={{ maxHeight: '80px', paddingTop: '10px', paddingBottom: '10px' }} /> {/* Added padding top and bottom */}
                    </div>
                    <div className={`nav flex-column flex-grow-1 ${isSidebarOpen ? 'show' : ''}`}>
                        <TabButton label="Blog" onClick={() => handleTabChange('blog')} isActive={activeTab === 'blog'} />
                        <TabButton label="Forms" onClick={() => handleTabChange('forms')} isActive={activeTab === 'forms'} />
                        {/* <TabButton label="Editor" onClick={() => handleTabChange('editor')} isActive={activeTab === 'editor'} />
                        <TabButton label="Tables" onClick={() => handleTabChange('tables')} isActive={activeTab === 'tables'} />
                        <TabButton label="Profile" onClick={() => handleTabChange('profile')} isActive={activeTab === 'profile'} />
                        <TabButton label="Errors" onClick={() => handleTabChange('errors')} isActive={activeTab === 'errors'} /> */}
                    </div>
                    <div className="mt-auto"></div>
                </nav>

                <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
                    <header className="text-center mb-4">
                        <h1 className="dashboard-title" style={{ color: 'blue' }}>Dashboard</h1>
                    </header>
                    
                    <section className={`p-4 border rounded shadow-sm mt-4 ${isSidebarOpen ? 'sidebar-open' : ''}`} style={{ backgroundColor: 'white', color: 'black', minHeight: '100vh' }}>
                        {activeTab === 'blog' && <h2>Blog Posts</h2>}
                        {activeTab === 'forms' && <h2>Forms </h2>}
                        {/* {activeTab === 'editor' && <h2>Content Editor</h2>}
                        {activeTab === 'tables' && <h2>Tables</h2>}
                        {activeTab === 'profile' && <h2>User Profile</h2>}
                        {activeTab === 'errors' && <h2>Errors</h2>} */}
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
