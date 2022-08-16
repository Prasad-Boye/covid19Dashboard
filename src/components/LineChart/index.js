import {LineChart, XAxis, YAxis, Tooltip, Line} from 'recharts'
import './index.css'

const strokeColoursList = [
  '#FF073A',
  '#007BFF',
  '#27A243',
  '#6C757D',
  '#9673B9',
]

const LineChartUsingData = props => {
  const {chartData, indexNo} = props
  const data = chartData[indexNo]
  const smData = chartData[indexNo].slice(0, 15)
  const strokeColor = strokeColoursList[indexNo]

  let lineChartBg
  let lineChartName

  if (indexNo === 0) {
    lineChartBg = 'confirmed'
    lineChartName = 'Confirmed'
  } else if (indexNo === 1) {
    lineChartBg = 'active'
    lineChartName = 'Active'
  } else if (indexNo === 2) {
    lineChartBg = 'recovered'
    lineChartName = 'Recovered'
  } else if (indexNo === 3) {
    lineChartBg = 'deceased'
    lineChartName = 'Deceased'
  } else if (indexNo === 4) {
    lineChartBg = 'tested'
    lineChartName = 'Tested'
  }

  const DataFormatter = number => {
    if (number > 100000) {
      return `${(number / 100000).toString()}L`
    }
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <>
      <div className={`line-chart-container ${lineChartBg}`}>
        <p className="line-chart-name">{lineChartName}</p>
        <LineChart width={350} height={190} data={smData}>
          <XAxis
            dataKey="date"
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <YAxis
            type="number"
            tickFormatter={DataFormatter}
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <Tooltip
            cursor={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
          <Line
            type="monotone"
            dataKey="cases"
            stroke={strokeColor}
            tick={{stroke: strokeColor, strokeWidth: 2}}
            dot={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
        </LineChart>
      </div>
      <div className={`md-line-chart-container ${lineChartBg}`}>
        <p className="line-chart-name">{lineChartName}</p>
        <LineChart width={400} height={220} data={smData}>
          <XAxis
            dataKey="date"
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <YAxis
            type="number"
            tickFormatter={DataFormatter}
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <Tooltip
            cursor={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
          <Line
            type="monotone"
            dataKey="cases"
            stroke={strokeColor}
            tick={{stroke: strokeColor, strokeWidth: 2}}
            dot={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
        </LineChart>
      </div>
      <div className={`lg-line-chart-container ${lineChartBg}`}>
        <p className="line-chart-name">{lineChartName}</p>
        <LineChart width={500} height={250} data={smData}>
          <XAxis
            dataKey="date"
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <YAxis
            type="number"
            tickFormatter={DataFormatter}
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <Tooltip
            cursor={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
          <Line
            type="monotone"
            dataKey="cases"
            stroke={strokeColor}
            tick={{stroke: strokeColor, strokeWidth: 2}}
            dot={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
        </LineChart>
      </div>
      <div className={`ex-lg-line-chart-container ${lineChartBg}`}>
        <p className="line-chart-name">{lineChartName}</p>
        <LineChart
          width={700}
          height={350}
          data={data}
          margin={{top: 0, right: 32, left: 32, bottom: 0}}
        >
          <XAxis
            dataKey="date"
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{stroke: strokeColor, strokeWidth: 1}}
            tickLine={{stroke: strokeColor}}
            axisLine={{stroke: strokeColor}}
          />
          <Tooltip
            cursor={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
          <Line
            type="monotone"
            dataKey="cases"
            stroke={strokeColor}
            tick={{stroke: strokeColor, strokeWidth: 2}}
            dot={{fill: strokeColor, stroke: strokeColor, strokeWidth: 2}}
          />
        </LineChart>
      </div>
    </>
  )
}

export default LineChartUsingData
