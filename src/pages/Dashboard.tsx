import { FaBell, FaSearch } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"
import userImg from "../assets/im.png"
import { BiDownArrow, BiMaleFemale, BiUpArrow } from "react-icons/bi"
import { BarChart, DoughnutChart } from "../components/Chart"
import Table from "../components/Table"

const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard">

        <section className="navbar">
          <FaSearch />
          <input type="text" placeholder="search here" />
          <FaBell />
          <img src={userImg} alt="img" />
        </section>

        <section className="widget-container">
          <Widget
            title="revenue"
            value={35000}
            percentage={50}
          />
          <Widget
            title="user"
            value={300}
            percentage={60}
          />
          <Widget
            title="transaction"
            value={5000}
            percentage={20}
          />
          <Widget
            title="products"
            value={350}
            percentage={90}
          />
        </section>

        <section className="charts">
          <div className="chart-bar">
            <h1>Reavenue and transaction</h1>
            <BarChart
              title1="chart1"
              title2="chart2"
              data1={[1, 2, 3, 4, 5, 6, 7]}
              data2={[2, 4, 3, 5, 2, 3, 5]}
              bgColor1="lightblue"
              bgColor2="grey"
            />
          </div>
          <div className="right-bar">
            <h1>Inventory</h1>
            <div className="container">
              <Item
                title="laptop"
                per={40}
              />
              <Item
                title="mouse"
                per={50}
              />
              <Item
                title="keyboard"
                per={70}
              />
              <Item
                title="screen"
                per={10}
              />
            </div>
          </div>
        </section>

        <section className="transcation-container">

          <div className="doughnut-chart">
          <h1>Gender Chart</h1>
            <div className="chart">
              <DoughnutChart
                labels={["male", "female"]}
                data={[5, 6]}
                backgroundColor={[
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',]}
                cutout={80}
              />
            </div>
            <div className="icon">
              <BiMaleFemale />
            </div>
          </div>

          <div className="transaction-table">
            <Table/>
          </div>

        </section>
      </main>
    </div>
  )
}
export default Dashboard

type ItemPropType = {
  title: string,
  per: number
}

const Item = ({ title, per }: ItemPropType) => {
  const color = `hsla(${per*5},80%,50%,0.8)`;
  return (
    <div className="item">
      <p>{title}</p>
      <div>
        <div style={{
          width: `${per}%`,
          backgroundColor: color,
        }}></div>
      </div>
      <span>{per}%</span>
    </div>
  )
}

type PropType = {
  title: string,
  value: number,
  percentage: number,
}

const Widget = ({
  title,
  value,
  percentage,
}: PropType) => {
  const color = `hsl(${percentage},100%,50%)`
  return (
    <div className="widget">
      <div className="widgetInfo">
        <p>{title}</p>
        <h2>{value}</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          {
            percentage > 0 ? <BiUpArrow /> : <BiDownArrow />
          }
          <span style={{
            color: percentage > 0 ? "green" : "red",
          }}>{percentage > 0 ? "+" : ""}
            {percentage}%
          </span>
        </div>
      </div>
      <div className="widget-logo" >
        <div className="before" style={{
          background: `conic-gradient( 
            ${color} ${(percentage / 100) * 360}deg, rgba(255, 255, 255, 0.817) 0deg)`,
        }}></div>
        {percentage > 0 ? "+" : ""}{percentage}%
      </div>
    </div>
  )
}