
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import{Chart as ChartJS} from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';



const url='http://localhost:8080/data'
function App() {

const [data1, setdata] = useState([])


const chartData={
  labels: data1.map(d => d.time),
  datasets: [
    {
      label: 'Time',
      backgroundColor: 'rgba(75,192,0,1)',
      borderColor: 'rgba(0,0,0,255)',
      borderWidth: 1,
      data: data1,
      parsing:{
        xAxisKey:'time',
        yAxisKey:'anomalydeg'
      }
      }
         
  
  ]
}
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "chartti",
    },
 
  },
  scales: { 
    y:{min:-3,max:3},
    x:{type:'time'}
   
    },
  }



  



useEffect(() => {
  axios.get(url)
  .then((response)=>{
    
    
    
    

   
    console.log(response.data)
   

     setdata(response.data)
    
    
  
   
  }).catch (error=>{
    alert(error.response.error)
  })

}, [])



  return (
    <div>
      <h3>data =</h3>
      
      <Line data={chartData} options={options} />
     
     
      
    </div>

  );
}

export default App;
