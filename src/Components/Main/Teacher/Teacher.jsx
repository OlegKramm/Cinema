import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Teacher.module.css"
import Teacher_1 from "./Teacher_1/Teacher_1";
import Teacher_2 from "./Teacher_2/Teacher_2";



const TeacherName = (props) =>{
    let path = '/teacher/' + props.id;
    return (
        <div>
            <NavLink to ={path}>{props.name}</NavLink>
        </div>
    )
}


const Profile = (props) => {
  return (
    <div>
      {props.message}
    </div>
  )
}


const Teacher = () => {
return (
    <div className={style.teacher}>
        <div className={style.teacherName}>         
            {/* <TeacherName name ="Dima" id="01"/> */}
            <TeacherName name ="Dima" id="01"/>
            <TeacherName name ="Andrey" id="02"/>
            <TeacherName name ="Oksana" id="03"/>
            <TeacherName name ="Nikita" id="04"/>
            <TeacherName name ="Oleg" id="05"/>
            
       </div>
       <div>
       <Teacher_1/>
       <Teacher_2/>

       </div>

   </div>


)

}
export default Teacher