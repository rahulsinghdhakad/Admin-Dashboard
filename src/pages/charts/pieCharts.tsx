import AdminSidebar from "../../components/AdminSidebar"
import { DoughnutChart, PieChart } from "../../components/Chart"
import {categories} from "../../assets/data.json"

const PieCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-box">
        <h1>Pie And Dougnut Charts</h1>

        <section className="pie-box">
          <PieChart
            data={[1,2,4]}
            labels={[ "Processing" ,"Shipped" , "Delivered"]}
            backgroundColor={[
              "rgba(255,255,255,0.3)",
              "rgba(255,255,255,0.6)",
              "rgba(255,255,255,0.9)",
            ]}
            offset={[0,0,50]}
          />
          <h5>Order Fullfilment Ration</h5>
        </section>

        <section className="pie-box">
          <DoughnutChart
            data={categories.map(i=>i.value)}
            labels={categories.map(i=>i.heading)}
            backgroundColor={categories.map(()=>`rgba(255,255,255,${Math.random()})`)}
            cutout={70}
            legend={false}
            offset={[0,0,0,50]}
          />
          <h5>Product Category Ratio</h5>
        </section>

        <section className="pie-box">
          <DoughnutChart
            data={[20,40]}
            labels={["instock","out of stock"]}
            backgroundColor={[
              "rgba(255,255,255,0.3)",
              "rgba(255,255,255,0.9)",
            ]}
            cutout={80}
            legend={false}
            offset={[0,50]}
          />
          <h5>Stock Availability</h5>
        </section>
      </main>
    </div>
  )
}

export default PieCharts