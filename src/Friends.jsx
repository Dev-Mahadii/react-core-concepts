import { use } from "react"

export default function Friends({friendPromise}){
    const friends = use(friendPromise);
    console.log(friends);
    return(
        <div className="card-border">
            <h3>Friends: {friends.length}</h3>
        </div>
    )
}