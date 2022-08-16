import './index.css'

const CovidCasesCard = props => {
  const {covidCasesDetails, onChangeCovidSelectId, totalCasesInCountry} = props

  const covidSelectCardClassName = () => {
    const {covidSelect} = props

    switch (covidSelect) {
      case 'CONFIRMED':
        return 'confirmed'
      case 'ACTIVE':
        return 'active'
      case 'RECOVERED':
        return 'recovered'
      case 'DECEASED':
        return 'deceased'
      default:
        return ''
    }
  }

  const {id, text, imageUrl, altText, testId} = covidCasesDetails
  const listItemClassName =
    covidSelectCardClassName().toUpperCase() === id
      ? covidSelectCardClassName()
      : ''
  const covidTextCountColor = `${id.toLowerCase()}-cases`

  const onClickCovidSelect = () => {
    onChangeCovidSelectId(id)
  }

  return (
    <li
      key={id}
      className={`covid-select-list-container ${listItemClassName}`}
      onClick={onClickCovidSelect}
    >
      <div testid={testId} className="covid-select-container">
        <p className={`covid-select-heading ${covidTextCountColor}`}>{text}</p>
        <img src={imageUrl} alt={altText} className="covid-select-image" />
        <p className={`covid-select-total-cases ${covidTextCountColor}`}>
          {totalCasesInCountry}
        </p>
      </div>
    </li>
  )
}

export default CovidCasesCard
