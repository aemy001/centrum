import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'

function ProductCards({ children, image }) {
  return (
    <Card>
      <div>
        <Card.Img className="cardImageSet" variant="top" src={`${image}`} />
        <div className="setPdfBtn">
          <Link href="" className="d-flex align-items-center gap-2">
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                {' '}
                <path
                  d="M11.6668 1.89136V5.33348C11.6668 5.80018 11.6668 6.03354 11.7577 6.2118C11.8376 6.3686 11.965 6.49609 12.1218 6.57598C12.3001 6.66681 12.5335 6.66681 13.0002 6.66681H16.4423M7.50016 12.5001L10.0002 15.0001M10.0002 15.0001L12.5002 12.5001M10.0002 15.0001L10.0002 10.0001M11.6668 1.66675H7.3335C5.93336 1.66675 5.2333 1.66675 4.69852 1.93923C4.22811 2.17892 3.84566 2.56137 3.60598 3.03177C3.3335 3.56655 3.3335 4.26662 3.3335 5.66675V14.3334C3.3335 15.7335 3.3335 16.4336 3.60598 16.9684C3.84566 17.4388 4.22811 17.8212 4.69852 18.0609C5.2333 18.3334 5.93336 18.3334 7.3335 18.3334H12.6668C14.067 18.3334 14.767 18.3334 15.3018 18.0609C15.7722 17.8212 16.1547 17.4388 16.3943 16.9684C16.6668 16.4336 16.6668 15.7335 16.6668 14.3334V6.66675L11.6668 1.66675Z"
                  stroke="#1570EF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{' '}
              </svg>
            </span>
            Download Datasheet
          </Link>
        </div>
      </div>

      <Card.Body>{children}</Card.Body>
    </Card>
  )
}

export default ProductCards
