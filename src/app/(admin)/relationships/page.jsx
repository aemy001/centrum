'use client'

import React, { useState } from 'react'
import { Table, Tag, Checkbox, Button, Input } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import './relations1.scss'
import Dropdown from 'react-bootstrap/Dropdown'

const initialData = [
  {
    key: '1',
    addedOn: '15/08/2017',
    time: '11:23 pm',
    customerName: 'Mr. J. Bloemhoff',
    details: '2715 Ash Dr. San Jose, South Dakota 83475',
  },
  {
    key: '2',
    addedOn: '16/08/2013',
    time: '10:41 pm',
    customerName: 'Mr. J. Bloemhoff',
    details: '4140 Parker Rd. Allentown, New Mexico 31134',
  },
  {
    key: '3',
    addedOn: '12/06/2020',
    time: '05:49 pm',
    customerName: 'Mr. J. Bloemhoff',
    details: '6391 Elgin St. Celina, Delaware 10299',
  },
]

const RelationTable = () => {
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState(initialData)
  const [selectedFilter, setSelectedFilter] = useState(null)

  // Handle Search
  const handleSearch = () => {
    const filtered = initialData.filter(
      (item) =>
        item.customerName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.details.toLowerCase().includes(searchText.toLowerCase()) ||
        item.status.toLowerCase().includes(searchText.toLowerCase()),
    )
    setFilteredData(filtered)
  }

  // Handle Filter
  const handleFilter = (status) => {
    if (selectedFilter === status) {
      setFilteredData(initialData)
      setSelectedFilter(null)
    } else {
      const filtered = initialData.filter((item) => item.status === status)
      setFilteredData(filtered)
      setSelectedFilter(status)
    }
  }

  // Handle Clearing Filters
  const clearFilters = () => {
    setFilteredData(initialData)
    setSearchText('')
    setSelectedFilter(null)
  }

  const columns = [
    {
      title: <Checkbox />,
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <Checkbox />,
    },
    {
      title: 'Customer',
      dataIndex: 'customerName',
      key: 'customerName',
      sorter: (a, b) => {
        if (a.customerName < b.customerName) return -1
        if (a.customerName > b.customerName) return 1
        return 0
      },
      render: (text, record) => (
        <div className="customer-info">
          <span className="customer-initial">J.</span>
          <div>
            <div className="customer-name">{record.customerName}</div>
            <div className="customer-details">{record.details}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Added on',
      dataIndex: 'addedOn',
      key: 'addedOn',
      sorter: (a, b) => new Date(a.addedOn) - new Date(b.addedOn),
      render: (text, record) => (
        <div className="addedon">
          <p className="p1">{record.addedOn}</p>
          <p className="p2">{record.time}</p>
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: () => (
        <>
          <Dropdown className="dropDownItem">
            <Dropdown.Toggle id="dropdown-basic">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                {' '}
                <path
                  d="M12 13.5C12.5523 13.5 13 13.0523 13 12.5C13 11.9477 12.5523 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5C11 13.0523 11.4477 13.5 12 13.5Z"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{' '}
                <path
                  d="M19 13.5C19.5523 13.5 20 13.0523 20 12.5C20 11.9477 19.5523 11.5 19 11.5C18.4477 11.5 18 11.9477 18 12.5C18 13.0523 18.4477 13.5 19 13.5Z"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{' '}
                <path
                  d="M5 13.5C5.55228 13.5 6 13.0523 6 12.5C6 11.9477 5.55228 11.5 5 11.5C4.44772 11.5 4 11.9477 4 12.5C4 13.0523 4.44772 13.5 5 13.5Z"
                  stroke="#98A2B3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{' '}
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/relationshipView">View</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ),
    },
  ]

  return (
    <div className="table-container">
      <div className="table-header mb-3">
        <h2>
          Relationships <br />
          <span className="subline">Subline</span>
        </h2>
        <div className="filters">
          <Button className="filter-icon-btn">
            <img src="/images/filter-icon.png" /> Filter
          </Button>
          <div className="filterDiv">
            <Button className="add-new-btn">
              <img src="/images/add.png" /> Add New
            </Button>
          </div>
          <Input
            className="search-input"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onPressEnter={handleSearch}
            prefix={<img src="/images/search-lg.png" />}
          />
        </div>
      </div>
      {/* <div className="filters2 my-3">
        <Button className="clear-btn" onClick={clearFilters}>
          Clear All
        </Button>
         {selectedFilter && ( 
        <Button className="filter-btn" onClick={() => handleFilter(selectedFilter)}>
          {selectedFilter}
          Filter 01 ✕
        </Button>
        )}
      </div> */}
      <Table columns={columns} dataSource={filteredData} pagination={false} className="custom-table" />
    </div>
  )
}

export default RelationTable
