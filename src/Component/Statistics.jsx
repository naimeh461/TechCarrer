import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {ComposedChart,Line,Area, Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,} from 'recharts';
const Statistics = () => {
    const assignment =
    [
        {"No": 1, "assignmentName": "HTML,CSS and GitHub as A Beginner", "assignmentNo": "Assignment 1", "Assignment-Mark": 60, "My-Mark": 60}, 
        {"No": 2, "assignmentName": "Responsive Web Layout", "assignmentNo": "Assignment 2", "Assignment-Mark": 60, "My-Mark": 60}, 
        {"No": 3, "assignmentName": "CSS Frameworks", "assignmentNo": "Assignment 3", "Assignment-Mark": 60, "My-Mark": 59}, 
        {"No": 4, "assignmentName": "Hello JavaScript", "assignmentNo": "Assignment 4", "Assignment-Mark": 60, "My-Mark": 55}, 
        {"No": 5, "assignmentName": "Integrate JavaScript(JavaScript in A Relation)", "assignmentNo": "Assignment 5", "Assignment-Mark": 60, "My-Mark": 50}, 
        {"No": 6, "assignmentName": "Intermediate JavaScript,API", "assignmentNo": "Assignment 6", "Assignment-Mark": 60, "My-Mark": 57}, 
        {"No": 7, "assignmentName": "Explore Browser Milestone 7 & Debug", "assignmentNo": "Assignment 7", "Assignment-Mark": 60, "My-Mark": 60}, 
        {"No": 8, "assignmentName": "Simple React", "assignmentNo": "Assignment 8", "Assignment-Mark": 60, "My-Mark": 60}
    ]
    
    return (
        <div>
            <div className='text-4xl h-52 bg-violet-100 flex justify-center items-center font-bold m-auto'>statistics section</div>  
            <div className='flex justify-center mt-14 mb-10'>
            <ComposedChart
                width={1000}
                height={600}
                data={assignment}
            >
                 <XAxis dataKey="assignmentNo" />
                 <YAxis dataKey="Assignment-Mark" />
                 <Bar dataKey="Assignment-Mark"  barSize={20} fill="#413ea0" />
                 <Line type="monotone" dataKey="assignmentName" stroke="#ff7300" />
                 <Line type="monotone" dataKey="My-Mark" stroke="#ff7300" />
                 <Tooltip/>
            </ComposedChart>
            </div>
        </div>
    );
};


export default Statistics;