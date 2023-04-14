"use client"
import {useSession, signOut, signIn} from "next-auth/react"

const Main = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      Signed in as {session.user.name} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <div className=' min-w-screen flex flex-col justify-start items-center'>

      <h1 className='text-5xl font-[500] text-center w-2/4 mt-20 leading-snug'>Find people who love to listen to the songs you do as well. </h1>
    <button onClick={() => signIn('spotify')} className='bg-[#61FF53] px-7 py-4 rounded-md mt-14 font-[600] text-xl'>Sign up with Spotify</button>

    </div>
  )
}

export default Main 
