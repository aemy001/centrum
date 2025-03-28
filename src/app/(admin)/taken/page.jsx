'use client'

import React, { useState } from 'react'
import { Table, Tag, Checkbox, Button, Input } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import './CustomTable.scss'
import Dropdown from 'react-bootstrap/Dropdown'
import TextFormInput from '@/components/from/TextFormInput'
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import SelectFormInput from '@/components/from/SelectFormInput'

import Modal from 'react-bootstrap/Modal'

import FlatPickrDate from '@/app/(admin)/taken/flatPickrDate'

const initialData = [
  {
    key: '1',
    addedOn: '15/08/2017',
    time: '11:23 pm',
    quoteNo: 883,
    customerName: 'Task Title',
    details: 'Your task description will appear here',
    createdBy: 'Farizia',
    status: 'New',
    date: '15/08/2017',
    time: '11:23 pm',
  },
  {
    key: '2',
    addedOn: '16/08/2013',
    time: '10:43 pm',
    quoteNo: 994,
    customerName: 'Task Title',
    details: 'Your task description will appear here',
    createdBy: 'Farukh',
    status: 'New',
    date: '15/08/2017',
    time: '11:23 pm',
  },
  {
    key: '3',
    addedOn: '12/06/2020',
    time: '09:46 pm',
    quoteNo: 738,
    customerName: 'Task Title',
    details: 'Your task description will appear here',
    createdBy: 'Owais',
    status: 'New',
    date: '15/08/2017',
    time: '11:23 pm',
  },
]

const CustomTable = () => {
  const { control } = useForm()

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

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const columns = [
    {
      title: <Checkbox />,
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: () => <Checkbox />,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag className={`custom-tag ${status.toLowerCase() === 'cancel' ? 'cancel' : ''}`} onClick={() => handleFilter(status)}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Title or Task',
      dataIndex: 'customerName',
      key: 'customer',
      sorter: (a, b) => {
        if (a.customerName < b.customerName) return -1
        if (a.customerName > b.customerName) return 1
        return 0
      },
      render: (text, record) => (
        <div className="customer-info">
          {/* <span className="customer-initial">J.</span> */}
          <div>
            <div className="customer-name">{record.customerName}</div>
            <div className="customer-details">{record.details}</div>
          </div>
        </div>
      ),
    },
    {
      title: 'Created by',
      dataIndex: 'addedOn',
      key: 'addedOn',
      sorter: (a, b) => new Date(a.addedOn) - new Date(b.addedOn),
      render: (text, record) => (
        <div className="customer-info">
          <div>
            <div className="customer-name">{record.createdBy}</div>
            {/* <div className="customer-details">{record.details}</div> */}
          </div>
        </div>
      ),
    },

    {
      title: 'Date & Time',
      dataIndex: 'dueDate',
      key: 'customer',
      render: (text, record) => (
        <div className="customer-info">
          <div>
            <div className="customer-name">{record.date}</div>
            <div className="customer-details">{record.time}</div>
          </div>
        </div>
      ),
    },

    {
      title: '',
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
              <Dropdown.Item href="#/action-1">View</Dropdown.Item>
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
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={12}>
              <TextFormInput name="title" label="Title" type="text" control={control} placeholder="Enter User Name" containerClassName="mb-3" />
            </Col>
            <Col lg={12}>
              {/* <TextFormInput name="title" label="Title" type="text" control={control} placeholder="Enter User Name" containerClassName="mb-3" /> */}
              <label htmlFor="" className="labelSetting">
                Description
              </label>
              <Form.Control as="textarea" aria-label="With textarea" placeholder="write your text here" />
            </Col>
            <Col md={6} className="mt-3">
              <SelectFormInput
                name="status"
                label="Status"
                control={control}
                options={[
                  {
                    value: 'Open',
                    label: 'Open',
                  },
                  {
                    value: 'Close',
                    label: 'Close',
                  },
                ]}
              />
            </Col>
            <Col xxl={6} className="mt-3">
              <label htmlFor="" className="labelSetting">
                Due on
              </label>
              <div className="position-relative">
                <div className="position-absolute calendarIconSet">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {' '}
                    <path
                      d="M21 10H3M16 2V6M8 2V6M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                      stroke="#98A2B3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{' '}
                  </svg>
                </div>
              </div>
              <div className="datePickSet">
                <FlatPickrDate />
              </div>
            </Col>
            <Col md={6} className="mt-3">
              <SelectFormInput
                name="link"
                label="Link To"
                control={control}
                options={[
                  {
                    value: 'None',
                    label: 'None',
                  },
                ]}
              />
            </Col>
            <Col md={6} className="mt-3">
              <SelectFormInput
                name="User"
                label="User"
                control={control}
                options={[
                  {
                    value: 'None',
                    label: 'None',
                  },
                ]}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary discardBtnSet" onClick={handleClose}>
            Discard
          </Button>
          <Button className="btn btn-primary createBtnset" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="table-header mb-3">
        <h2>
          Taken <br />
          <span className="subline">Subline</span>
        </h2>
        <div className="filters">
          <div className="filterDiv" style={{ border: 'none' }}>
            <Button className="filter-icon-btn">
              <img src="/images/filter-icon.png" /> Filter
            </Button>
          </div>
          <div className="filterDiv addNewBtn">
            <Button className="filter-icon-btn" onClick={handleShow}>
              <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {' '}
                  <path d="M12 5V19M5 12H19" stroke="#98A2B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{' '}
                </svg>
              </span>
              Add New
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

export default CustomTable
