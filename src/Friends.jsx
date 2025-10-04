import { use } from "react"
import SingleFriend from "./SingleFriend";

export default function Friends({friendPromise}){
    const friends = use(friendPromise);
    console.log(friends);
    return(
        <div className="card-border">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <SingleFriend friend={friend}></SingleFriend>)
            }
        </div>
    )
}