import * as React from "react"
import { getTeachers } from "../../HOC/GetTeachers"
import { Route } from 'react-router';
const Teachers = ({teacherList}) => {
return(
    <React.Fragment>
         <h1>这是教师列表</h1>
         {teacherList.length === 0 ?
         <span>列表为空</span>:
         <ul>
             {teacherList.map((teacher) => (
                 <li key={teacher.id}>{teacher.name}</li>
             ))}
         </ul>
         }
    </React.Fragment>
   
)
}
const DigitalMediaTechnologyTeam = getTeachers("DigitalMediaTechnologyTeam")(Teachers)
const DigitalMediaArtTeam = getTeachers("DigitalMediaArtTeam")(Teachers)
const FilmPhotographyTeam = getTeachers("FilmPhotographyTeam")(Teachers)
const VisualCommunicationDesignTeam = getTeachers("VisualCommunicationDesignTeam")(Teachers)
const AnimationTeam = getTeachers("AnimationTeam")(Teachers)
export default {
    DigitalMediaTechnologyTeam,
    DigitalMediaArtTeam,
    FilmPhotographyTeam,
    VisualCommunicationDesignTeam,
    AnimationTeam
}
