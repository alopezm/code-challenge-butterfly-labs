import { Link } from 'react-router-dom'
import { CREATE_USER_PATH } from '../constants'
import { useUsers } from '../hooks/useUsers'

export function MainView() {
    const {users, isLoading, error } = useUsers()
    
    function renderTable() {
        if(error) {
            return error
        }
    
        if(isLoading) {
            return 'Loading...'
        }

        return (
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Sex</th>
                </tr>
                {users.map(({ id, name, email, dateOfBirth, sex }) => (
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{dateOfBirth}</td>
                        <td>{sex}</td>
                    </tr>
                ))}
            </table>
        )
    }

    return (
        <>
            <Link to={CREATE_USER_PATH}>Create User</Link>
            {renderTable()}
        </>
    )
}