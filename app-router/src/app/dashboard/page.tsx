import axios from "axios";

// export const dynamic = 'force-dynamic';
export const revalidate = 10;

const page = async ({}) => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    // const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //     next: { revalidate: 10 }
    // })
    // const data = await res.json();

     return (
         <div>{JSON.stringify(data)}</div>
     )
 }
 
 export default page;