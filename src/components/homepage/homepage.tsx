import MenuButton from "../buttons/menuButton";
import { Wrapper } from "./homepage.Styles"


const Homepage = () => {

    
    
    return (
        <Wrapper>
            <MenuButton 
                to={'/SchedulingMenu'}
                text={'Schedules'}
            />
            <MenuButton 
                to={'/ShiftLogsMenu'}
                text={'Shift Logs'}
            />
            <MenuButton 
                to={'/IncidentReportsMenu'}
                text={'Incident Reports'}
            />
            <MenuButton 
                to={'/EmergencyContactsMenu'}
                text={'Emergency Contacts'}
            />
            <MenuButton 
                to={'/VolunteerDatabaseMenu'}
                text={'Volunteer Database'}
            />
        </Wrapper>
    )
}

export default Homepage;