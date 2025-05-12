import {revalidatePath} from "next/cache";

export default async function Page() {
    async function updateData() {
        'use server'
        revalidatePath('/data')
    }

    return (
        <div>
            <button className={`bg-amber-900`} onClick={updateData}>Update data</button>
        </div>
    )
}