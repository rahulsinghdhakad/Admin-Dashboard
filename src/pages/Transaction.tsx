import { ReactElement, useState } from "react"
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table"
import TableHOC from "../components/TableHOC"
import { Link } from "react-router-dom"

interface DataType {
  users: string,
  amount: number,
  discount: number,
  quantity: number,
  status: ReactElement,
  action: ReactElement,
}

const columns: Column<DataType>[] = [
  {
    Header: "Users",
    accessor: "users"
  },
  {
    Header: "Amount",
    accessor: "amount"
  },
  {
    Header: "Discount",
    accessor: "discount"
  },
  {
    Header: "Quantity",
    accessor: "quantity"
  },
  {
    Header: "Status",
    accessor: "status"
  },
  {
    Header: "Action",
    accessor: "action"
  }
]

const arr: DataType[] = [
  {
    users: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span>Processing</span>,
    action: <Link to={"/admin/transaction/adsf"}>Manage</Link>,
  },
  {
    users: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span>Shipped</span>,
    action: <Link to={"/admin/transaction/adsf"}>Manage</Link>,
  },
  {
    users: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span>Delivered</span>,
    action: <Link to={"/admin/transaction/adsf"}>Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr)
  const Table = TableHOC(columns, data, "product-table", "Transactions")

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>
        <Table />
      </main>
    </div>
  )
}

export default Transaction