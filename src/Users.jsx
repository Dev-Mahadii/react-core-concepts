import { use } from "react"

export default function Users({fetchUsers}){
    const userContents = use(fetchUsers);
    console.log(userContents);
    return(
        <div className="card-border">
            <h3>Users: {userContents.length}</h3>
        </div>
    )
}