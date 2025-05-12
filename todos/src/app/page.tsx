import { TodoListSchema } from "@/app/lib/schemas/todo"
import { AddForm } from "@/app/add-form"

export default async function Page() {
    const request = await fetch("http://localhost:3000/api/todo/list", { cache: "force-cache" })
    const json = await request.json()
    const data = TodoListSchema.parse(json)
    return (
        <div>
            <ul>
                {
                    data.map((item) => (<li key={item.id}>{ item.text }</li>))
                }
            </ul>
            <AddForm />
        </div>
    )
}