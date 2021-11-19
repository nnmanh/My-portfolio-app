import './App.css'
import React from "react"
import {ResponsiveContainer, PieChart, Pie, Cell, Sector} from "recharts"

const CGPA=[
    {
        name: "My Score",
        CGPA: 4.038
    },
    {
      name: "",
      CGPA: 0.262
    }
]

const COLORS2 = ['#002473', '#f7f8fa'];

const credits_earned=[
    {
        name: "credits earned",
        credits: 26
    },
    {
        name: "remaining credits",
        credits: 52
    }
]

const COLORS1 = ['#13b335', 'lightgrey'];

const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent} = props;

    return (
        <g>
            <text x={cx} y={cy} dy={2} textAnchor="middle" fill={fill} className = "label">
                {payload.credits + " " + payload.name}
            </text>
            <text x={cx} y={cy} dy={30} textAnchor="middle" fill= {fill} className = "label">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
          
        </g>
      );
    };

const renderOuterActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
    
    return (
        <g>
            <text x={cx} y={cy} dy={230} textAnchor="middle" fill={fill} className = "label">
                {"My CGPA: " + payload.CGPA+ "/4.3"}
            </text>
            <Sector
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill}
          />
        </g>
          );
        };
        
export default class GPAChart extends React.Component{

    state = {
        activeIndex: 0
      };
    
      onPieEnter = (_, index) => {
        this.setState({
          activeIndex: index,
        })
      };

      onOuterPie = (_, index) => {
        this.setState({
          activeIndex: index,
        })
      };

    render(){
        return(
        <div>
            <ResponsiveContainer width="100%" height = "100%" aspect={1}>
                <PieChart width={1000} height={1000}>
                    <Pie
                        data={credits_earned} 
                        dataKey="credits" 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={120} 
                        outerRadius={150} 
                        startAngle={90}
                        endAngle={-270} 
                        paddingAngle={2}
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        onMouseEnter={this.onPieEnter}>
                        {
                        credits_earned.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />))
                        }
                    </Pie>
                    
                    <Pie 
                        data={CGPA} 
                        dataKey="CGPA" 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={170} 
                        outerRadius={200} 
                        startAngle={90}
                        endAngle={-270}
                        activeIndex={this.state.activeIndex}
                        activeShape={renderOuterActiveShape}
                        onMouseEnter={this.onOuterPie}>
                        {
                        CGPA.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
}