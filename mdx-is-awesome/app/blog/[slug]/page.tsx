import { FC } from 'react'
import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        slug: string
    }
}

async function getDocFromParams(slug: string) {
    const doc = allDocs.find((doc) => doc.slugAsParams === slug)

    if (!doc) notFound()

    return doc
}

const page = async ({ params }: PageProps) => {
    const doc = await getDocFromParams(params.slug)

    // return <div><Mdx code={doc.body.code} /></div>
    return <div>{JSON.stringify(doc)}</div>
}

export default page;