import axios from 'axios';

const PostId = ({post}) => {
    const {title, body} = post;

    return (
        <div className="card w-100 mx-10 bg-base-100 shadow-xl my-20">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default PostId;

export async function getServerSideProps({ params }) {

    let post;
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
    .then((response) => {
        post = response.data;
    })
    .catch(function (error) {
        console.log(error);
        post = { 
            "title": "Did Not find Post",
            "body": "Sorry"
          }
    })
    .finally(function () {
        // always executed
    });

    return {
      props: {
        post,
      },
    };
}

