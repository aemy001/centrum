'use client'

import IconifyIcon from '@/components/wrappers/IconifyIcon'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col, Row } from 'react-bootstrap'
import { chartOptions, statisticData } from '../data'
const StatCard = ({ amount, change, icon, title, variant }) => {
  return (
    <Card style={{ minHeight: '164px' }}>
      <CardBody>
        <Row className="align-items-center justify-content-between">
        <Col xs={6} lg={6}>
      <div className="d-flex flex-column align-items-left p-2">
    
        <div className="avatar-md bg-light bg-opacity-50 rounded-circle d-flex align-items-center justify-content-center mb-2 setDashIcon">
          <IconifyIcon width={32} height={32} icon={icon} className="text-primary" />
        </div>

        <p className="text-muted my-1">{title}</p>
       <div className="d-flex">
       <h3 className="text-dark fw-bold d-flex align-items-center gap-2 mb-0">
          ${amount.toLocaleString()}  
          <span className="badge text-success bg-success-subtle fs-12">
            ↑ 70%
          </span>
        </h3>
      
       </div>
      </div>
    </Col>
          <Col xs={6} lg={6}>
            <ReactApexChart options={chartOptions} series={chartOptions.series} height={95} type="bar" className="apex-charts" />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}
const Statistics = () => {
  return (
    <Row>
      {statisticData.map((item, idx) => (
        <Col md={6} xl={3} key={idx}>
          <StatCard {...item} />
        </Col>
      ))}
    </Row>
  )
}
export default Statistics
