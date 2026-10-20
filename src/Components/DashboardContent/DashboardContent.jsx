export default function DashboardContent() {
  const chartData = [
    { month: 'Jan', inv: 30, loss: 10, profit: 50, maint: 20 },
    { month: 'Feb', inv: 45, loss: 15, profit: 80, maint: 30 },
    { month: 'Mar', inv: 25, loss: 5, profit: 40, maint: 15 },
    { month: 'Apr', inv: 60, loss: 20, profit: 110, maint: 40 },
    { month: 'May', inv: 35, loss: 10, profit: 65, maint: 25 },
    { month: 'Jun', inv: 80, loss: 25, profit: 140, maint: 50 },
    { month: 'Jul', inv: 50, loss: 15, profit: 90, maint: 35 },
    { month: 'Aug', inv: 70, loss: 20, profit: 125, maint: 45 },
    { month: 'Sep', inv: 40, loss: 12, profit: 75, maint: 30 },
    { month: 'Oct', inv: 65, loss: 18, profit: 115, maint: 40 },
    { month: 'Nov', inv: 30, loss: 10, profit: 55, maint: 20 },
    { month: 'Dec', inv: 85, loss: 30, profit: 150, maint: 60 },
  ];

  return (
    <main className="berry-dashboard-main">
      
      {/* Top 3 Overview Cards */}
      <div className="top-cards-grid">
        
        {/* Card 1: Total Earning */}
        <div className="stat-card purple-card">
          <div className="card-header">
            <div className="card-icon-wrapper">
              <span>$</span>
            </div>
            <button className="card-menu-btn">•••</button>
          </div>
          <div className="card-body">
            <h2>$500.00</h2>
            <p>Total Earning</p>
          </div>
        </div>

        {/* Card 2: Total Order */}
        <div className="stat-card blue-card">
          <div className="card-header">
            <div className="card-icon-wrapper">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            </div>
            <div className="card-toggle-pills">
              <span className="active">Month</span>
              <span>Year</span>
            </div>
          </div>
          <div className="card-body">
            <h2>$961.00</h2>
            <p>Total Order</p>
          </div>
        </div>

        {/* Card 3: Income Cards */}
        <div className="stat-card mini-cards-wrapper">
          <div className="mini-card active-blue">
            <div className="mini-card-icon">$</div>
            <div>
              <h3>$203k</h3>
              <p>Total Income</p>
            </div>
          </div>
          <div className="mini-card">
            <div className="mini-card-icon alt">$</div>
            <div>
              <h3>$203k</h3>
              <p>Total Income</p>
            </div>
          </div>
        </div>

      </div>

      {/* Middle Grid: Growth Chart & Popular Stocks */}
      <div className="middle-dashboard-grid">
        
        {/* Total Growth Stacked Bar Chart */}
        <div className="chart-card-box">
          <div className="chart-header">
            <div>
              <span className="subtitle">Total Growth</span>
              <h2 className="title">$2,324.00</h2>
            </div>
            <select className="chart-select">
              <option>Today</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          {/* Interactive Stacked CSS Bar Chart */}
          <div className="bar-chart-container">
            <div className="chart-bars-wrapper">
              {chartData.map((item, index) => (
                <div key={index} className="chart-bar-column">
                  <div className="bar-stack" title={`${item.month}: Profit $${item.profit}`}>
                    <div className="segment profit" style={{ height: `${item.profit / 2}px` }}></div>
                    <div className="segment maint" style={{ height: `${item.maint / 2}px` }}></div>
                    <div className="segment inv" style={{ height: `${item.inv / 2}px` }}></div>
                    <div className="segment loss" style={{ height: `${item.loss / 2}px` }}></div>
                  </div>
                  <span className="bar-label">{item.month}</span>
                </div>
              ))}
            </div>

            {/* Chart Legend */}
            <div className="chart-legend">
              <span className="legend-item"><span className="dot profit"></span> Profit</span>
              <span className="legend-item"><span className="dot maint"></span> Maintenance</span>
              <span className="legend-item"><span className="dot inv"></span> Investment</span>
              <span className="legend-item"><span className="dot loss"></span> Loss</span>
            </div>
          </div>
        </div>

        {/* Popular Stocks Widget */}
        <div className="stocks-card-box">
          <div className="stocks-header">
            <h3>Popular Stocks</h3>
            <button className="card-menu-btn">•••</button>
          </div>

          <div className="stock-highlight-card">
            <div className="stock-info">
              <h4>Bajaj Finserv</h4>
              <span className="badge-green">10% Profit</span>
            </div>
            <span className="stock-price">$1839.00</span>
          </div>

          <div className="stocks-list">
            <div className="stock-item">
              <div>
                <p className="name">Bajaj Finserv</p>
                <span className="sub green">10% Profit</span>
              </div>
              <span className="val">$1839.00</span>
            </div>
            <div className="stock-item">
              <div>
                <p className="name">TTML</p>
                <span className="sub red">10% Loss</span>
              </div>
              <span className="val">$100.00</span>
            </div>
            <div className="stock-item">
              <div>
                <p className="name">Reliance</p>
                <span className="sub green">10% Profit</span>
              </div>
              <span className="val">$200.00</span>
            </div>
            <div className="stock-item">
              <div>
                <p className="name">TTML</p>
                <span className="sub red">10% Loss</span>
              </div>
              <span className="val">$189.00</span>
            </div>
          </div>
        </div>

      </div>

      {/* Dashboard Footer */}
      <footer className="berry-dashboard-footer">
        <span>berrydashboard.com</span>
        <span>© codedthemes.com</span>
      </footer>

    </main>
  );
}