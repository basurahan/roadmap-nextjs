interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

/**
 * fetch can also be a factor that the page will be dynamically rendered or statically rendered
 * | Header               | Explanation                                              |
 * |----------------------|----------------------------------------------------------|
 * | cache: "no-store"    | automatically the compoentn will be dynamically rendered |
 * | cache: not specified | automatically the component will be statically rendered  |
 * | cache: "force-cache" | automatically the component will be statically rendered  |
 */
async function getPosts(): Promise<IPost[]> {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await request.json()
    return data as IPost[]
}

export default async function Page() {
    const data = await getPosts()
    return (
        <ul>
            { data.map((post) => (<li key={post.id}>{post.title}</li>)) }
        </ul>
    )
}