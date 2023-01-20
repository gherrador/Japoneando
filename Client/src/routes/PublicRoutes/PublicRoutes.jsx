import {Navigate, Route, Routes } from 'react-router';
import  { Cart, OrderDetailContainer, OrderListContainer, ItemDetailContainer, ItemListContainer, RegisterContainer }  from '../../components' 
import { EndBuy, OrderFail, PageNotFound } from '../../components/';
import { useSelector } from 'react-redux';

export const PublicRoutes = () => {    
    const User = useSelector(state => state.user.User)
    return (
        <Routes>
            <Route path='/' element={<ItemListContainer greetings={'Wellcome to my Japan Store'} />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/category/:id' element={<ItemListContainer greetings={'Welcome to Japan Store'} />} />            
            <Route path='/cart' element={!User.username? <Navigate to='/' replace /> :<Cart />}/>
            <Route path='/endbuy' element={<EndBuy />} />
            <Route path='/failorder' element={<OrderFail/>} />
            <Route path='/signin' element={<RegisterContainer />} />
            <Route path='/list/:id' element={<OrderDetailContainer />} />
            <Route path='/orders' element={User=== '' ? <Navigate to='/' replace />:<OrderListContainer/>} />
            <Route path='/*' element={<PageNotFound />} />

        </Routes>
    )
}

