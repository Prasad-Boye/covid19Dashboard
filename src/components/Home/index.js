import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {BsSearch} from 'react-icons/bs'
import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import {BiChevronRightSquare} from 'react-icons/bi'

import Header from '../Header'
import NotFound from '../NotFound'
import CovidCasesCard from '../CovidSelectCard'
import Footer from '../Footer'
import statesList, {covidSelectCardData} from './fixtureData'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInputValue: '',
    statesCaseLoad: [],
    covidSelect: '',
    activeSearchId: '',
  }

  componentDidMount() {
    this.getData()
  }

  sortStates = () => {
    const {statesCaseLoad} = this.state

    if (statesCaseLoad[0].stateCode[0] !== 'A') {
      this.setState({statesCaseLoad: statesCaseLoad.reverse()})
    }
  }

  reverseStates = () => {
    const {statesCaseLoad} = this.state

    if (statesCaseLoad[0].stateCode[0] !== 'W') {
      this.setState({statesCaseLoad: statesCaseLoad.reverse()})
    }
  }

  onChangeCovidSelectId = id => {
    this.setState({covidSelect: id})
  }

  onChangeInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  convertObjectsDataIntoListItemsUsingForInMethod = data => {
    const resultList = []

    const keyNames = Object.keys(data)

    keyNames.forEach(keyName => {
      if (data[keyName]) {
        const {total} = data[keyName]

        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = data[keyName].meta.population
          ? data[keyName].meta.population
          : 0

        const state = statesList.find(each => each.state_code === keyName)

        if (state === undefined) {
          resultList.push({
            stateCode: keyName,
            name: 'Total',
            confirmed,
            deceased,
            recovered,
            tested,
            population,
            active: confirmed - (deceased + recovered),
          })
        } else {
          resultList.push({
            stateCode: keyName,
            name: state.state_name,
            confirmed,
            deceased,
            recovered,
            tested,
            population,
            active: confirmed - (deceased + recovered),
          })
        }
      }
    })
    return resultList
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const apiResponse = await fetch(apiUrl, options)

    if (apiResponse.ok) {
      const jsonResponseData = await apiResponse.json()

      const updatedStateWiseData = this.convertObjectsDataIntoListItemsUsingForInMethod(
        jsonResponseData,
      )

      this.setState({
        apiStatus: apiStatusConstants.success,
        statesCaseLoad: updatedStateWiseData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderHomeView = () => {
    const {statesCaseLoad, covidSelect} = this.state
    const eachStateCases = statesCaseLoad.filter(
      eachState => eachState.name !== 'Total',
    )

    return (
      <>
        <ul className="covid-selects-container">
          {covidSelectCardData.map(eachSelect => {
            const sumOfCasesList = eachStateCases.map(each => {
              const objectKey = eachSelect.id.toLowerCase()
              const count = each[objectKey]
              return count
            })

            const totalCasesInCountry = sumOfCasesList.reduce(
              (acc, cur) => acc + cur,
            )

            return (
              <CovidCasesCard
                key={eachSelect.id}
                covidCasesDetails={eachSelect}
                covidSelect={covidSelect}
                statesCaseLoad={statesCaseLoad}
                onChangeCovidSelectId={this.onChangeCovidSelectId}
                totalCasesInCountry={totalCasesInCountry}
              />
            )
          })}
        </ul>
        <div
          className="state-wise-covid-cases-table-container"
          testid="stateWiseCovidDataTable"
        >
          <div className="state-wise-covid-cases-table-headings-container">
            <div className="states-ut-heading-container">
              <p className="table-header">States/UT</p>
              <button
                type="button"
                className="asc-desc-btn"
                testid="ascendingSort"
                onClick={this.sortStates}
              >
                <FcGenericSortingAsc />
              </button>
              <button
                type="button"
                className="asc-desc-btn"
                testid="descendingSort"
                onClick={this.reverseStates}
              >
                <FcGenericSortingDesc />
              </button>
            </div>
            <p className="state-wise-covid-cases-headings">Confirmed</p>
            <p className="state-wise-covid-cases-headings">Active</p>
            <p className="state-wise-covid-cases-headings">Recovered</p>
            <p className="state-wise-covid-cases-headings">Deceased</p>
            <p className="state-wise-covid-cases-headings">Population</p>
          </div>
          <hr className="hr-line" />
          <ul className="state-wise-covid-cases-table-unordered-list">
            {eachStateCases.map(eachState => {
              const {
                stateCode,
                name,
                confirmed,
                active,
                recovered,
                deceased,
                population,
              } = eachState

              return (
                <li
                  className="state-wise-covid-cases-table-headings-container"
                  key={stateCode}
                >
                  <Link to={`/state/${stateCode}`} className="link-item">
                    <p className="states-ut-count-container">{name}</p>
                  </Link>
                  <p className="state-wise-covid-count confirmed-cases">
                    {confirmed}
                  </p>
                  <p className="state-wise-covid-count active-cases">
                    {active}
                  </p>
                  <p className="state-wise-covid-count recovered-cases">
                    {recovered}
                  </p>
                  <p className="state-wise-covid-count deceased-cases">
                    {deceased}
                  </p>
                  <p className="state-wise-covid-count population-count-color">
                    {population}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }

  highlightItem = id => {
    this.setState({activeSearchId: id})
  }

  renderSearchList = () => {
    const {searchInputValue, activeSearchId} = this.state

    const filterList = statesList.filter(data =>
      data.state_name.toLowerCase().includes(searchInputValue.toLowerCase()),
    )
    if (filterList.length > 0) {
      return (
        <ul className="search-container" testid="searchResultsUnorderedList">
          {filterList.map(eachStateItem => {
            const isActive =
              activeSearchId === eachStateItem.state_code ? 'active-item' : ''
            return (
              <Link
                to={`/state/${eachStateItem.state_code}`}
                className="search-link"
                key={eachStateItem.state_code}
                onMouseOver={() => this.highlightItem(eachStateItem.state_code)}
              >
                <li className={`search-list-item ${isActive}`}>
                  <p className="item-name">{eachStateItem.state_name}</p>
                  <div className="icon-container">
                    <p className="item-code">{eachStateItem.state_code}</p>
                    <BiChevronRightSquare />
                  </div>
                </li>
              </Link>
            )
          })}
        </ul>
      )
    }
    return <h3 className="no-results">No Results Found</h3>
  }

  apiStatusOnSuccess = () => {
    const {searchInputValue} = this.state

    return (
      <>
        <div className="search-input-container">
          <BsSearch color="#94A3B8" />
          <input
            type="search"
            className="searchInput"
            placeholder="Enter the state"
            onChange={this.onChangeInput}
          />
        </div>
        {searchInputValue === ''
          ? this.renderHomeView()
          : this.renderSearchList()}
      </>
    )
  }

  apiStatusInProgress = () => (
    <div className="loader-responsive-container" testid="homeRouteLoader">
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
      <div className="home-bg-container">
        <Header />
        <div className="home-responsive-container">
          {this.renderBasedOnApiStatus()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
