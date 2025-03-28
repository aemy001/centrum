import avatar1 from '@/assets/images/users/dummy-avatar.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { useForm } from 'react-hook-form'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import TextFormInput from '@/components/from/TextFormInput'
import ProductCards from '@/app/(admin)/forms/wizard/components/ProductCards'
import { useState } from 'react'

const Profile = ({ detail, setDetail }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [isSecChecked, setIsSecChecked] = useState(false)
  const [viewMode, setViewMode] = useState("grid"); 
  const { control } = useForm()
  return (
    <>
      <h4 className={`fs-16 fw-semibold mb-1 firstStepHeading ${detail ? 'd-none' : 'd-block'}`}>Select Product</h4>
      <Row>
        <Col xxl={12} className={`${detail ? 'd-none' : 'd-block'}`}>
          <div className="secondContainer">
            <div className="position-relative">
              <div className="position-absolute searchBarIcon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                    stroke="#98A2B3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="position-relative">
              <div className="position-absolute filterIconSetting">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {' '}
                  <path
                    d="M2 4.6C2 4.03995 2 3.75992 2.10899 3.54601C2.20487 3.35785 2.35785 3.20487 2.54601 3.10899C2.75992 3 3.03995 3 3.6 3H20.4C20.9601 3 21.2401 3 21.454 3.10899C21.6422 3.20487 21.7951 3.35785 21.891 3.54601C22 3.75992 22 4.03995 22 4.6V5.26939C22 5.53819 22 5.67259 21.9672 5.79756C21.938 5.90831 21.8901 6.01323 21.8255 6.10776C21.7526 6.21443 21.651 6.30245 21.4479 6.4785L15.0521 12.0215C14.849 12.1975 14.7474 12.2856 14.6745 12.3922C14.6099 12.4868 14.562 12.5917 14.5328 12.7024C14.5 12.8274 14.5 12.9618 14.5 13.2306V18.4584C14.5 18.6539 14.5 18.7517 14.4685 18.8363C14.4406 18.911 14.3953 18.9779 14.3363 19.0315C14.2695 19.0922 14.1787 19.1285 13.9971 19.2012L10.5971 20.5612C10.2296 20.7082 10.0458 20.7817 9.89827 20.751C9.76927 20.7242 9.65605 20.6476 9.58325 20.5377C9.5 20.4122 9.5 20.2142 9.5 19.8184V13.2306C9.5 12.9618 9.5 12.8274 9.46715 12.7024C9.43805 12.5917 9.39014 12.4868 9.32551 12.3922C9.25258 12.2856 9.15102 12.1975 8.94789 12.0215L2.55211 6.4785C2.34898 6.30245 2.24742 6.21443 2.17449 6.10776C2.10986 6.01323 2.06195 5.90831 2.03285 5.79756C2 5.67259 2 5.53819 2 5.26939V4.6Z"
                    stroke="#98A2B3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />{' '}
                </svg>
              </div>
            </div>
            <div className="position-relative">
        <div className="position-absolute gridIcon">
          <button
            style={{ border: "none", padding: "0px", background: "transparent" }}
            onClick={() => setViewMode("grid")}
          >
            <img src="/images/grid-01.svg" alt="grid" />
          </button>
        </div>
      </div>

            <div className="position-relative">
            <div className="position-absolute rowIcon">
              <button 
               style={{ border: 'none', padding: '0px', background: 'transparent' }}
                 onClick={() => setViewMode("row")}
              >
              <img src="/images/rows-01.svg" alt="grid" />
              </button>
              </div>
            </div>
            <TextFormInput name="user" control={control} placeholder="Search" containerClassName="mb-3 setSearchBar" />

          

          </div>
          <div className="mt-4">
            <div className="productCardSetting">
            {viewMode === "grid" && (
             <Row className='gridView gy-4'>
              <Col md={4} lg={4} xl={4}>
              <ProductCards image="/images/product.jpeg">
                <h1 className="cardMainHeading">AlphaESS - 3,8 kWh batterij - 5 kW omvormer</h1>
                <p className="cardDescription">
                AlphaESS biedt een modulair energie opslagsysteem met uitmuntende specificaties en garantievoorwaarden. Ontworpen om optimaal te
                profiter...
                </p>
                <div className='my-3 px-2'>
                    <p className="p-0 m-0 cardPrice">Price</p>
                    <p className="p-0 m-0 cardPriceNumber">
                      € 4.750,00 <span>(Ex VAT. € 3.752)</span>
                    </p>
                  </div>
                <div className="d-flex align-items-center justify-content-between">
                  
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-primary viewDetailBtn"  onClick={() => setDetail(true)}>View Details</button>
                    <div className="checkBoxSetting">
                      <div className="checkbox-wrapper-10">
                        <input
                          type="checkbox"
                          id="cb6"
                          className="tgl tgl-flip"
                          checked={isSecChecked}
                          onChange={() => setIsSecChecked(!isSecChecked)}
                        />
                        <label htmlFor="cb6" data-tg-on="Selected" data-tg-off="Select Product" className="tgl-btn"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </ProductCards> 
              </Col>
              <Col md={4} lg={4} xl={4}>
              <ProductCards image="/images/product.jpeg">
                <h1 className="cardMainHeading">AlphaESS - 3,8 kWh batterij - 5 kW omvormer</h1>
                <p className="cardDescription">
                AlphaESS biedt een modulair energie opslagsysteem met uitmuntende specificaties en garantievoorwaarden. Ontworpen om optimaal te
                profiter...
                </p>
                <div className='my-3 px-2'>
                    <p className="p-0 m-0 cardPrice">Price</p>
                    <p className="p-0 m-0 cardPriceNumber">
                      € 4.750,00 <span>(Ex VAT. € 3.752)</span>
                    </p>
                    </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-primary viewDetailBtn">View Details</button>
                    <div className="checkBoxSetting">
                      <div className="checkbox-wrapper-10">
                        <input
                          type="checkbox"
                          id="cb6"
                          className="tgl tgl-flip"
                          checked={isSecChecked}
                          onChange={() => setIsSecChecked(!isSecChecked)}
                        />
                        <label htmlFor="cb6" data-tg-on="Selected" data-tg-off="Select Product" className="tgl-btn"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </ProductCards> 
              </Col>
              <Col md={4} lg={4} xl={4}>
              <ProductCards image="/images/product.jpeg">
                <h1 className="cardMainHeading">AlphaESS - 3,8 kWh batterij - 5 kW omvormer</h1>
                <p className="cardDescription">
                  AlphaESS biedt een modulair energie opslagsysteem met uitmuntende specificaties en garantievoorwaarden. Ontworpen om optimaal te
                  profiter...
                </p>
                <div className='my-3 px-2'>
                    <p className="p-0 m-0 cardPrice">Price</p>
                    <p className="p-0 m-0 cardPriceNumber">
                      € 4.750,00 <span>(Ex VAT. € 3.752)</span>
                    </p>
                    </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn btn-primary viewDetailBtn">View Details</button>
                    <div className="checkBoxSetting">
                      <div className="checkbox-wrapper-10">
                        <input
                          type="checkbox"
                          id="cb6"
                          className="tgl tgl-flip"
                          checked={isSecChecked}
                          onChange={() => setIsSecChecked(!isSecChecked)}
                        />
                        <label htmlFor="cb6" data-tg-on="Selected" data-tg-off="Select Product" className="tgl-btn"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </ProductCards> 
              </Col>
             </Row>
            )}
   {viewMode === "row" && (
             <Row className='rowView gy-4'>
              <ProductCards  image="/images/product.jpeg">
                <h1 className="cardMainHeading">AlphaESS - 3,8 kWh batterij - 5 kW omvormer</h1>
                <p className="cardDescription">
                  AlphaESS biedt een modulair energie opslagsysteem met uitmuntende specificaties en garantievoorwaarden. Ontworpen om optimaal te
                  profiteren van je dynamische energiecontract met slimme sturing. Onafhankelijk van energieaanbieder en dus toekomstvast. Met of
                  zonder zonnepanelen, deze thuisbatterij is inzetbaar in elke situatie en werkt volkomen geruisloos. Met meer dan 200.000
                  installaties wereldwijd is AlphaESS een uiterst veilige en betrouwbare keuze.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="p-0 m-0 cardPrice">Price</p>
                    <p className="p-0 m-0 cardPriceNumber">
                      € 4.750,00 <span>(Ex VAT. € 3.752)</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn  viewDetailBtn" onClick={() => setDetail(true)}>
                      View Details
                    </button>
                    <div className="checkBoxSetting">
                      <div className="checkbox-wrapper-10">
                        <input type="checkbox" id="cb5" className="tgl tgl-flip" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label htmlFor="cb5" data-tg-on="Selected" data-tg-off="Select Product" className="tgl-btn"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </ProductCards>
              <ProductCards image="/images/product.jpeg">
                <h1 className="cardMainHeading">AlphaESS - 3,8 kWh batterij - 5 kW omvormer</h1>
                <p className="cardDescription">
                  AlphaESS biedt een modulair energie opslagsysteem met uitmuntende specificaties en garantievoorwaarden. Ontworpen om optimaal te
                  profiteren van je dynamische energiecontract met slimme sturing. Onafhankelijk van energieaanbieder en dus toekomstvast. Met of
                  zonder zonnepanelen, deze thuisbatterij is inzetbaar in elke situatie en werkt volkomen geruisloos. Met meer dan 200.000
                  installaties wereldwijd is AlphaESS een uiterst veilige en betrouwbare keuze.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <p className="p-0 m-0 cardPrice">Price</p>
                    <p className="p-0 m-0 cardPriceNumber">
                      € 4.750,00 <span>(Ex VAT. € 3.752)</span>
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <button className="btn  viewDetailBtn" onClick={() => setDetail(true)}>
                      View Details
                    </button>
                    <div className="checkBoxSetting">
                      <div className="checkbox-wrapper-10">
                        <input type="checkbox" id="cb5" className="tgl tgl-flip" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                        <label htmlFor="cb5" data-tg-on="Selected" data-tg-off="Select Product" className="tgl-btn"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </ProductCards>
          
          
             </Row>
   )}
            </div>
          </div>
        </Col>
        <Col xxl={12} className={`${detail ? 'd-block' : 'd-none'}`}>
          <div className="mt-3">
            <h1 className="productDetailsHeading">AlphaESS - 3,8 kWh batterij - 5 kW omvormer</h1>
          </div>

          <div className="productCardFullDetail">
            <ProductCards image="/images/product.jpeg">
              <h1 className="cardMainSubHeading">Net investment € 3,925.62</h1>
              <p className="cardDescription">
                AlphaESS biedt een modulair energie opslagsysteem met uitmuntende specificaties en garantievoorwaarden. Ontworpen om optimaal te
                profiteren van je dynamische energiecontract met slimme sturing. Onafhankelijk van energieaanbieder en dus toekomstvast. Met of zonder
                zonnepanelen, deze thuisbatterij is inzetbaar in elke situatie en werkt volkomen geruisloos. Met meer dan 200.000 installaties
                wereldwijd is AlphaESS een uiterst veilige en betrouwbare keuze.
              </p>
              <div className="d-flex align-items-center justify-content-between setBottomBorder">
                <div>
                  <p className="p-0 m-0 cardPrice">One-off costs</p>
                  <p className="p-0 m-0 cardPriceNumber">€4,750.00</p>
                </div>
              </div>
              <div>
                <p className="p-0 m-0 connectionText">Phase connection & Inverter</p>
                <p className="p-0 m-0 connectionAmp">1 Phase - 5 kW inverter (AlphaESS)</p>
              </div>
            </ProductCards>
          </div>
        </Col>
      </Row>
    </>
  )
}
export default Profile
