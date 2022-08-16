import {AreaChart, Area, XAxis, YAxis, Tooltip, Legend} from 'recharts'

import './index.css'

const MultiLineChart = props => {
  const {chartData} = props

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
      <div className="multi-line-chart-main-container">
        <AreaChart
          width={350}
          height={450}
          data={chartData.slice(0, 11)}
          margin={{
            top: 8,
            right: 8,
            left: 16,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="date"
            tick={{stroke: '#6C757D', strokeWidth: 1}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
          />
          <YAxis
            tick={{stroke: '#6C757D', strokeWidth: 0.5}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
            tickFormatter={DataFormatter}
          />
          <Tooltip
            cursor={{fill: '#6C757D', stroke: '#6C757D', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated1"
            fill="#233323"
            stroke="#37C62B"
            tick={{stroke: '#37C62B', strokeWidth: 2}}
            dot={{fill: '#37C62B', stroke: '#37C62B', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated2"
            fill="#3E4226"
            stroke="#FCEA4E"
            tick={{stroke: '#FCEA4E', strokeWidth: 2}}
            dot={{fill: '#FCEA4E', stroke: '#FCEA4E', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="total"
            fill="#2E1E30"
            stroke="#A226DC"
            tick={{stroke: '#A226DC', strokeWidth: 2}}
            dot={{fill: '#A226DC', stroke: '#A226DC', strokeWidth: 2}}
          />
        </AreaChart>
      </div>
      <div className="md-multi-line-chart-main-container">
        <p className="Vaccination-Trends-heading">Vaccination Trends</p>
        <AreaChart
          width={500}
          height={500}
          data={chartData.slice(0, 11)}
          margin={{
            top: 8,
            right: 8,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="date"
            tick={{stroke: '#6C757D', strokeWidth: 1}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
          />
          <YAxis
            tick={{stroke: '#6C757D', strokeWidth: 0.5}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
            tickFormatter={DataFormatter}
          />
          <Tooltip
            cursor={{fill: '#6C757D', stroke: '#6C757D', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated1"
            fill="#233323"
            stroke="#37C62B"
            tick={{stroke: '#37C62B', strokeWidth: 2}}
            dot={{fill: '#37C62B', stroke: '#37C62B', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated2"
            fill="#3E4226"
            stroke="#FCEA4E"
            tick={{stroke: '#FCEA4E', strokeWidth: 2}}
            dot={{fill: '#FCEA4E', stroke: '#FCEA4E', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="total"
            fill="#2E1E30"
            stroke="#A226DC"
            tick={{stroke: '#A226DC', strokeWidth: 2}}
            dot={{fill: '#A226DC', stroke: '#A226DC', strokeWidth: 2}}
          />
          <Legend />
        </AreaChart>
      </div>
      <div className="lg-multi-line-chart-main-container">
        <p className="Vaccination-Trends-heading">Vaccination Trends</p>
        <AreaChart
          width={720}
          height={500}
          data={chartData}
          margin={{
            top: 8,
            right: 8,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="date"
            tick={{stroke: '#6C757D', strokeWidth: 1}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
          />
          <YAxis
            tick={{stroke: '#6C757D', strokeWidth: 0.5}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
            tickFormatter={DataFormatter}
          />
          <Tooltip
            cursor={{fill: '#6C757D', stroke: '#6C757D', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated1"
            fill="#233323"
            stroke="#37C62B"
            tick={{stroke: '#37C62B', strokeWidth: 2}}
            dot={{fill: '#37C62B', stroke: '#37C62B', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated2"
            fill="#3E4226"
            stroke="#FCEA4E"
            tick={{stroke: '#FCEA4E', strokeWidth: 2}}
            dot={{fill: '#FCEA4E', stroke: '#FCEA4E', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="total"
            fill="#2E1E30"
            stroke="#A226DC"
            tick={{stroke: '#A226DC', strokeWidth: 2}}
            dot={{fill: '#A226DC', stroke: '#A226DC', strokeWidth: 2}}
          />
          <Legend />
        </AreaChart>
      </div>
      <div className="ex-lg-multi-line-chart-main-container">
        <p className="Vaccination-Trends-heading">Vaccination Trends</p>
        <AreaChart
          width={870}
          height={500}
          data={chartData}
          margin={{
            top: 8,
            right: 8,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="date"
            tick={{stroke: '#6C757D', strokeWidth: 1}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
          />
          <YAxis
            tick={{stroke: '#6C757D', strokeWidth: 0.5}}
            tickLine={{stroke: '#6C757D'}}
            axisLine={{stroke: '#6C757D'}}
            tickFormatter={DataFormatter}
          />
          <Tooltip
            cursor={{fill: '#6C757D', stroke: '#6C757D', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated1"
            fill="#233323"
            stroke="#37C62B"
            tick={{stroke: '#37C62B', strokeWidth: 2}}
            dot={{fill: '#37C62B', stroke: '#37C62B', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="vaccinated2"
            fill="#3E4226"
            stroke="#FCEA4E"
            tick={{stroke: '#FCEA4E', strokeWidth: 2}}
            dot={{fill: '#FCEA4E', stroke: '#FCEA4E', strokeWidth: 2}}
          />
          <Area
            type="monotone"
            stackId="1"
            dataKey="total"
            fill="#2E1E30"
            stroke="#A226DC"
            tick={{stroke: '#A226DC', strokeWidth: 2}}
            dot={{fill: '#A226DC', stroke: '#A226DC', strokeWidth: 2}}
          />
          <Legend />
        </AreaChart>
      </div>
    </>
  )
}

export default MultiLineChart
