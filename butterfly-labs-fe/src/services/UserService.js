import axios from "axios";
import { USERS_PATH } from '../constants'

export class UserService {
    static async create({ name, email, dateOfBirth, sex }) {
        try {
            const response = await axios.post(USERS_PATH, {
            name,
            email,
            dateOfBirth,
            sex,
            });
            const { data } = response

            return {data}
        } catch( error) {
            return { error: 'Error creating the user, please try again!' }   
        }
    }

    static async list() {
        try { 
            const response = await axios.get(USERS_PATH);
            const { data } = response
            return { data: data ?? [] }
        } catch (error) {
            return { data: [], error: 'Error fetching the users, please try again!'}
        }
    }
}