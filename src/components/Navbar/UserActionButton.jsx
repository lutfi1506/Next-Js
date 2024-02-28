import Link from "next/link"
import authUserSession from "@/libs/auth-libs"


const UserActionButton = async() =>{
    const user = await authUserSession()
    const actionLabel = user?"Sign Out":"Sign In"
    const actionUrl = user?"/api/auth/signout":"/api/auth/signin"
    return(
        <div className="flex items-center gap-2">
            {user? <Link href="/users/dashboard" className="font-bold text-2xl sm:text-base sm:font-normal hover:text-color-secondary">Dashboard</Link>:null}
            <Link href={actionUrl} className="ms-auto py-2 px-4 bg-color-dark text-color-primary mx-2 rounded font-bold">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton