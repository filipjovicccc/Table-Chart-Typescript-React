import { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { Wrapper } from './Chart.styled';
import { Item } from './models/Item';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'CompStack Line Chart',
    },
  },
};

const Chart = () => {
    const [allData, setAllData] = useState<Item[]>([])
    const [labels, setLabels] = useState<Array<number>>([])
    const [startingRent, setStartingRent] = useState<Array<number>>([])
    const [effectiveRent, setEffectiveRent] = useState<Array<number>>([])
    
    const getData = () => {
        fetch(`https://636b84dc7f47ef51e132b2ab.mockapi.io/Rent`)
          .then(res => res.json())
          .then(data => setAllData(data));
      }
    
      useEffect(() => {
        getData()
      }, [])

      useEffect(() => {
        setLabels([...allData.map(data => data.year)].sort());
        setStartingRent([...allData.map(data => data.startingRent)]);
        setEffectiveRent([...allData.map(data => data.effectiveRent)]);        
      }, [allData])

    const data = {
    // labels,
    datasets: [
        {
        label: 'Effective Rant',
        data: labels.map((_, index) => effectiveRent[index]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Starting Rant',
        data: labels.map((_, index) => startingRent[index]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
    };

  return (
    <Wrapper>
        <Line options={options} data={data} />
    </Wrapper>
  )
}

export default Chart