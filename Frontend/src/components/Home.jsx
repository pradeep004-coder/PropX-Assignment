import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='h-screen w-full flex justify-center'>
      <div className='h-full w-full md:w-sm bg-zinc-100 shadow-md mt-auto p-4 flex flex-col gap-4'>
        <div className='mt-auto'>
          <h2 className='text-2xl font-bold'>Welcome to PopX</h2>
          <p className='text-zinc-500'>
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit,
          </p>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <Link to="/signup" className="bg-purple-800 text-zinc-100 rounded-md py-2 font-bold text-center">
            Create Account
          </Link>
          <Link to="/login" className="bg-purple-300 rounded-md py-2 font-semibold text-center">
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Home;