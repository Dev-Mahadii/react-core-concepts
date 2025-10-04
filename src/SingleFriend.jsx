export default function SingleFriend({friend}){
    console.log(friend)
    const {name, email} = friend;
    return(
        <div className="card-border">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}