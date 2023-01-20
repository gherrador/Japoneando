import './SignIn.css'
import { useForm } from 'react-hook-form'

export function SignIn({ back, Register }) {    
    const { register, handleSubmit } = useForm()
    return (
        <div className="Sign">
            <div className='my-4'>
                <h3>Wellcome to Japoneando</h3>
                <h5>Fill out the following form and be part of our community!</h5>
            </div>
            <form onSubmit={handleSubmit((e)=>Register(e))} id="formSign" className="my-5">
                <div className="form-group my-lg-3">
                    <label>Name</label>
                    <input
                        type="text" className="form-control" placeholder="Input your name"
                        {...register("name", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("This field can not be blank")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Surname</label>
                    <input
                        type="text" className="form-control" placeholder="Input your surname"
                        {...register("surname", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("This field can not be blank")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Phone</label>
                    <input
                        type="number" className="form-control" placeholder="Input your phone"
                        {...register("phone", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("This field can not be blank")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Username</label>
                    <input
                        type="text" className="form-control" placeholder="Input your username"
                        {...register("username", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("This field can not be blank")}
                        onInput={e => e.target.setCustomValidity('')}                      
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Password</label>
                    <input
                        type="password" className="form-control" placeholder="Input your password"
                        {...register("password", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("This field can not be blank")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Photo</label>
                    <input
                        type="file" className="form-control" placeholder="Input your photo"
                        {...register("photo", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("This field can not be blank")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>

                <div className="form-group my-lg-3">
                    <label>Email</label>
                    <input
                        type="email" className="form-control" placeholder="Input your email"
                        {...register("email", { required: true })}
                        onInvalid={e => e.target.setCustomValidity("You did not enter an email correctly")}
                        onInput={e => e.target.setCustomValidity('')}
                        required />
                </div>
                <div>
                    <button id='btnReg' type="submit" className="btn btn-success btn-lg btn-block my-3">Sign In</button>
                    <button onClick={back} id='btnBack' type="submit" className="btn btn-primary btn-lg btn-block my-3">Back to main</button>
                </div>

            </form>
        </div>
    )
}
