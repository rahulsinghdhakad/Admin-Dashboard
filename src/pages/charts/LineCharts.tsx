import AdminSidebar from "../../components/AdminSidebar"
import { LineChart } from "../../components/Chart"

const months = [
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


const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-box">
        <h1>Line Charts</h1>

        <section>
          <LineChart
            data={[12, 43, 12, 45, 22, 33, 43, 23, 52, 33, 66, 77]}
            label="revanue"
            backgroundColor="rgba(255,255,255,0.1)"
            borderColor="rgba(255,255,255,0.9)"
            labels={months}
          />
          <h5>Total Revenue</h5>

        </section>
        <section>
          <LineChart
            data={[120,432,1443,1435,123,1254,134,123,1234,123,55,123]}
            label="Discount"
            backgroundColor="rgba(255,255,255,0.1)"
            borderColor="rgba(255,255,255,0.9)"
            labels={months}
          />
          <h5>Discount Alloted</h5>
        </section>

        <section>
          <LineChart
            data={[120,32,143,135,123,124,134,123,111,223,54,123]}
            label="Products"
            backgroundColor="rgba(255,255,255,0.1)"
            borderColor="rgba(255,255,255,0.9)"
            labels={months}
          />
          <h5>Total Products</h5>
        </section>

      </main>
    </div>
  )
}

export default LineCharts