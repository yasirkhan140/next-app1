'use client'
import React,{useEffect} from 'react'
import Chart from "chart.js/auto"
import Link from  'next/link'
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import Navbar from '../../Navbar'


export default function Charts(){
  var pie;
  useEffect(()=>{
    var bar = document.getElementById("myBarChart");
    var area = document.getElementById("myAreaChart");
    var myBarChart = new Chart(bar, {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
          label: "Revenue",
          backgroundColor: "rgba(2,117,216,1)",
          borderColor: "rgba(2,117,216,1)",
          data: [4215, 5312, 6251, 7841, 9821, 14984],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'month'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 6
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 15000,
              maxTicksLimit: 5
            },
            gridLines: {
              display: true
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
    var myLineChart = new Chart(area, {
      type: 'line',
      data: {
        labels: ["Mar 1", "Mar 2", "Mar 3", "Mar 4", "Mar 5", "Mar 6", "Mar 7", "Mar 8", "Mar 9", "Mar 10", "Mar 11", "Mar 12", "Mar 13"],
        datasets: [{
          label: "Sessions",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 40000,
              maxTicksLimit: 5
            },
            gridLines: {
              color: "rgba(0, 0, 0, .125)",
            }
          }],
        },
        legend: {
          display: false
        }
      }
    });
    pie = document.getElementById("myPieChart");
    var myPieChart = new Chart(pie, {
      type: 'pie',
      data: {
        labels: ["Blue", "Red", "Yellow", "Green"],
        datasets: [{
          data: [12.21, 15.58, 11.25, 8.32],
          backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
        }],
      },
    });
  })
  
  return(
    <>
        <Navbar/>
        <div id="layoutSidenav">
            <Sidebar/>
            <div id="layoutSidenav_content">
            <Char/>
            <Footer/>
            </div>
        </div>  
    </>  
  )
}
function Char() {
  
  return (
    <main>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Charts</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">Charts</li>
        </ol>
      <div className="card mb-4">
        <div className="card-body">
          Chart.js is a third party plugin that is used to generate the charts in
          this template. The charts below have been customized - for further
          customization options, please visit the official
          <a target="_blank" href="https://www.chartjs.org/docs/latest/" rel='noreferrer'>
            Chart.js documentation
          </a>
          .
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <i className="fas fa-chart-area me-1" />
          Area Chart Example
        </div>
        <div className="card-body">
          <canvas id="myAreaChart" width="100%" height={30} />
        </div>
        <div className="card-footer small text-muted">
          Updated yesterday at 11:59 PM
        </div>
      </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-bar me-1" />
                Bar Chart Example
              </div>
              <div className="card-body">
                <canvas id="myBarChart" width="100%" height='50%' />
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-chart-pie me-1" />
                Pie Chart Example
              </div>
              <div className="card-body">
                <canvas id="myPieChart" width="100%" height="50%" />
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}
