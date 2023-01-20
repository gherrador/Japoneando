import { Navigate, Route, Routes } from 'react-router';
import { ModifyProduct, AdminContainer, AddProductContainer } from '../../components';
import { useSelector } from 'react-redux' 


export const PrivateRoute = () => {
    const userState = useSelector((state) => state.user.User)
    console.log(userState.admin)
    return (
        <>
            <Routes>
                
                {/*  Se realiza un condicional, para saber si, en primer instancia existe user
                 Luego es necesario saber si ese User tiene propiedad de Admin.
                 Para caso que posea propiedad de Admin, se podra dirigir al panel de Admin, 
                 caso contrario sera redirigido a la pagina principal
                 De esta manera queda protegida la ruta */}
                <Route path='/' element={userState.admin ? <AdminContainer/> : <Navigate to='/' replace/>}/>
                <Route path='/:id' element={userState.admin  ? <ModifyProduct /> : <Navigate to='/' replace />} />
                <Route path='/add' element={userState.admin ? <AddProductContainer /> : <Navigate to='/' replace />} />
                {/*  Para toda ruta que no este declarada sera redirigido a la pagina principal */}
                <Route path="*" element={<Navigate to='/' replace />} />
            </Routes>
        </>
    );
}

export default PrivateRoute;