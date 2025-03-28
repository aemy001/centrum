// import 'flatpickr/dist/themes/material_green.css'
// import Flatpickr from 'react-flatpickr'
// import { Component } from 'react'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       date: new Date(),
//     }
//   }

//   render() {
//     const { date } = this.state
//     return <Flatpickr data-enable-time value={date} onChange={([date]) => this.setState({ date })} />
//   }
// }

// export default App

import React, { useState } from 'react'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/material_green.css'

const App = () => {
  const [date, setDate] = useState(new Date())

  return <Flatpickr className="form-control" data-enable-time value={date} onChange={([selectedDate]) => setDate(selectedDate)} />
}

export default App
