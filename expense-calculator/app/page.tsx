
import "./globals.css"
export default function Home() {

  function submit(){
    
  }
  return (

    <form action="submit.py"  method="get" className="flex flex-col gap-4 w-96 h-72 p-10">
      <input type="text" placeholder="Username" name="username" className="p-2 rounded-sm border border-black focus:outline-none" />
      <input type="password" placeholder="Password" name="password" className="p-2 rounded-sm border border-black focus:outline-none" />
      <input type="button" value={"Login"} className="flex bg-rose-500 text-white items-center justify-center p-1 text-lg rounded-sm" />

    </form>

  );
}
