import PasswordFormInput from '@/components/from/PasswordFormInput'
import TextFormInput from '@/components/from/TextFormInput'
import { Col, Row } from 'react-bootstrap'
import SelectFormInput from '@/components/from/SelectFormInput'

import { useForm } from 'react-hook-form'
const Account = () => {
  const { control } = useForm()
  return (
    <>
      <h4 className="fs-16 fw-semibold mb-1 firstStepHeading">Home Batteries</h4>
      {/* <p className="text-muted">Setup your account information</p> */}
      <Row>
        <Col lg={6}>
          <TextFormInput name="user" label="Post Code" control={control} placeholder="Enter User Name" containerClassName="mb-3" />
        </Col>
        <Col lg={6}>
          <TextFormInput name="user" label="House Number" control={control} placeholder="Enter User House Number" containerClassName="mb-3" />
        </Col>
        <Col lg={12}>
          <TextFormInput name="email" label="Addition" type="text" control={control} placeholder="Enter your email" containerClassName="mb-3" />
        </Col>
        {/* <Col lg={6}>
          <PasswordFormInput name="password" label="Password" control={control} containerClassName="mb-3" placeholder="Enter Password" />
        </Col>
        <Col lg={6}>
          <PasswordFormInput
            name="confirmPassword"
            label="Confirm Password"
            control={control}
            containerClassName="mb-3"
            placeholder="Confirm a Password"
          />
        </Col> */}
        <Col md={6}>
          <SelectFormInput
            name="country"
            label="Customer Type"
            containerClassName="mb-3"
            control={control}
            options={[
              {
                value: 'Commercial',
                label: 'Commercial',
              },
            ]}
          />
        </Col>
        <Col md={6}>
          <SelectFormInput
            name="country"
            label="Phase connection & Inverter"
            containerClassName="mb-3"
            control={control}
            options={[
              {
                value: '1 Phase - 5 kW inverter (AlphaESS)',
                label: '1 Phase - 5 kW inverter (AlphaESS)',
              },
            ]}
          />
        </Col>
      </Row>
    </>
  )
}
export default Account
