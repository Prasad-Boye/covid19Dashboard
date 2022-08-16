import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header/index'
import Footer from '../Footer'
import './index.css'

const appConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
}

class About extends Component {
  state = {
    faqList: [],
    appStatus: appConstants.initial,
  }

  componentDidMount() {
    this.setState({appStatus: appConstants.loading}, this.getDetails)
  }

  getDetails = async () => {
    const url = 'https://apis.ccbp.in/covid19-faqs'
    const response = await fetch(url)
    const data = await response.json()

    if (response.ok) {
      const {faq} = data
      console.log(faq[1].answer)
      this.setState({appStatus: appConstants.success, faqList: faq})
    }
  }

  aboutView = () => {
    const {faqList} = this.state
    return (
      <div className="about-details-container">
        <h1 className="about-heading">About</h1>
        <p className="last-updated">Last update on November 1st 2021.</p>
        <p className="vaccine-distribution">
          COVID-19 vaccines be ready for distribution
        </p>
        <ul testid="faqsUnorderedList" className="faqs-list">
          {faqList.map(eachValue => (
            <li className="faqs-list-item" key={eachValue.qno}>
              <p className="question">{eachValue.question}</p>
              <p className="answer">{eachValue.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  loadingView = () => (
    <div className="main-home-container">
      <div testid="aboutRouteLoader" className="loader-container">
        <Loader type="TailSpin" color="#007BFF" width="75px" height="75px" />
      </div>
    </div>
  )

  getAboutPageView = () => {
    const {appStatus} = this.state
    switch (appStatus) {
      case appConstants.success:
        return this.aboutView()
      default:
        return this.loadingView()
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.getAboutPageView()}
        <Footer />
      </>
    )
  }
}

export default About
