import Link from "next/link";

const AllPost = ({post}) => {
    const {id, title, body} = post;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary" href={`ssr1/`+id}>Read More</Link>
                </div>
            </div>
        </div>
    );
};

export default AllPost;