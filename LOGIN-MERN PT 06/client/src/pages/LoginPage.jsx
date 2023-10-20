import { useAuth } from "../context/AuthContext";

function LoginPage() {

const { register, handlesubmit, formState: { errors } } = useForm()
const { singin, errors: signinErrors } = useAuth();

const onSubmit = handlesubmit(async (data) => {
  singin(data);
})

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
      signinErrors.map((error, i) =>(
        <div className='bg-red-500 text-white p-2 my-2' key={i}>
          {error}
        </div>
      ))
    }
      <form onSubmit={onsubmit}>

        <input type="email" {...register("email", {required:true})} placeholder='email'
        className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

      {
        errors.email && <p className='text-red-500'>Email is Required</p>
      }

        <input type="password" {...register("password", {required:true})} placeholder='password'
        className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>

      {
        errors.password && <p className='text-red-500'>password is Required</p>
      }

        <button type="submit" className="bg-blue-500 hover:bg-slate-700 text-white font-bold py-2 px-4
        rounded">Login</button>
      </form>
    </div>
    </div>
  )
}

export default LoginPage