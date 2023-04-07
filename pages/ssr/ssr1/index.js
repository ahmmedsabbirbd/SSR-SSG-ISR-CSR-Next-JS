import axios from 'axios';
import React from 'react';
import AllPost from '@/Components/ssr/ssr1/AllPost';

export default function index({ data }) {

  return (
    <div className="flex flex-wrap gap-5 my-20 mx-auto justify-center">
      {
          data.map((p) => <AllPost key={p.id} post={p}></AllPost>)
      }
    </div> 
  )
}

export async function getServerSideProps() {
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