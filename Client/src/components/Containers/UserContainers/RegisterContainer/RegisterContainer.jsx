import { SignIn } from '../../../'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../../api';
import { registerSuccessAlert, registerErrorAlert } from '../../../../Utils';


export function RegisterContainer() {
    const navigate = useNavigate();

    const back = () => {
        navigate('/')
    }

    const RegisterUser = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('surname', data.surname)
        formData.append('phone', data.phone)
        formData.append('username', data.username)
        formData.append('password', data.password)
        formData.append('photo', data.photo[0])
        formData.append('email', data.email)
        await registerUser(formData)
        .then(() => registerSuccessAlert())
        .then(() => navigate('/'))
        .catch(() =>registerErrorAlert())
        document.getElementById("formSign").reset()
    }

    return (
        <div>
            <SignIn back={back} Register={RegisterUser} />
        </div>
    )
}
