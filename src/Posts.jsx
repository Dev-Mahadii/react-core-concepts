import { use } from "react"
import PostSingle from "./PostSingle";

export default function Posts({postPromise}){

    const posts = use(postPromise);
    console.log(posts);

    return(
        <div className="card-border">
            <h2>All posts are here: {posts.length}</h2>
            {
                posts.map(post => <PostSingle post={post}></PostSingle>)
            }
        </div>
    )
}