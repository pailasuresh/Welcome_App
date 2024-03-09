// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {check: false}

  change = () => {
    this.setState(prevState => ({check: !prevState.check}))
  }

  getText = () => {
    const {check} = this.state
    return check ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()
    return (
      <div className="main">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button type="button" onClick={this.change}>
          {text}
        </button>
      </div>
    )
  }
}
export default Welcome
