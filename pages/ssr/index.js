import Post from "@/Components/ssr/Post";
import axios from "axios";

export default function ServerSideRendered({ data }) {
    return (
      <div className="flex flex-wrap gap-5 my-20 mx-auto justify-center">
        {
            data.map((p) => <Post key={p.id} post={p}></Post>)
        }
      </div>
    );
  }
  
export async function getServerSideProps() {
    const nunu = "kire";

    let data;
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        data = response.data;
    })

    return {
      props: {
        data
      },
    };
}