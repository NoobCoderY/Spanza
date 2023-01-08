import React from "react";
import AnyChart from "anychart-react/dist/anychart-react.min.js";
import anychart from "anychart";
import Data from "./data.json";
import './styles.css'

export default function App() {
  let data = Data;
  var dataSet = anychart.data.set(data);
  var density_data = dataSet.mapAs({ size: "data" });

  const dataArray = data.map(v=>{
    const dt = v.data;
    return(dt)
  });

  var condn1 = (x) => x > 10000000;
  var output1 = dataArray.filter(condn1);

  var condn2 = (x) => x<10000000 && x > 100000;
  var output2 = dataArray.filter(condn2);

  var condn3 = (x) => x<100000 && x > 10000;
  var output3 = dataArray.filter(condn3);

  var condn4 = (x) => x < 10000 ;
  var output4 = dataArray.filter(condn4);

  const width1 = (output1.length/dataArray.length)*100;
  const width2 = (output2.length/dataArray.length)*100;
  const width3 = (output3.length/dataArray.length)*100;
  const width4 = (output4.length/dataArray.length)*100;

  console.log(dataArray);
  console.log(output1);

  return (
    <div style={{display:'flex',margin:'auto',flexDirection:'column'}}>
      <AnyChart
        width={800}
        height={600}
        type="choropleth"
        minBubbleSize="0.5%"
        maxBubbleSize="4%"
        // mapAs={{'size': 'population'}}
        // data={data}
        bubble={density_data}
        title="Task"
        geoData={anychart.maps.world}
      />
      <div style={{display:'flex',gap:'8px',margin:'auto'}}>
        <div>$ Usage</div>
        <div style={{display:'flex',margin:'auto',flexDirection:'column',gap:'20px'}}>
          <div style={{width:'70vw', height:'0.7rem',display:'flex'}}>
            <div style={{background:'#0047AB',width:`${width1}%`}}/>
            <div style={{background:'#0096FF',width:`${width2}%`}}/>
            <div style={{background:'#89CFF0',width:`${width3}%`}}/>
            <div style={{background:'#ADD8E6',width:`${width4}%`}}/>
          </div>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{background:'#0047AB',width:'10px',height:'10px'}}/>
              <div style={{display:'flex',gap:'40px'}}>
                <div>{'>'} $10000000</div>
                <div>{`${width1.toFixed(2)}%`}</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{background:'#0096FF',width:'10px',height:'10px'}}/>
              <div style={{display:'flex',gap:'40px'}}> 
                <div>$10000000 - $100000</div>
                <div>{`${width2.toFixed(2)}%`}</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{background:'#89CFF0',width:'10px',height:'10px'}}/>
              <div style={{display:'flex',gap:'40px'}}> 
                <div>$100000 - $10000</div>
                <div>{`${width3.toFixed(2)}%`}</div>
              </div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
              <div style={{background:'#ADD8E6',width:'10px',height:'10px'}}/>
              <div style={{display:'flex',gap:'40px'}}> 
                <div>{'<'} $10000</div>
                <div>{`${width4.toFixed(2)}%`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
