export default function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <header className="berry-navbar">
      <div className="berry-navbar-left">
        {/* Berry Logo */}
        <div className="berry-logo-brand">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="18" r="12" fill="#2196f3" />
            <circle cx="12" cy="15" r="2.5" fill="#1e88e5" />
            <circle cx="20" cy="15" r="2.5" fill="#1e88e5" />
            <circle cx="16" cy="21" r="2.5" fill="#1565c0" />
            <path d="M16 6C16 6 18 3 22 4C22 4 21 8 16 6Z" fill="#00c853" />
            <path d="M16 6C16 6 14 3 10 4C10 4 11 8 16 6Z" fill="#00e676" />
          </svg>
          <span className="berry-logo-name">BERRY</span>
        </div>

        {/* Hamburger Toggle Button */}
        <button
          type="button"
          className="berry-hamburger-btn"
          onClick={toggleSidebar}
          title="Toggle Sidebar"
          aria-label="Toggle navigation menu"
          aria-expanded={isSidebarOpen}
          aria-controls="dashboard-sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="berry-search-box">
          <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="search" aria-label="Search dashboard" placeholder="Search..." />
        </div>
      </div>

      <div className="berry-navbar-right">
        {/* Notification Icon */}
        <button type="button" className="nav-icon-btn" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* Profile Avatar */}
        <div className="berry-profile-avatar" aria-label="Berry profile icon">
          <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="20" fill="#EDE7F6" />
            <path d="M20 13c-1.8-4.2-5.7-5.5-9-4.5.1 4.1 3 7.1 8 7.4" fill="#00C853" />
            <path d="M20 13c1.8-4.2 5.7-5.5 9-4.5-.1 4.1-3 7.1-8 7.4" fill="#00E676" />
            <path d="M20 13v5" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20 15c-6.5 0-10.5 4.5-10.5 9.5a10.5 10.5 0 0 0 21 0c0-5-4-9.5-10.5-9.5Z" fill="#5E35B1" />
            <circle cx="15.5" cy="23" r="1.3" fill="#B39DDB" />
            <circle cx="21" cy="20.5" r="1.3" fill="#B39DDB" />
            <circle cx="24.5" cy="26" r="1.3" fill="#B39DDB" />
            <circle cx="18" cy="29" r="1.3" fill="#B39DDB" />
          </svg>
        </div>
      </div>
    </header>
  );
}