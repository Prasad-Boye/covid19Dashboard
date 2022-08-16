import {PieChart, Pie, Cell, Legend} from 'recharts'

import './index.css'

const data1 = [
  {name: 'Male', value: 50},
  {name: 'Female', value: 50},
  {name: 'Others', value: 0},
]

const data2 = [
  {name: 'Covishield', value: 40},
  {name: 'Covaxin', value: 40},
  {name: 'Sputnik V', value: 20},
]

const COLORS1 = ['#F54394', '#5A8DEE', '#FF9800']
const COLORS2 = ['#007CC3', '#7AC142', '#FF9800']

const pieChartData = [
  {name: '18-44', value: 35},
  {name: '45-60', value: 35},
  {name: 'Above 60', value: 30},
]

const pieChartColors = ['#A3DF9F', '#64C2A6', '#2D87BB']

const PieAndHalfDonutChart = () => (
  <>
    <div className="vaccine-half-donuts-container">
      <p className="vaccine-half-donuts-container-heading">
        Vaccination Category
      </p>
      <div>
        <div className="half-donut-container">
          <PieChart width={320} height={190}>
            <Pie
              data={data1}
              cx={150}
              cy={110}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data1.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS1[index % COLORS1.length]} />
              ))}
            </Pie>
            <Legend align="center" />
          </PieChart>
        </div>
        <div className="half-donut-container">
          <PieChart width={320} height={190}>
            <Pie
              data={data2}
              cx={150}
              cy={110}
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS2[index % COLORS2.length]} />
              ))}
            </Pie>
            <Legend align="center" />
          </PieChart>
        </div>
      </div>
    </div>
    <div className="vaccine-half-donuts-container">
      <p className="vaccine-half-donuts-container-heading">
        Vaccination by Age
      </p>
      <PieChart width={300} height={360}>
        <Pie
          data={pieChartData}
          cx={150}
          cy={150}
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell
              key={entry.name}
              fill={pieChartColors[index % pieChartColors.length]}
            />
          ))}
        </Pie>
        <Legend align="center" />
      </PieChart>
    </div>
  </>
)

export default PieAndHalfDonutChart
