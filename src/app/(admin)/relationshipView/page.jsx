"use client";
import React from "react";
import { useState } from "react";
import "./RelationView.scss";


const TransactionView = () => {
    const [activeTab, setActiveTab] = useState("Activity");
  
  return (
    <div className="transaction-view">
        <div className="transHeader">
        <h2 className="title">Relationship View</h2>
      <div className="actions">
    <div className="closediv">
    <button className="close-btn">Close</button>
    </div>
    <button className="close-btn">Edit</button>

        <button className="action-btn">
        Actions &nbsp; <span className="arrow"></span>
        </button>
      </div>
        </div>
     
      <div className="content">
        {/* Left Section: Information & Documents */}
        <div className="left-section">
        <div className="info-card">
      <h3>Details</h3>
      <div className="row">
        <div className="col-md-6 col-xl-6 col-lg-6">
          <div className="info-item">
<img src="/images/relationsview/1.png" alt="icon"/>
            <div className="info-text">
              <span>Full Name</span>
              <p>Fariz Elahi</p>
            </div>
          </div>
          <div className="info-item">
          <img src="/images/relationsview/2.png" alt="icon"/>
          <div className="info-text">
              <span>Phone Number</span>
              <p>Seller Name</p>
            </div>
          </div>
          <div className="info-item">
          <img src="/images/relationsview/3.png" alt="icon"/>
          <div className="info-text">
              <span>Resedential Address</span>
              <p className="status">House # 123, Sector 13/D-1</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-6 col-lg-6">
        <div className="info-item">
        <img src="/images/relationsview/4.png" alt="icon"/>
        <div className="info-text">
              <span>Gender</span>
              <p>Male</p>
            </div>
          </div>
          <div className="info-item">
          <img src="/images/relationsview/5.png" alt="icon"/>
          <div className="info-text">
              <span>Email Address</span>
              <p>fariz.jetnetix@gmail.com</p>
            </div>
          </div>
        
        </div>
      </div>
    </div>

        </div>

        {/* Right Section: Tabs */}
        <div className="right-section">
        <div className="tabs">
            <button
              className={`tab ${activeTab === "Activity" ? "active" : ""}`}
              onClick={() => setActiveTab("Activity")}
            >
              Activity
            </button>
            <button
              className={`tab ${activeTab === "Transactions" ? "active" : ""}`}
              onClick={() => setActiveTab("Transactions")}
            >
              Transactions
            </button>
            <button
              className={`tab ${activeTab === "Leads" ? "active" : ""}`}
              onClick={() => setActiveTab("Leads")}
            >
              Leads
            </button>
            <button
              className={`tab ${activeTab === "Tasks" ? "active" : ""}`}
              onClick={() => setActiveTab("Tasks")}
            >
              Tasks
            </button>
            <button
              className={`tab ${activeTab === "Notes" ? "active" : ""}`}
              onClick={() => setActiveTab("Notes")}
            >
              Notes
            </button>
          </div>
          <div className="tab-content">
            {activeTab === "Activity" && (
              <div className="activity">
                <div className="activity-item">
                  <img src="/images/transview/icon3.png" alt="icon" />
                  <div className="text">
                    <span className="message">
                    Quotation #4568 sent to customer@email.com
                                        </span>
                    <p className="timestamp">10/12/2025 (10:00 am)</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Transactions" && (
              <div>
                Transactions
                </div>
        
        
            )}

            {activeTab === "Leads" && (
              <div className="product">
                <h3>Leads Details</h3>
                <p>Leads Name: XYZ</p>
              </div>
            )}
              {activeTab === "Tasks" && (
              <div className="product">
                <h3>Tasks Details</h3>
                <p>Tasks Name: XYZ</p>
              </div>
            )}
             {activeTab === "Notes" && (
              <div className="product">
                <h3>Notes Details</h3>
                <p>Notes Name: XYZ</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions Button */}

    </div>
  );
};

export default TransactionView;
