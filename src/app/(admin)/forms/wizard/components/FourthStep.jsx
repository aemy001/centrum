import TextFormInput from '@/components/from/TextFormInput'
import Table from 'react-bootstrap/Table'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ProductCheckBox from '@/app/(admin)/forms/wizard/components/ProductCheckBox'
// import TextFormInput from '@/components/from/TextFormInput'

import SelectFormInput from '@/components/from/SelectFormInput'
import Link from 'next/link'
const FourthStep = () => {
  const { control } = useForm()

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  )
  return (
    <Row className="thirdStepContainer">
      <Col xs={12}>
        <div className="headingBanner">
          <h1 className="thirdStepMainHeading p-0 m-0">Enter Details</h1>
        </div>
      </Col>

      <Col xxl={8}>
        <div className="leftContainerSet d-flex flex-column gap-4">
          <div className="productCard">
            <h1 className="productCategoryName">Delivery Address</h1>
            <Row>
              <Col lg={6}>
                <TextFormInput name="user" type="number" label="Post Code" control={control} placeholder="Post Code" containerClassName="mb-3" />
              </Col>
              <Col lg={6}>
                <TextFormInput name="user" type="text" label="House Number" control={control} placeholder="House Number" containerClassName="mb-3" />
              </Col>
              <Col lg={12}>
                <TextFormInput name="user" type="text" label="Addition" control={control} placeholder="Addition" containerClassName="mb-3" />
              </Col>
              <Col lg={6}>
                <TextFormInput name="user" type="text" label="Street Name" control={control} placeholder="Street Name" containerClassName="mb-3" />
              </Col>
              <Col lg={6}>
                <TextFormInput
                  name="user"
                  type="text"
                  label="Place of Residence"
                  control={control}
                  placeholder="Place of Residence"
                  containerClassName="mb-3"
                />
              </Col>
            </Row>
          </div>
          <div className="productCard">
            <h1 className="productCategoryName p-0 m-0">Customer Details</h1>
            <Row>
              <Col xxl={12} className="mt-3 mb-4 ">
                <div className="d-flex align-items-center justify-content-between">
                  <p className="coresspondText p-0 m-0">Correspondence Address</p>
                  <div className="d-flex align-items-center gap-2">
                    <span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {' '}
                        <path d="M12 5V19M5 12H19" stroke="#1570EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />{' '}
                      </svg>
                    </span>
                    <span className="linkedCustomer">Link to Existing Customer</span>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <TextFormInput name="postCode" type="number" label="Post Code" control={control} placeholder="Post Code" containerClassName="mb-3" />
              </Col>
              <Col lg={6}>
                <TextFormInput
                  name="houseNo"
                  type="text"
                  label="House Number"
                  control={control}
                  placeholder="House Number"
                  containerClassName="mb-3"
                />
              </Col>
              <Col lg={12}>
                <TextFormInput name="addition" type="text" label="Addition" control={control} placeholder="Addition" containerClassName="mb-3" />
              </Col>
              <Col lg={6}>
                <TextFormInput
                  name="streetName"
                  type="text"
                  label="Street Name"
                  control={control}
                  placeholder="Street Name"
                  containerClassName="mb-3"
                />
              </Col>
              <Col lg={6}>
                <TextFormInput
                  name="user"
                  type="text"
                  label="Place of Residence"
                  control={control}
                  placeholder="Place of Residence"
                  containerClassName="mb-3"
                />
              </Col>
              <Col xxl={12} className="mt-3 mb-4 ">
                <div>
                  <p className="coresspondText p-0 m-0">Correspondence Address</p>
                </div>
              </Col>
              <Col md={6}>
                <SelectFormInput
                  name="country"
                  label="Gender"
                  containerClassName="mb-3"
                  control={control}
                  options={[
                    {
                      value: 'Male',
                      label: 'Male',
                    },
                    {
                      value: 'Female',
                      label: 'Female',
                    },
                  ]}
                />
              </Col>
              <Col xxl={6}></Col>
              <Col lg={6}>
                <TextFormInput name="initials" type="text" label="Initials" control={control} placeholder="Initials" containerClassName="mb-3" />
              </Col>
              <Col lg={6}>
                <TextFormInput name="sureName" type="text" label="Surname" control={control} placeholder="Surname" containerClassName="mb-3" />
              </Col>
              <Col lg={6}>
                <TextFormInput
                  name="Email Address"
                  type="email"
                  label="Email Address"
                  control={control}
                  placeholder="Surname"
                  containerClassName="mb-3"
                />
              </Col>
              <Col lg={6}>
                <TextFormInput
                  name="phoneNumber"
                  type="email"
                  label="Phone Number"
                  control={control}
                  placeholder="Enter Number"
                  containerClassName="mb-3"
                />
              </Col>
            </Row>
          </div>
        </div>
      </Col>

      <Col xxl={4}>
        <div className="rightContainerSet">
          <div className="d-flex justify-content-center">
            <div style={{ backgroundImage: 'url(/images/product.jpeg)' }} className="productImageSet"></div>
          </div>
          <div className="mt-3">
            <h1 className="summaryHeading">Summary</h1>
            <div className="d-flex align-items-center justify-content-between">
              <div>
                <p className="m-0 p-0 productHeading">Solar Center Netherlands</p>
                <p className="m-0 p-0 productSubHeading">AlphaESS - 3.8 kWh battery - 5 kW inverter</p>
                <button onClick={() => setActiveStep(1)} className="changeLink">
                  Change
                </button>
              </div>
              <div className="priceNo">$ 3,500</div>
            </div>

            <div className="mt-3">
              <Table striped bordered hover className="pricingTableSetting">
                <thead>
                  <tr>
                    <th>Qty.</th>
                    <th>Description</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Emergency Provision</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>x1</td>
                    <td>Alpha ESS Backup Box Plus</td>
                    <td>$ 2,500</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="mt-3 d-flex justify-content-end">
              <Table className="finalPriceTable">
                <thead></thead>
                <tbody>
                  <tr>
                    <td>One-time Cost $</td>
                    <td>3,500</td>
                  </tr>
                  <tr>
                    <td>VAT Refund $</td>
                    <td>-500</td>
                  </tr>
                  <tr>
                    <td>Net Investment $</td>
                    <td>-500</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  )
}
export default FourthStep
