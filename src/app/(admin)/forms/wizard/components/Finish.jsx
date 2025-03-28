import Link from 'next/link'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Row } from 'react-bootstrap'
const Finish = () => {
  return (
    <Row>
      <Col xs={12}>
        <div className="finalStepContainer">
          <div className="d-flex align-items-center justify-content-between setBottomBorder">
            <h1 className="m-0 p-0 quoteHeading">Quote# 52431</h1>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-primary">Withdraw Offer</button>
              <button className="btn btn-primary">Edit Offer</button>
              <Link href="/" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </Col>
      <Col xxl={7}>
        <div className="d-flex flex-column ">
          <div className="quotationLine d-flex align-items-center gap-3">
            <div>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                {' '}
                <rect width="44" height="44" rx="22" fill="#E6F2F8" />{' '}
                <path
                  d="M19 21L22 24L32 14M26 13H17.8C16.1198 13 15.2798 13 14.638 13.327C14.0735 13.6146 13.6146 14.0735 13.327 14.638C13 15.2798 13 16.1198 13 17.8V26.2C13 27.8802 13 28.7202 13.327 29.362C13.6146 29.9265 14.0735 30.3854 14.638 30.673C15.2798 31 16.1198 31 17.8 31H26.2C27.8802 31 28.7202 31 29.362 30.673C29.9265 30.3854 30.3854 29.9265 30.673 29.362C31 28.7202 31 27.8802 31 26.2V22"
                  stroke="#0075A9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{' '}
              </svg>
            </div>
            <div>
              <h2 className="p-0 m-0 quotaionMainHeading">Quotation Sent to customer@email.com</h2>
              <p className="p-0 m-0 quotaionText">10/12/2025 (10:00 am)</p>
            </div>
          </div>
          <div className="quotationLine d-flex align-items-center gap-3">
            <div>
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                {' '}
                <rect width="44" height="44" rx="22" fill="#E6F2F8" />{' '}
                <path
                  d="M22 12V16M22 28V32M16 22H12M32 22H28M29.0784 29.0784L26.25 26.25M29.0784 14.9999L26.25 17.8284M14.9216 29.0784L17.75 26.25M14.9216 14.9999L17.75 17.8284"
                  stroke="#0075A9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{' '}
              </svg>
            </div>
            <div>
              <h2 className="p-0 m-0 quotaionMainHeading">Quotation Sent to customer@email.com</h2>
              <p className="p-0 m-0 quotaionText">10/12/2025 (10:00 am)</p>
            </div>
          </div>
        </div>
      </Col>
      <Col xxl={5}>
        <div className="d-flex justify-content-center">
          <div className="pdfView">PDF Preview</div>
        </div>
      </Col>
    </Row>
  )
}
export default Finish
