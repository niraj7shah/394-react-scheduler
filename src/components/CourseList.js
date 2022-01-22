import React, { useState }from 'react';
import { terms, hasConflict, getCourseTerm} from '../utilities/times.js';
import Course from './Course.js';

// const getCourseNumber = course => (
//     course.id.slice(1, 4)
// );
  
// const toggle = (x, lst) => (
//     lst.includes(x) ? lst.filter(y => y !== x) : [x, ...lst]
// );

const TermSelector = ({term, setTerm}) => (
    <div className="btn-group">
    { 
      Object.values(terms).map(value => (
        <TermButton key={value} term={value} setTerm={setTerm} checked={value === term} />
      ))
    }
    </div>
  );

  const TermButton = ({term, setTerm, checked}) => (
    <>
      <input type="radio" id={term} className="btn-check" checked={checked} autoComplete="off"
        onChange={() => setTerm(term)} />
      <label class="btn btn-success m-1 p-2" htmlFor={term}>
      { term }
      </label>
    </>
  );

export const CourseList = ({ courses }) => {
    const [term, setTerm] = useState('Fall');
    const [selected, setSelected] = useState([]);
    const termCourses = Object.values(courses).filter(course => term === getCourseTerm(course));
  
    return (
      <>
      <TermSelector term={term} setTerm={setTerm}/>
      <div className="course-list">
        { termCourses.map(course => <Course key={course.id} course={ course } selected={selected} setSelected={ setSelected }/>) }
      </div>
      </>
    );
  };

//   const Course = ({ course, selected, setSelected }) => {
//     const isSelected = selected.includes(course);
//     const isDisabled = !isSelected && hasConflict(course, selected);
//     const style = {
//       backgroundColor: isDisabled? 'lightgrey' : isSelected ? 'lightgreen' : 'white'
//     };
//     return (
//       <div className="card m-1 p-2" 
//         style={style}
//         onClick={() => setSelected(toggle(course, selected))}>
//         <div className="card-body">
//           <div className="card-title">{ getCourseTerm(course) } CS { getCourseNumber(course) }</div>
//           <div className="card-text">{ course.title }</div>
//           <div className="card-text">{ course.meets }</div>
//         </div>
//       </div>
//     );
//   };