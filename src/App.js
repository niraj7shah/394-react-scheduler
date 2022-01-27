import React, { useState , useEffect} from 'react';
import './App.css';
import { useData } from './utilities/firebase.js';

import { timeParts, hasConflict, mapValues, addCourseTimes, addScheduleTimes, getCourseTerm, terms } from './utilities/times.js';
import { CourseList } from './components/CourseList.js';


const App = () =>  {
  const [schedule, loading, error] = useData('/', addScheduleTimes); 
  
  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Loading the schedule...</h1>

  return (
    <div className="container">
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </div>
  );
};

const Banner = ({ title }) => (
  <h1>{ title }</h1>
);

export default App;