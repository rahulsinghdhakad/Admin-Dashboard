import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customer = lazy(() => import("./pages/Customer"));
const Product = lazy(() => import("./pages/Product"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProduct =lazy(()=>import("./management/NewProduct"));
const ProductManagement =lazy(()=>import("./management/ProductManagement"));
const TransactionManagement =lazy(()=>import("./management/TransactionManagement"));
const BarCharts= lazy(()=>import("./pages/charts/BarCharts"));
const PieCharts= lazy(()=>import("./pages/charts/pieCharts"));
const LineCharts= lazy(()=>import("./pages/charts/LineCharts"));
const Stopwatch= lazy(()=>import("./pages/dashboard_apps/Stopwatch"));
const Toss= lazy(()=>import("./pages/dashboard_apps/Toss"));
const Coupens= lazy(()=>import("./pages/dashboard_apps/Coupens"));


function App() {
  return (
    <Router>
        <Suspense fallback={<Loader/>}>
          <Routes>
          <Route path="/" element={<Link to={'/admin/dashboard'}><button>Visit Dashboard</button></Link>} />
            {/* dashboard */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/customer" element={<Customer />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/transaction" element={<Transaction />} />

            {/* charts */}
            <Route path="/admin/charts/bar" element={<BarCharts/>} />
            <Route path="/admin/charts/pie" element={<PieCharts/>} />
            <Route path="/admin/charts/line" element={<LineCharts/>} />

            {/* apps */}
            <Route path="/admin/app/stopwatch" element={<Stopwatch/>} />
            <Route path="/admin/app/toss" element={<Toss/>} />
            <Route path="/admin/app/coupon" element={<Coupens/>} />

            {/* Management */}
            <Route path="/admin/product/new" element={<NewProduct/>}/>
            <Route path="/admin/product/:id" element={<ProductManagement/>}/>
            <Route path="/admin/transaction/:id" element={<TransactionManagement/>}/>
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
