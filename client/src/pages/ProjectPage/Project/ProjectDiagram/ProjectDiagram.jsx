import { Pie } from 'react-chartjs-2';


const Chart = ({ capital, items }) => {
  let OutplaySum = 0;
  let ProfitSum = 0;
  items.forEach( el => {
    OutplaySum += el.price;
  });
  items.forEach( el => {
    ProfitSum += el.priceMargin - el.price;
  });
  const pieChartData = {
    labels: ['Capital', 'Outplay', 'Profit'],
    datasets: [{
      data: [capital, OutplaySum, ProfitSum],
      backgroundColor: ['#B56BE7', '#FF9D54', '#48E97A'],
      hoverBackgroundColor: ['#8B47B7', '#C37031', '#38B662']
    }]
  };
  const pieChart = (
    <Pie
      type='pie'
      width={460}
      height={460}
      options={{
        title: {
          display: true,
          fontSize: 15
        },
        legend: {
          display: true, 
          position: 'bottom'
        }
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};

export default Chart;
