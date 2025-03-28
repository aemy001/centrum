import TextFormInput from '@/components/from/TextFormInput'
import Table from 'react-bootstrap/Table'
import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import ProductCheckBox from '@/app/(admin)/forms/wizard/components/ProductCheckBox'
import Link from 'next/link'
const SocialLinks = ({ setActiveStep }) => {
  const { control } = useForm()

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  )
  return (
    <>
      <Row className="thirdStepContainer">
        <Col xs={12}>
          <div className="headingBanner">
            <h1 className="thirdStepMainHeading p-0 m-0">Add More Products</h1>
          </div>
        </Col>

        <Col xxl={8}>
          <div className="leftContainerSet d-flex flex-column gap-3">
            <div className="productCard">
              <h1 className="productCategoryName">EMS</h1>
              <div className="setInnerGrid">
                <div className="d-flex align-items-center gap-2">
                  <div className="imageBorderSet" style={{ backgroundImage: 'url(/images/product.jpeg)' }}></div>
                  <p className="p-0 m-0 productName"> EMS and BMS</p>
                  <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#98A2B3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </OverlayTrigger>
                </div>
                <div>
                  <p className="productPrice p-0 m-0">Price</p>
                  <p className="productPriceNo p-0 m-0">$0.00</p>
                </div>
                <div className="checkDiv">
                  <ProductCheckBox />
                </div>
              </div>
            </div>
            <div className="productCard">
              <h1 className="productCategoryName">Apply for a heat fund</h1>
              <div className="setInnerGrid">
                <div className="d-flex align-items-center gap-2">
                  <div className="imageBorderSet" style={{ backgroundImage: 'url(/images/product.jpeg)' }}></div>
                  <p className="p-0 m-0 productName"> Alpha ESS Backup Box Plus</p>
                  <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#98A2B3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </OverlayTrigger>
                </div>
                <div>
                  <p className="productPrice p-0 m-0">Price</p>
                  <p className="productPriceNo p-0 m-0">$2,500</p>
                </div>
                <div className="checkDiv">
                  <ProductCheckBox />
                </div>
              </div>
            </div>
            <div className="productCard">
              <h1 className="productCategoryName">Solar panels</h1>
              <div className="setInnerGrid">
                <div className="d-flex align-items-center gap-2">
                  <div className="imageBorderSet" style={{ backgroundImage: 'url(/images/product2.jpg)' }}></div>
                  <p className="p-0 m-0 productName"> 4x Jinko 435 Wp Full Black Bifacial Zonnepanelen</p>
                  <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#98A2B3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </OverlayTrigger>
                </div>
                <div>
                  <p className="productPrice p-0 m-0">Price</p>
                  <p className="productPriceNo p-0 m-0">$2,500</p>
                </div>
                <div className="checkDiv">
                  <ProductCheckBox />
                </div>
              </div>
              <div className="setInnerGrid mt-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="imageBorderSet" style={{ backgroundImage: 'url(/images/product2.jpg)' }}></div>
                  <p className="p-0 m-0 productName"> 4x Jinko 435 Wp Full Black Bifacial Zonnepanelen</p>
                  <OverlayTrigger placement="right" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                          stroke="#98A2B3"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </OverlayTrigger>
                </div>
                <div>
                  <p className="productPrice p-0 m-0">Price</p>
                  <p className="productPriceNo p-0 m-0">$2,500</p>
                </div>
                <div className="checkDiv">
                  <ProductCheckBox />
                </div>
              </div>
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
    </>
  )
}
export default SocialLinks
