import AdminSidebar from "../../components/AdminSidebar"
import { BarChart } from "../../components/Chart"

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-box">
        <h1>Bar Charts</h1>

        <section>
          <BarChart
            data1={[12, 43, 12, 45, 22, 33, 43]}
            data2={[34, 25, 74, 34, 21, 57, 22]}
            title1="title1"
            title2="title2"
            bgColor1="rgba(255,255,255,0.4)"
            bgColor2="rgba(255,255,255,0.8)"
          />
          <h5>top selling products and customers</h5>
        </section>

        <section>
          <BarChart
            data1={[12, 43, 12, 45, 22, 33, 12, 34, 23, 11, 55, 22]}
            data2={[]}
            title1="title1"
            title2=""
            bgColor1="rgba(255,255,255,0.4)"
            bgColor2=""
            horizontal
            labels={labels}
          />
          <h5>order throughout the year</h5>
        </section>
      </main>
    </div>
  )
}

export default BarCharts