import { Metadata } from "next";

interface PageProps {
   params: {
    postId: string
   } 
}

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export async function generateMetadata ({ params }: PageProps): Promise<Metadata> {
    const rest = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await rest.json() as Post

    return {
        title: data.title
    }
}

// export async function generateStaticParams() {
//     const posts = ['post-one', 'post-two']

//     return posts.map((post) => ({
//         postId: post
//     }))
// }

const page = async(props: any) => {

    // db fetchcing

    return (
        <div>hello</div>
    )
}

export default page;