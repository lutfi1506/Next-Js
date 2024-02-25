import Link from "next/link"
import authUserSession from "@/libs/auth-libs"


const UserActionButton = async() =>{
    const user = await authUserSession()
    const actionLabel = user?"Sign Out":"Sign In"
    const actionUrl = user?"/api/auth/signout":"/api/auth/signin"
    return(
        <div>
            {user? <Link href="/users/dashboard">Dashboard</Link>:null}
            <Link href={actionUrl} className="py-2 px-4 bg-color-dark text-color-primary mx-2 rounded font-bold">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton