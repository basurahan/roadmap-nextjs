//import { connection } from 'next/server'

/**
* During rendering, if a Dynamic API or a fetch option of { cache: 'no-store' } 
* is discovered, Next.js will switch to dynamically rendering the whole route.
*/
export default async function Page() {
    //await connection() // this is a dynamic api
    return (
        <div>This is dynamically rendered at {Date.now().toLocaleString()}</div>
    )
}

// if you dont use any dyanmic api in your page but still want to dynamically render it then we can do this
export const dynamic = 'force-dynamic'