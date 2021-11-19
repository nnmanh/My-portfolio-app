import React, { Component } from 'react'
import ScoreChart from './BarChart';
import EducationSection from './EducationSection';
import GPAChart from './PieChart';

const homeObjOne = {
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Education',
    headline: 'Major in Data Science - Dean Lister',
    description1: "CGPA: 4.038/4.3 (Year 1)",
    description2: 'Coursework: Computer Programming, Databases, Discrete Mathematics, Statistics and Probability, Calculus, Linear Algebra, Data Science, Statistical Data Analysis',
    description3:"Achievement: Outstanding Academic Performance Scholarship - 90% tuition fee waiver (2020)",
    chart: <GPAChart/>
};

export class Education extends Component {
    render() {
        return (
            <>
                <EducationSection {...homeObjOne}/>

                <div className = "barchart-background">
                <h1 className="barchart-title">My Transcript - Year 1</h1>
                <ScoreChart/>
                </div>
            </>
        )
    }
}

export default Education
