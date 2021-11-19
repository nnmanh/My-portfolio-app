import './App.css'
import React from "react"
import {Tooltip, XAxis, YAxis, ResponsiveContainer, Line, CartesianGrid, Bar, ComposedChart, Legend, LabelList} from "recharts"

const grades=[
    {
        subject: "Computer Programming",
        'My grade': 95,
        'Average class grade': 90
    },
    {
        subject: "Databases",
        'My grade': 96,
        'Average class grade': 85
    },
    {
        subject: "Discrete Mathematics",
        'My grade': 97,
        'Average class grade': 80
    },
    {
        subject: "Statistics and Probability",
        'My grade': 94,
        'Average class grade': 75
    },
    {
        subject: "Calculus",
        'My grade': 99,
        'Average class grade': 85
    },
    {
        subject: "Linear Algebra",
        'My grade': 99,
        'Average class grade': 92
    },
    {
        subject: "Data Science",
        'My grade': 94,
        'Average class grade': 90
    },
    {
        subject: "Statistical Data Analysis",
        'My grade': 95,
        'Average class grade': 85
    }
]
        
export default class ScoreChart extends React.Component{

    render(){
        return(
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <ComposedChart width={1000} height={1000} data={grades}>
                <CartesianGrid vertical={false} strokeDasharray="3 3"/>
                    <XAxis style={{fill: "#1c2237"}} dataKey="subject"/>
                    <YAxis style={{fill: "#1c2237"}} label={{ value: 'Grade', angle: -90, position: 'insideLeft', className:"label-style"}}/>
                    
                    <Tooltip contentStyle={{backgroundColor:"rgba(206, 206, 206, 0.9)", borderRadius:7, borderColor: "f5f5f5"}} labelStyle={{ color: "#0f4beb", fontWeight: 900}} itemStyle={{color: "black", fontWeight: 500}}/>
                    <Legend/>
                    <Bar barSize ={120} fill ="#0f4beb" dataKey="My grade">
                        <LabelList dataKey="My grade" fill="white" position="center"/>
                    </Bar>
                    <Line stroke="darkorange" strokeWidth = "3" dataKey="Average class grade"/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    )
}
}