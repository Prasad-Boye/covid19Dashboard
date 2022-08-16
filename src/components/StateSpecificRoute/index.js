import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Header from '../Header'
import NotFound from '../NotFound'
import CovidCasesCard from '../CovidSelectCard'
import BarChartUsingData from '../BarChart'
import LineChartUsingData from '../LineChart'
import Footer from '../Footer'
import statesList from '../Home/fixtureData'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const covidSelectCardData = [
  {
    id: 'CONFIRMED',
    text: 'Confirmed',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660025593/CovidDashBoard/check-mark_1_vo7q2u.svg',
    altText: 'state specific confirmed cases pic',
    testId: 'stateSpecificConfirmedCasesContainer',
  },
  {
    id: 'ACTIVE',
    text: 'Active',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660061829/CovidDashBoard/protection_1_ednd75.svg',
    altText: 'state specific active cases pic',
    testId: 'stateSpecificActiveCasesContainer',
  },
  {
    id: 'RECOVERED',
    text: 'Recovered',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660062117/CovidDashBoard/recovered_1_wamwqi.svg',
    altText: 'state specific recovered cases pic',
    testId: 'stateSpecificRecoveredCasesContainer',
  },
  {
    id: 'DECEASED',
    text: 'Deceased',
    imageUrl:
      'https://res.cloudinary.com/dlmcy9n4s/image/upload/v1660062193/CovidDashBoard/breathing_1_wwz6aa.svg',
    altText: 'state specific deceased cases pic',
    testId: 'stateSpecificDeceasedCasesContainer',
  },
]

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const mon = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const lineChartIndex = [0, 1, 2, 3, 4]

class StateDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    timeLinesApiStatus: apiStatusConstants.initial,
    stateWiseCovidDataDetailsList: [],
    stateCode: '',
    activeCovidSelectCard: 'CONFIRMED',
    dateTimeLinesData: [],
  }

  componentDidMount() {
    this.fetchingStateWiseCovidDetails()
    this.fetchingTimeLinesData()
  }

  onChangeCovidSelectId = id => {
    this.setState({activeCovidSelectCard: id})
  }

  fetchingStateWiseCovidDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const apiResponse = await fetch(apiUrl, options)

    if (apiResponse.ok) {
      const jsonResponseData = await apiResponse.json()

      const updatedStateWiseData = jsonResponseData[stateCode]

      this.setState({
        apiStatus: apiStatusConstants.success,
        stateWiseCovidDataDetailsList: updatedStateWiseData,
        stateCode,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  fetchingTimeLinesData = async () => {
    this.setState({timeLinesApiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const apiUrl = `https://apis.ccbp.in/covid19-timelines-data/${stateCode}`
    const options = {
      method: 'GET',
    }

    const apiResponse = await fetch(apiUrl, options)

    if (apiResponse.ok) {
      const jsonData = await apiResponse.json()
      const id = stateCode
      const timeLineResultList = []

      const keyNames = Object.keys(jsonData[id].dates)

      keyNames.forEach(date => {
        timeLineResultList.push({
          date,
          confirmed: jsonData[id].dates[date].total.confirmed,
          deceased: jsonData[id].dates[date].total.deceased,
          recovered: jsonData[id].dates[date].total.recovered,
          tested: jsonData[id].dates[date].total.tested,
          active:
            jsonData[id].dates[date].total.confirmed -
            (jsonData[id].dates[date].total.deceased +
              jsonData[id].dates[date].total.recovered),
        })
      })
      this.setState({
        dateTimeLinesData: timeLineResultList,
        timeLinesApiStatus: apiStatusConstants.success,
      })
    }
  }

  timeLinesDataOnSuccess = () => {
    const {activeCovidSelectCard, dateTimeLinesData} = this.state

    const barChartData = []

    dateTimeLinesData.forEach(each => {
      const cases = each[activeCovidSelectCard.toLowerCase()]

      const newDate = new Date(each.date)

      const monthAndDate = `${newDate.getDate()} ${mon[newDate.getMonth()]}`

      let count

      if (cases > 100000) {
        count = `${(cases / 100000).toFixed(1)}L`
      } else if (cases > 1000) {
        count = `${(cases / 1000).toFixed(1)}K`
      } else {
        count = cases
      }

      barChartData.push({
        date: monthAndDate,
        count,
        cases,
      })
    })

    const lineChartData = [[], [], [], [], []]

    dateTimeLinesData.forEach(each => {
      lineChartData[0].push({
        date: each.date,
        cases: each.confirmed,
      })
      lineChartData[1].push({
        date: each.date,
        cases: each.active,
      })
      lineChartData[2].push({
        date: each.date,
        cases: each.recovered,
      })
      lineChartData[3].push({
        date: each.date,
        cases: each.deceased,
      })
      lineChartData[4].push({
        date: each.date,
        cases: each.tested,
      })
    })

    return (
      <>
        <BarChartUsingData
          barChartData={barChartData}
          colorId={activeCovidSelectCard}
        />
        <div className="line-chart-unordered-list" testid="lineChartsContainer">
          <h1 className="line-chart-heading">Daily Spread Trends</h1>
          {lineChartIndex.map(each => (
            <div key={`lineChart${each}`} className="line-chart-list-item">
              <LineChartUsingData
                key={`lineChart${each}`}
                chartData={lineChartData}
                indexNo={each}
              />
            </div>
          ))}
        </div>
      </>
    )
  }

  timeLinesDataInProgress = () => (
    <div className="loader-responsive-container" testid="timelinesDataLoader">
      <Loader type="TailSpin" color="#007BFF" />
    </div>
  )

  renderBasedOnTimeLinesData = () => {
    const {timeLinesApiStatus} = this.state

    switch (timeLinesApiStatus) {
      case apiStatusConstants.success:
        return this.timeLinesDataOnSuccess()
      case apiStatusConstants.failure:
        return <NotFound />
      case apiStatusConstants.inProgress:
        return this.timeLinesDataInProgress()
      default:
        return null
    }
  }

  getDistrictCasesList = data => {
    const {activeCovidSelectCard} = this.state

    const districtsList = []
    const districtNames = Object.keys(data)

    districtNames.forEach(eachDistrict => {
      if (data[eachDistrict]) {
        const {total} = data[eachDistrict]

        let cases

        if (activeCovidSelectCard === 'ACTIVE') {
          cases =
            total.confirmed - (total.recovered + total.deceased)
              ? total.confirmed - (total.recovered + total.deceased)
              : 0
        } else {
          cases = total[activeCovidSelectCard.toLowerCase()]
            ? total[activeCovidSelectCard.toLowerCase()]
            : 0
        }

        districtsList.push({
          districtName: eachDistrict,
          cases,
        })
      }
    })
    return districtsList
  }

  apiStatusOnSuccess = () => {
    const {
      stateCode,
      stateWiseCovidDataDetailsList,
      activeCovidSelectCard,
    } = this.state

    const individualStateName = statesList.find(
      each => stateCode === each.state_code,
    )

    const lastUpdatedDate = new Date(
      stateWiseCovidDataDetailsList.meta.last_updated,
    )

    const districtsCasesList = this.getDistrictCasesList(
      stateWiseCovidDataDetailsList.districts,
    )

    const sortedDistrictsList = districtsCasesList.sort(
      (a, b) => b.cases - a.cases,
    )

    return (
      <>
        <div className="covid-state-state-name-tested-cases-container">
          <div className="covid-state-state-name-updated-container">
            <div className="covid-state-state-name-container">
              <h1 className="covid-state-state-name">
                {individualStateName.state_name}
              </h1>
            </div>
            <p className="covid-state-updated-date">
              Last update on {month[lastUpdatedDate.getMonth()]}
              {lastUpdatedDate.getDate()}st {lastUpdatedDate.getFullYear()}.
            </p>
          </div>
          <div>
            <p className="covid-state-tested-heading covid-state-tested-cases">
              Tested
            </p>
            <p className="covid-state-tested-cases">
              {stateWiseCovidDataDetailsList.total.tested}
            </p>
          </div>
        </div>
        <ul className="covid-selects-container">
          {covidSelectCardData.map(eachSelect => {
            const activeCasesDetails = stateWiseCovidDataDetailsList.total
            const objectKey = eachSelect.id.toLowerCase()
            const sumOfCasesList = () => {
              if (objectKey === 'active') {
                return (
                  activeCasesDetails.confirmed -
                  (activeCasesDetails.deceased + activeCasesDetails.recovered)
                )
              }
              return activeCasesDetails[objectKey]
            }

            const totalCasesInCountry = sumOfCasesList()

            return (
              <CovidCasesCard
                key={eachSelect.id}
                covidCasesDetails={eachSelect}
                covidSelect={activeCovidSelectCard}
                stateWiseDataList={stateWiseCovidDataDetailsList}
                onChangeCovidSelectId={this.onChangeCovidSelectId}
                totalCasesInCountry={totalCasesInCountry}
              />
            )
          })}
        </ul>
        <div className="map-ncp-report-container">
          <img
            src={individualStateName.map_url}
            alt="map"
            className="map-logo"
          />
          <div className="ncp-population-tested-container">
            <h3 className="ncp-heading">NCP Report </h3>
            <div className="population-tested-container">
              <div className="population-container">
                <p className="map-population-heading">Population</p>
                <p className="map-population">
                  {stateWiseCovidDataDetailsList.meta.population}
                </p>
              </div>
              <div className="map-tested-container">
                <p className="map-population-heading">Tested</p>
                <p className="map-population">
                  {stateWiseCovidDataDetailsList.total.tested}
                </p>
                <p className="map-tested-description">
                  (As of 29 March per source)
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="top-districts-heading">Top Districts</h1>
        <ul
          className="state-name-cases-unordered-list"
          testid="topDistrictsUnorderedList"
        >
          {sortedDistrictsList.map(each => {
            const {districtName, cases} = each
            return (
              <li className="state-name-cases-list-item" key={districtName}>
                <p className="district-cases">{cases}</p>
                <p className="district-name">{districtName}</p>
              </li>
            )
          })}
        </ul>
        {this.renderBasedOnTimeLinesData()}
      </>
    )
  }

  apiStatusInProgress = () => (
    <div className="loader-responsive-container" testid="stateDetailsLoader">
      <Loader type="TailSpin" color="#007BFF" />
    </div>
  )

  renderBasedOnApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.apiStatusOnSuccess()
      case apiStatusConstants.failure:
        return <NotFound />
      case apiStatusConstants.inProgress:
        return this.apiStatusInProgress()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="state-specific-bg-container">
        <Header />
        {this.renderBasedOnApiStatus()}
        <Footer />
      </div>
    )
  }
}

export default StateDetails
