import Link from 'next/link'


const Post = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <strong>Avtor ID: {post.id}</strong><br />
            <Link href={'/'}>Back</Link>
        </div>
    );
}

export default Post