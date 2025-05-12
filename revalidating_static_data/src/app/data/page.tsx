interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

/**
 *
 */
async function getPosts(): Promise<IPost[]> {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "force-cache"
    })
    const data = await request.json()
    return data as IPost[]
}

/**
 * This component will be statically be rendered since we are using fetch cache: "force-cache"
 * But since the data here might change in the future like there is a new post the new data will not be reflected
 * only the data during the build time will be reflected.
 *
 * We can fix that by calling revalidatePath('/data') this will purge the data that is being used in the /data route
 * then the next time you go there a new statically rendered page will be rendered with the latest data.
 * This approach is called on demand revalidation we can also do Time-base revalidation
 * Sample Revalidate at most every hour
 * fetch('https://...', { next: { revalidate: 3600 } })
 */
export default async function Page() {
    const data = await getPosts()
    return (
        <ul>
            { data.map((post) => (<li key={post.id}>{post.title}</li>)) }
        </ul>
    )
}