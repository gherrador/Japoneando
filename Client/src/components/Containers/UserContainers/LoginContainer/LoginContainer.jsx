import { LogUser, LogIn } from '../../../'
import { useState } from 'react'
import './LoginContainer.css'
import { useNavigate } from 'react-router-dom';
import { alertLogOut, alertLoginSuccess } from "../../../../Utils"
import { useDispatch, useSelector } from "react-redux";
import { getProductsCart, logUser, logOut, getAllOrders, getUserLogin } from "../../../../features";
import { useEffect } from 'react';

export function LoginContainer() {

  const [display, setDisplay] = useState('none')
  const dispatch = useDispatch()
  const userState = useSelector(state => state.user)


  useEffect(() => {
    dispatch(getUserLogin())
      .then(() => dispatch(getProductsCart()))
      .then(() => dispatch(getAllOrders()))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const navigate = useNavigate();

  const PopUp = (e) => {
    userState.User === "" && document.getElementById('formLog').reset()
    e.preventDefault()
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }
  const Login = async (data) => {
    await dispatch(logUser(data))
      .then((resp) => alertLoginSuccess(resp))
      .then(() => dispatch(getProductsCart()))
      .then(() => dispatch(getAllOrders()))
      .then(setDisplay('none'))
  }

  const registerUser = () => {
    navigate("/signin")
    setDisplay('none')
  }

  const close = async () => {
    dispatch(logOut())
      .then(alertLogOut(userState.User))
      .then(setDisplay('none'))
      .finally(() => dispatch(getProductsCart()))
  }

  return (
    <div>
      <LogUser PopUp={PopUp} User={userState.User} />
      <div className="PopUp" style={{ display: display === 'none' ? 'none' : 'flex' }}>
        <LogIn onSubmit={Login} Register={registerUser} User={userState.User} closeSession={close} />
      </div>
    </div>
  )
}

