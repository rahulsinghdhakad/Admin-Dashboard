import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
} from 'chart.js';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
);

type PropType = {
    title1: string,
    title2: string,
    data1: number[],
    data2: number[],
    horizontal?: boolean,
    labels?: string[],
    bgColor1: string,
    bgColor2: string,
}


const label = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const BarChart = ({
    title1,
    title2,
    data1,
    data2,
    horizontal = false,
    labels = label,
    bgColor1,
    bgColor2,
}: PropType) => {
    const options: ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }
    };


    const data: ChartData<"bar", number[], string> = {
        labels,
        datasets: [
            {
                label: title1,
                data: data1,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: bgColor1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.5,
            },
            {
                label: title2,
                data: data2,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: bgColor2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.5,
            }
        ],

    };

    return <Bar width={horizontal?"200%":""} options={options} data={data} />;
}

type DoughnutChartPropType = {
    labels: string[],
    data: number[],
    backgroundColor: string[],
    cutout?:number
    legend?:boolean,
    offset?: number[],
}

export const DoughnutChart = ({
    labels,
    data,
    backgroundColor,
    cutout=50,
    legend=true,
    offset,
}:DoughnutChartPropType) => {
    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: legend,
                position:"bottom",
            }
        },
        cutout,
        offset,
    }
    const Data: ChartData<"doughnut", number[], string> = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 0,
            },
        ],
    };

    return <Doughnut data={Data} options={options} />;
}


type PieChartPropType = {
    labels: string[],
    data: number[],
    backgroundColor: string[],
    offset: number[],
}

export const PieChart = ({
    labels,
    data,
    backgroundColor,
    offset,
}:PieChartPropType) => {

    const options: ChartOptions<"pie"> = {
        responsive: true,
        plugins:{
            legend:{
                display:false,
            }
        },
        offset,
    }
    const Data: ChartData<"pie", number[], string> = {
        labels,
        datasets: [
            {
                data,
                backgroundColor,
                borderWidth: 0,
            },
        ],
    };

    return <Pie data={Data} options={options} />;
}

type LinePropType = {
    label: string,
    data: number[],
    backgroundColor:string,
    borderColor:string,
    labels?: string[],
}

export const LineChart = ({
    data,
    label,
    backgroundColor,
    borderColor,
    labels=[],
}: LinePropType) => {

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            },
            x: {
                grid: {
                    display: false,
                }
            }
        }
    };


    const lineCharData: ChartData<"line", number[], string> = {
        labels,
        datasets: [
            {
                fill:true,
                label,
                data,
                borderColor,
                backgroundColor,
            }
        ],
    };

    return <Line options={options} data={lineCharData} />;
}