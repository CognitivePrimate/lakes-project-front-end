import axios, { AxiosResponse } from 'axios';
import Volunteer from '../../model/volunteer';
import {fire} from '../../firebaseConfig'


//firebase APIs to database
const baseUrl = 'https://us-central1-lof-backend.cloudfunctions.net/api'

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
        const res = axios.post(`${baseUrl}/Volunteers`, payload, header)
        console.log('header:', header)
        return (await res).data
    } catch(e) {
        console.error(e)
    }

}

//Get all volunteers
export function fetchVolunteers(): Promise<Volunteer[]> {
    return axios.get(`${baseUrl}/Volunteers`)
}
