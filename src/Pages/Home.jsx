import React, { useEffect } from 'react'
import "../css/Home.css"
import { Chart } from 'chart.js/auto';

const Home = () => {

  useEffect(() => {
    const ctx1 = document.getElementById('worldwideSales').getContext('2d');
    const ctx2 = document.getElementById('salesRevenue').getContext('2d');

    const worldwideSales = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
          { label: 'USA', data: [10, 20, 30, 40, 50, 60, 70], backgroundColor: '#1A5319' },
          { label: 'UK', data: [15, 25, 35, 45, 55, 65, 75], backgroundColor: '#1A5319' },
          { label: 'AU', data: [20, 30, 40, 50, 60, 70, 80], backgroundColor: '#1A5319' }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: { grid: { color: '#444' } },
          y: { grid: { color: '#444' } }
        },
        plugins: {
          legend: { labels: { color: '#508D4E' } }
        }
      }
    });

    const salesRevenue = new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [
          { label: 'Sales', data: [50, 100, 150, 200, 250, 200, 220], borderColor: '#1A5319', fill: true, backgroundColor: 'rgba(0, 255, 0, 0.1)' },
          { label: 'Revenue', data: [70, 120, 170, 220, 270, 230, 240], borderColor: '#1A5319', fill: true, backgroundColor: 'rgba(0, 204, 0, 0.2)' }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: { grid: { color: '#444' } },
          y: { grid: { color: '#444' } }
        },
        plugins: {
          legend: { labels: { color: '#508D4E' } }
        }
      }
    });

    // Cleanup function to destroy charts when component unmounts
    return () => {
      worldwideSales.destroy();
      salesRevenue.destroy();
    };
  }, []);

  return (
    <>
    <div className="home1">
   <div className="card-container">
        <div className="card table-bordered border-success">
            <div className="icon">📈</div>
            <div className="info">
                <h3>Today Sale</h3>
                <p>$1234</p>
            </div>
        </div>
        <div className="card table-bordered border-success">
            <div className="icon">📊</div>
            <div className="info">
                <h3>Total Sale</h3>
                <p>$1234</p>
            </div>
        </div>
        <div className="card table-bordered border-success">
            <div className="icon">📉</div>
            <div className="info">
                <h3>Today Revenue</h3>
                <p>$1234</p>
            </div>
        </div>
        <div className="card table-bordered border-success">
            <div className="icon">📊</div>
            <div className="info">
                <h3>Total Revenue</h3>
                <p>$1234</p>
            </div>
        </div>
    </div>

    <div className="chart-container">
        <div className="chart">
            <h3 className='text-success'>Worldwide Sales <span className="show-all text-success">Show All</span></h3>
            <canvas id="worldwideSales"></canvas>
        </div>
        <div className="chart">
            <h3 className='text-success'>Sales & Revenue <span class="show-all text-success">Show All</span></h3>
            <canvas id="salesRevenue"></canvas>
        </div>
    </div>
    </div>
    </>
  )
}

export default Home