import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css'

const WorkExperience = () =>{
    return (
        <>
<div className='vertical'>
<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#fff', color: '#1c2237'}}
    contentArrowStyle={{ borderRight: '7px solid  #1c2237' }}
    date={"08/2021 - present"}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon = {<img src={require('./FPT.png').default} className='image' />}
  >
    <h3 className="vertical-timeline-element-title">Associate Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">FPT Software, Danang, Vietnam</h4>
    <p>
    <ul>
        <li className = "list-item">Engage with business and technical subject matter experts throughout sprint to achieve desired goals via working as a team</li>
        <li className = "list-item">Be responsible for reviewing code and assessing the impacts of committed changes</li>
        <li className = "list-item">Conduct code peer review with other team members</li>
        <li className = "list-item">Work closely with others to refine debugging methods</li>
    </ul></p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#1c2237', color: '#fff' }}
    date="06/2021 – 08/2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon = {<img src={require('./FPT.png').default} className='image' />}
  >
    <h3 className="vertical-timeline-element-title">Microsoft Power Platform Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">FPT Software, Danang, Vietnam</h4>
    <p>
    <ul>
        <li className = "list-item">Implement and leverage the power of Microsoft Power Platform</li>
        <li className = "list-item">Successfully create 5+ customized business solutions along with UI/UX design that meet business requirements and optimize user experience</li>
        <li className = "list-item">Work closely with other 4 team members to come up with practical business solution for taking part in Microsoft Power Platform Hackathon</li>
    </ul>
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
</>
)}
export default WorkExperience