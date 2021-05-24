import React from 'react';
import {Bar} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// const data = {

//     labels: ['1', '2', '3', '4', '5', '6'],

//     datasets: [
//         {   
//           type : 'line',
//           label: 'EC2',
//           data: [12, 19, 3, 5, 2, 3],
//           fill: true,
//           backgroundColor: 'rgba(255, 99, 132,0.5)',
//           borderColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         { 
//           type : 'line',
//           label: 'CloudFront',
//           data: [1, 2, 1, 1, 2, 2],
//           fill: true,
//           backgroundColor: 'rgba(54, 162, 235,0.5)',
//           borderColor: 'rgba(54, 162, 235, 0.5)',
//         },
//       ],
// }

// const options = {
//     scales: {
//       yAxes: [
//         {
//           type: 'linear',
//           display: true,
//           position: 'left',
//           id: 'y-axis-1',
//         },
//         {
//           type: 'linear',
//           display: true,
//           position: 'right',
//           id: 'y-axis-2',
//           gridLines: {
//             drawOnArea: false,
//           },
//         },
//       ],
//     },
//   };

const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: true,
    plugins: {
      title: {
        display: true,
        text: '주요 상품별 사용 요금 이력 [EC2, RDS, S3, CloudFront]'
      }
    }
}

const AriaChart = (props) => {
    
    console.log(props);
    return(
        <>
           
            <Grid item xs={11}>
                <Bar data={props.data} options={options} height={80}></Bar>
            </Grid>
            
        </>
    )
}

// function AriaChart(props) {
    
//     console.log(props);
//     return(
//         <>
           
//             <Grid item xs={11}>
//                 <Bar data={props.data} options={options} height={80}></Bar>
//             </Grid>
            
//         </>
//     )
// }

export default AriaChart;