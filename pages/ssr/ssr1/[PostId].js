import axios from 'axios';
import React from 'react';
import DynamicAllPost from '@/Components/ssr/ssr1/DynamicAllPost';

export default function index({ data, post }) {
    const {title, body} = post;

    return ( 
    <>
        <div className="card w-100 mx-10 bg-base-100 shadow-xl my-20">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
            </div>
        </div>

        <div className="flex flex-wrap gap-5 my-20 mx-auto justify-center">
        {
            data.map((p) => <DynamicAllPost key={p.id} post={p}></DynamicAllPost>)
        }
      </div>
    </>
  )
}

export async function getServerSideProps({params}) {
    let data;
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        data = response.data;
    })

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
        data,
        post
      },
    };
}