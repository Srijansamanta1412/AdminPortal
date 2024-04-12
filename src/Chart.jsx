import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { LineChart } from '@mui/x-charts/LineChart';
import Progrss from './Progrss';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels = [
    'JAN',
    'FEB',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
];

export default function SimpleAreaChart() {
    return (
        <div style={{display:'flex', marginTop:'2rem'}}>
            <Card sx={{ minWidth: 200, width:'35rem', marginTop: 1, marginLeft: 5,boxShadow: 5 }}>
                <LineChart
                    width={550}
                    height={350}
                    series={[{ data: uData, label: 'Last 6 months Revenue', area: true, showMark: false,color:'violet'}]}
                    xAxis={[{ scaleType: 'point', data: xLabels }]}
                    sx={{
                        '.MuiLineElement-root': {
                            display: 'none',
                            fill:"black"
                        },
                        '.recharts-line': {  // Select the SVG path element representing the line
                            stroke: 'black',   // Set the stroke color of the line
                          },
                       
                    }}
                   
                />
            </Card>
            <Card sx={{ minWidth: 200, width:'22rem', marginTop: 1, marginLeft: 5,boxShadow: 5 ,textAlign:'center' }}>
                    <div style={{fontSize:'16px',fontWeight:500,marginTop:10,marginBottom:10}}>Total Revenue</div>
                    <br></br>
                    <Progrss/>
                    <div style={{fontWeight:500,color:'grey',marginTop:10}}>Total Sales Made Today</div>
                    <div style={{margin:10,fontSize:'30px'}}>$420</div>
                    <div style={{fontWeight:300,fontSize:'12px',color:'grey',marginTop:'20px',marginLeft:'15px',marginRight:'15px'}}>Previous Transaction Processing. Last Payment May not include</div>
            </Card>

            
        </div>
    );
}