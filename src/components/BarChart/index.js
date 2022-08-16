import {XAxis, BarChart, Bar, LabelList} from 'recharts'

import './index.css'

const BarChartUsingData = props => {
  const {barChartData, colorId} = props
  const topTenData = barChartData.slice(0, 16)
  const smTopTenData = barChartData.slice(0, 10)

  console.log(topTenData)

  let fillBarColor = ''

  switch (colorId) {
    case 'CONFIRMED':
      fillBarColor = '#9A0E31'
      break
    case 'ACTIVE':
      fillBarColor = '#0A4FA0'
      break
    case 'RECOVERED':
      fillBarColor = '#216837'
      break
    case 'DECEASED':
      fillBarColor = '#474C57'
      break
    default:
      break
  }

  return (
    <>
      <div className="sm-bar-chart">
        <BarChart width={420} height={270} data={smTopTenData}>
          <XAxis
            dataKey="date"
            tick={{stroke: fillBarColor, strokeWidth: 1}}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            barWidth="20"
            dataKey="cases"
            fill={fillBarColor}
            className="bar"
            radius={[6, 6, 0, 0]}
          >
            <LabelList dataKey="count" position="top" fill={fillBarColor} />
          </Bar>
        </BarChart>
      </div>
      <div className="lg-bar-chart">
        <BarChart width={900} height={300} data={topTenData}>
          <XAxis
            dataKey="date"
            tick={{stroke: fillBarColor, strokeWidth: 1}}
            tickLine={false}
            axisLine={false}
          />
          <Bar
            barWidth="10px"
            dataKey="cases"
            fill={fillBarColor}
            className="bar"
            radius={[6, 6, 0, 0]}
          >
            <LabelList dataKey="count" position="top" fill={fillBarColor} />
          </Bar>
        </BarChart>
      </div>
    </>
  )
}

export default BarChartUsingData
