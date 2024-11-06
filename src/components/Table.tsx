import TableHOC from "./TableHOC"
import {transaction as data} from "../assets/data.json"
import { Column } from "react-table";

type DataType={
    id: string,
    amount: number,
    quantity: number,
    discount: number,
    status: string,
}

const columns: Column<DataType>[]=[
    {
        Header:"Id",
        accessor:"id"
    },
    {
        Header:"Amount",
        accessor:"amount"
    },
    {
        Header:"Quantity",
        accessor:"quantity"
    },
    {
        Header:"Discount",
        accessor:"discount"
    },
    {
        Header:"Status",
        accessor:"status"
    },
]

const Table = () => {
  return TableHOC(columns,data,"transaction-Box","Top Transaction")();
}

export default Table