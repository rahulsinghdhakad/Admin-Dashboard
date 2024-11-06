import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillCustomerService } from "react-icons/ai";
import { FaChartBar, FaChartLine, FaChartPie, FaCouch, FaGamepad, FaHamburger, FaProductHunt, FaStopwatch } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";


const AdminSidebar = () => {
    const location = useLocation();
    const [phoneActive, setPhoneActive] = useState<boolean>(window.innerWidth < 900);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener("resize", () => setPhoneActive(window.innerWidth < 900))

        return () => {
            window.removeEventListener("resize", () => setPhoneActive(window.innerWidth < 900));
        }
    }, [])


    return (
        <aside style={{
            transition: "all 0.5s",
            left: showModal ? "0" : "-200px",
        }}>
            {
                phoneActive ?
                    <div
                        className="hamburger"
                        onClick={() => setShowModal(prev => !prev)}
                        style={
                            showModal?{
                                left:"7rem",
                            }:{}}>
                        <FaHamburger />
                    </div> :
                    ""
            }
            <h1>logo.</h1>
            <Div1 location={location} />
            <Div2 location={location} />
            <Div3 location={location} />
        </aside>
    );
};

export default AdminSidebar;

const Div1 = ({ location }: { location: Location }) => {
    return (
        <div>
            <p>dashboard</p>
            <ul>
                <Li
                    url="/admin/dashboard"
                    text="Dashboard"
                    Icon={RiDashboardFill}
                    location={location}
                />
                <Li
                    url="/admin/product"
                    text="Product"
                    Icon={FaProductHunt}
                    location={location}
                />
                <Li
                    url="/admin/customer"
                    text="Customer"
                    Icon={AiFillCustomerService}
                    location={location}
                />
                <Li
                    url="/admin/transaction"
                    text="Transaction"
                    Icon={GrTransaction}
                    location={location}
                />
            </ul>
        </div>
    )
}

const Div2 = ({ location }: { location: Location }) => {
    return (
        <div>
            <p>Charts</p>
            <ul>
                <Li
                    url="/admin/charts/bar"
                    text="Bar"
                    Icon={FaChartBar}
                    location={location}
                />
                <Li
                    url="/admin/charts/pie"
                    text="Pie"
                    Icon={FaChartPie}
                    location={location}
                />
                <Li
                    url="/admin/charts/line"
                    text="Line"
                    Icon={FaChartLine}
                    location={location}
                />
            </ul>
        </div>
    )
}

const Div3 = ({ location }: { location: Location }) => {
    return (
        <div>
            <p>Apps</p>
            <ul>
                <Li
                    url="/admin/app/toss"
                    text="Toss"
                    Icon={FaGamepad}
                    location={location}
                />
                <Li
                    url="/admin/app/coupon"
                    text="Coupon"
                    Icon={FaCouch}
                    location={location}
                />
                <Li
                    url="/admin/app/stopwatch"
                    text="Stopwatch"
                    Icon={FaStopwatch}
                    location={location}
                />
            </ul>
        </div>
    )
}

type PropType = {
    url: string,
    text: string,
    Icon: IconType,
    location: Location,
};
const Li = ({ url, text, Icon }: PropType) => {
    return (
        <li>
            <Link
                to={url}
                style={{
                    backgroundColor:
                        location.pathname.includes(url) ?
                            "rgba(255,255,255,0.2)" : "",
                    color:
                        location.pathname.includes(url) ?
                            "rgb(255,255,255,1)" : "",

                }}
            >
                <Icon />
                {text}
            </Link>
        </li>
    );
};
