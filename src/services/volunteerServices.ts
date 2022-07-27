import axios, { AxiosResponse } from 'axios';
import Volunteer from '../model/volunteer';
import {fire} from '../firebaseConfig'
import volunteer from '../model/volunteer';


//firebase APIs to database
// const baseURL = 'https://us-central1-lof-backend.cloudfunctions.net/api'
const baseURL = process.env.REACT_APP_BASE_URL
//create user tokens for backend auth? i think
const createToken = async () => {
    const user = fire.auth().currentUser;
    const token = user && (await user.getIdToken());

    const payloadHeader = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return payloadHeader
}


//create new volunteer, send to db, and get new volunteer back - FIX ANY
export const createNewVolunteer = async(volunteer: Volunteer): Promise<any> => {
    const header = await createToken()

    const payload = {
        volunteer
    }

    try{
        const res = axios.post(`${baseURL}/Volunteers`, payload, header)
        console.log('header:', header)
        return (await res).data
    } catch(e) {
        console.error(e)
    }

}

//Get all volunteers
export function fetchVolunteers(): Promise<Volunteer[]> {
    return axios.get(`${baseURL}/Volunteers`)
}

export function fetchExistingVolunteerAndSetUser(token: string): Promise<any> {
    console.log('fetchvolfunctest')
    try{
        return axios.post(`${baseURL}/volunteerDB/tokenAuth`, token).then((res) => {
            console.log('FERes.data:', res.data)
            return res.data
        })
    } catch (e: any){
        console.log('error', e, typeof(e))
        return e
    }
}
