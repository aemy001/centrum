'use client'
import React from 'react'
import { useState } from 'react'
import './TransactionView.scss'

const TransactionView = () => {
  const [activeTab, setActiveTab] = useState('Activity')

  return (
    <div className="transaction-view">
      <div className="transHeader">
        <h2 className="title">Transaction View</h2>
        <div className="actions">
          <div className="closediv">
            <button className="close-btn">Close</button>
          </div>
          <button className="action-btn">
            Actions &nbsp; <span className="arrow"></span>
          </button>
        </div>
      </div>

      <div className="content">
        {/* Left Section: Information & Documents */}
        <div className="left-section">
          <div className="info-card">
            <h3>Information</h3>
            <div className="row">
              <div className="col-md-6 col-xl-6 col-lg-6">
                <div className="info-item">
                  <img src="/images/transview/icon1.png" alt="icon" />
                  <div className="info-text">
                    <span>Date Created</span>
                    <p>01/12/2025 (10:00 am)</p>
                  </div>
                </div>
                <div className="info-item">
                  <img src="/images/transview/icon4.png" alt="icon" />
                  <div className="info-text">
                    <span>Quote Last Viewed</span>
                    <p>-</p>
                  </div>
                </div>
                <div className="info-item">
                  <img src="/images/transview/icon5.png" alt="icon" />
                  <div className="info-text">
                    <span>Status</span>
                    <p className="status">New</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-6 col-lg-6">
                <div className="info-item">
                  <img src="/images/transview/icon7.png" alt="icon" />
                  <div className="info-text">
                    <span>Last Updated</span>
                    <p>01/12/2025 (10:00 am)</p>
                  </div>
                </div>
                <div className="info-item">
                  <img src="/images/transview/icon6.png" alt="icon" />
                  <div className="info-text">
                    <span>Assigned to</span>
                    <p>Seller Name</p>
                  </div>
                </div>
                <div className="info-item">
                  <img src="/images/transview/icon4.png" alt="icon" />
                  <div className="info-text">
                    <span>Quote Expiry</span>
                    <p>15/12/2025 (10:00 am)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Section */}
          <div className="documents">
            <h3>Documents</h3>
            <div className="doc-item">
              <div className="doc-info">
                <p className="doc-name">quotation.pdf</p>
                <span className="doc-size">124kb</span>
              </div>
              <button style={{ border: 'none', padding: '0px', background: 'transparent' }}>
                {' '}
                <img src="/images/transview/download.png" alt="Download Icon" />
              </button>
            </div>

            <div className="doc-item">
              <div className="doc-info">
                <p className="doc-name">product_specification.pdf</p>
                <span className="doc-size">5mb</span>
              </div>
              <button style={{ border: 'none', padding: 0, background: 'transparent' }}>
                {' '}
                <img src="/images/transview/download.png" alt="Download Icon" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section: Tabs */}
        <div className="right-section">
          <div className="tabs">
            <button className={`tab ${activeTab === 'Activity' ? 'active' : ''}`} onClick={() => setActiveTab('Activity')}>
              Activity
            </button>
            <button className={`tab ${activeTab === 'Customer' ? 'active' : ''}`} onClick={() => setActiveTab('Customer')}>
              Customer
            </button>
            <button className={`tab ${activeTab === 'Product' ? 'active' : ''}`} onClick={() => setActiveTab('Product')}>
              Product
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'Activity' && (
              <div className="activity">
                <div className="activity-item">
                  <img src="/images/transview/icon3.png" alt="icon" />
                  <div className="text">
                    <span className="message">Quotation Sent to customer@email.com</span>
                    <p className="timestamp">10/12/2025 (10:00 am)</p>
                  </div>
                </div>
                <div className="activity-item">
                  <img src="/images/transview/icon2.png" alt="icon" />
                  <div className="text">
                    <span className="message">Waiting for the customer to open the quote</span>
                    <p className="timestamp">Quote Expiry: 24/12/2025 (10:00 am)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Customer' && (
              <div className="row p-2">
                <div className="col-md-6 col-xl-6 col-lg-6">
                  <div className="customer-item">
                    <img src="/images/transview/customer/1.png" alt="icon" />
                    <div className="customer-text">
                      <span>Name</span>
                      <p>Dhr. FE Fariz</p>
                    </div>
                  </div>
                  <div className="customer-item">
                    <img src="/images/transview/customer/2.png" alt="icon" />
                    <div className="customer-text">
                      <span>Phone Number</span>
                      <p>+92 304 2328820</p>
                    </div>
                  </div>
                  <div className="customer-item">
                    <img src="/images/transview/customer/3.png" alt="icon" />
                    <div className="customer-text">
                      <span>Delivery Address</span>
                      <p className="status">House # 230, Sector 55/C-1</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-6 col-lg-6">
                  <div className="customer-item">
                    <img src="/images/transview/customer/4.png" alt="icon" />
                    <div className="customer-text">
                      <span>Type</span>
                      <p>Consumers</p>
                    </div>
                  </div>
                  <div className="customer-item">
                    <img src="/images/transview/customer/5.png" alt="icon" />
                    <div className="customer-text">
                      <span>Email Address</span>
                      <p>fariz.jetnetix@gmail.com</p>
                    </div>
                  </div>
                  <div className="customer-item">
                    <img src="/images/transview/customer/6.png" alt="icon" />
                    <div className="customer-text">
                      <span>Correspondence Address</span>
                      <p>House # 230, Sector 55/C-1</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Product' && (
              <div className="product">
                <div className="row d-flex align-items-center">
                  <div className="col-12 col-md-4 text-center">
                    <img src="/images/transview/product1.jpg" width={250} height={250} className="productimg img-fluid" alt="Product" />
                  </div>
                  <div className="col-12 col-md-8 mx-auto">
                    <div className="product-text">
                      <span>Product</span>
                      <p>AlphaESS - 3.8 kWh battery - 5 kW inverter</p>
                    </div>
                    <div className="product-text">
                      <span>Type</span>
                      <p>Home Battery</p>
                    </div>
                    <div className="product-text">
                      <span>Supplier</span>
                      <p>Solar Centrum Netherlands</p>
                    </div>
                    <div className="product-text">
                      <span>Organizations</span>
                      <p>Solar Centrum Netherlands</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions Button */}
    </div>
  )
}

export default TransactionView
