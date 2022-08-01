import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { SocialIcon } from 'react-social-icons';

export default function Login() {
  const { data: session } = useSession()

  // useEffect(() => {
  //   if(session.user.email){
      // saveUserInContext(session.user)
      // ליצור פונקציה וסטייט חדש בעגלת קונקנט שלתוכו תשלח הפרופ שבתנאי..וישמור בסטייט את המערך של העגלה
  //   }
  // }, [session])

  if (session) {
      return (
          <>
        Signed in as {session.user.email} <br />

        <button style={{borderRadius:"10px",width:"100%",marginRight:"20px",marginLeft:"20px"}} onClick={() => signOut()}>Sign out</button>
      </>
    )
}
  

  return (
    <>
    <div  style={{display:"flex",flexDirection:"row" ,gap:"15px",alignItems:"center",marginRight:"20px"}}>
        
          <p style={{textAlign:"center"}}>Sign in</p> <br />
          
          {/* <span ><button style={{borderRadius:"100%",padding:"0px",border:"1px black"}} onClick={() => signIn("google")}><SocialIcon url="https://google.com/jaketrent" style={{width:"40px",height:"40px"}}/></button></span> */}
          <span><button style={{borderRadius:"100%",padding:"0px",border:"1px black"}} onClick={() => signIn("github")}><SocialIcon url="https://github.com/jaketrent/react-social-icons/blob/master/LICENSE.md" style={{width:"40px",height:"40px"}}/></button></span>
          <span><button style={{borderRadius:"100%",padding:"0px",border:"1px black"}} onClick={() => signIn("facebook")}><SocialIcon url="https://facebook.com/jaketrent" style={{width:"40px",height:"40px"}}/></button></span>
    </div>
    </>
  )
}