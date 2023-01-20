import './LogIn.css'
import { useForm } from 'react-hook-form'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

export const LogIn = ({ onSubmit, User, closeSession, Register }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      {User ?
        <div className="Loged">
            <Card id='infoUser'>
              <Card.Img id='fotoLog' variant="top" src={User.photo} />
              <ListGroup className="list-group-flush">
                <ListGroupItem>Username:{User.username}</ListGroupItem>
                <ListGroupItem>Email:{User.email}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Button id='btnLoged' onClick={closeSession}>Sign Off</Button>
              </Card.Body>
            </Card>
        </div>
        :
        <div className="LogIn">
          <form id='formLog' onSubmit={handleSubmit(onSubmit)}>
            <br />
            <span>Username</span>
            <div>
              <input {...register("username", { required: true })}
                onInvalid={e => e.target.setCustomValidity("this field can not be blank")}
                onInput={e => e.target.setCustomValidity('')}
                required
                placeholder='Input your username'
              />
            </div>
            <span>Password</span>
            <div>
              <input type="password" {...register("password", { required: true })}
                onInvalid={e => e.target.setCustomValidity("this field can not be blank")}
                onInput={e => e.target.setCustomValidity('')}
                required
                placeholder='Input your password'
              />
            </div>
            <button id='btnLog' className='btn btn-success' variant='primary'>Login</button>
            <br />
            <div>
              <br />
              <span className='text-center'>Don't have your account yet? Sign up Free</span>
            </div>
            <div>
              <Button id='Reg' variant='primary' onClick={(e) => Register(e)}>Sign Up</Button>
            </div>
          </form>
        </div>
      }
    </div>
  );

};

