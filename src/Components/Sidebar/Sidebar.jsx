import { useState } from 'react';

export default function Sidebar({ isOpen, closeMobileSidebar }) {
  const [openSections, setOpenSections] = useState({
    dashboard: true,
    widget: false,
    application: false,
    forms: false,
    uiElements: false,
    pages: false,
    utilities: false,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      <button
        type="button"
        className={`berry-sidebar-overlay ${isOpen ? 'show' : ''}`}
        aria-label="Close navigation menu"
        onClick={closeMobileSidebar}
      />

      <aside id="dashboard-sidebar" className={`berry-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="berry-sidebar-scroll">
          
          {/* Dashboard Section */}
          <div className="sidebar-group">
            <span className="group-title">Dashboard</span>
            <div className="menu-item active">
              <span className="menu-dot"></span>
              <span>Default</span>
            </div>
            <div className="menu-item">
              <span className="menu-dot"></span>
              <span>Analytics</span>
            </div>
          </div>

          {/* Widget Accordion */}
          <div className="sidebar-group">
            <button type="button" className="group-header-accordion" aria-expanded={openSections.widget} onClick={() => toggleSection('widget')}>
              <span className="group-title">Widget</span>
              <span className={`accordion-arrow ${openSections.widget ? 'open' : ''}`}>›</span>
            </button>
            {openSections.widget && (
              <div className="accordion-content">
                <div className="menu-item"><span>Statistics</span></div>
                <div className="menu-item"><span>Data</span></div>
                <div className="menu-item"><span>Chart</span></div>
              </div>
            )}
          </div>

          {/* Application Accordion */}
          <div className="sidebar-group">
            <button type="button" className="group-header-accordion" aria-expanded={openSections.application} onClick={() => toggleSection('application')}>
              <span className="group-title">Application</span>
              <span className={`accordion-arrow ${openSections.application ? 'open' : ''}`}>›</span>
            </button>
            {openSections.application && (
              <div className="accordion-content">
                <div className="menu-item"><span>Users</span></div>
                <div className="menu-item"><span>Customer</span></div>
                <div className="menu-item"><span>Order</span></div>
                <div className="menu-item"><span>Chat</span></div>
                <div className="menu-item"><span>Kanban</span></div>
                <div className="menu-item"><span>Mail</span></div>
                <div className="menu-item"><span>Calendar</span></div>
                <div className="menu-item"><span>Contact</span></div>
                <div className="menu-item"><span>E-commerce</span></div>
                <div className="menu-item"><span>Invoice</span></div>
                <div className="menu-item"><span>CRM</span></div>
                <div className="menu-item"><span>Blog</span></div>
              </div>
            )}
          </div>

          {/* Forms Accordion */}
          <div className="sidebar-group">
            <button type="button" className="group-header-accordion" aria-expanded={openSections.forms} onClick={() => toggleSection('forms')}>
              <span className="group-title">Forms</span>
              <span className={`accordion-arrow ${openSections.forms ? 'open' : ''}`}>›</span>
            </button>
            {openSections.forms && (
              <div className="accordion-content">
                <div className="menu-item"><span>Components</span></div>
                <div className="menu-item"><span>Plugins</span></div>
                <div className="menu-item"><span>Layouts</span></div>
                <div className="menu-item"><span>Data Grid</span></div>
                <div className="menu-item"><span>Forms Validation</span></div>
                <div className="menu-item"><span>Forms Wizard</span></div>
              </div>
            )}
          </div>

          {/* UI Elements Accordion */}
          <div className="sidebar-group">
            <button type="button" className="group-header-accordion" aria-expanded={openSections.uiElements} onClick={() => toggleSection('uiElements')}>
              <span className="group-title">UI Element</span>
              <span className={`accordion-arrow ${openSections.uiElements ? 'open' : ''}`}>›</span>
            </button>
            {openSections.uiElements && (
              <div className="accordion-content">
                <div className="menu-item"><span>Basic</span></div>
                <div className="menu-item"><span>Advance</span></div>
              </div>
            )}
          </div>

          {/* Pages Accordion */}
          <div className="sidebar-group">
            <button type="button" className="group-header-accordion" aria-expanded={openSections.pages} onClick={() => toggleSection('pages')}>
              <span className="group-title">Pages</span>
              <span className={`accordion-arrow ${openSections.pages ? 'open' : ''}`}>›</span>
            </button>
            {openSections.pages && (
              <div className="accordion-content">
                <div className="menu-item"><span>Authentication</span></div>
                <div className="menu-item"><span>Maintenance</span></div>
                <div className="menu-item"><span>Landing</span></div>
                <div className="menu-item"><span>Contact US</span></div>
                <div className="menu-item"><span>FAQs</span></div>
                <div className="menu-item"><span>Privacy Policy</span></div>
              </div>
            )}
          </div>

          {/* Bottom Upgrade Card */}
          <div className="berry-sidebar-card">
            <h4>Get Extra Space</h4>
            <p>28GB / 50GB Used</p>
            <div className="sidebar-progress-bar">
              <div className="progress-fill" style={{ width: '56%' }}></div>
            </div>
          </div>

        </div>
      </aside>
    </>
  );
}