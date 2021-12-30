import MenuButton from "../buttons/menuButton";
import { Wrapper } from "./homepage.Styles"


const Homepage = () => {

    
    
    return (
        <Wrapper>
            <MenuButton 
                to={'/schedules'}
                text={'Schedules'}
            />
            <MenuButton 
                to={'/shiftLogs'}
                text={'Shift Logs'}
            />
            <MenuButton 
                to={'/incidentReports'}
                text={'Incident Reports'}
            />
            <MenuButton 
                to={'/'}
                text={'MenuButton'}
            />
            <MenuButton 
                to={'/'}
                text={'MenuButton'}
            />
        </Wrapper>
    )
}

export default Homepage;