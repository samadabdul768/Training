import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
function FormPage() {
  // hi
  return (
    <div className="bg-white flex flex-col justify-center items-center h-96 w-80 rounded-4xl">
      <h1 className= {` ${inter.className}mb-5 text-2xl font`}>Sign In With</h1>
      <form>
        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <label className="flex flex-col">Username</label>
            <input type="text" placeholder="Username"  className="border-2"/>
          </div>
          <div>
            <label className="flex flex-col">Password</label>
            <input type="password" placeholder="Password" className="border-2"/>
          </div>
          <button className="bg-black color-white text-white w-full rounded-2xl">Sign In</button>
        </div>
      </form>
    </div>
  );
}
export default FormPage;
