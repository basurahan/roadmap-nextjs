"use server"

import postgres from "postgres"
import { revalidatePath } from "next/cache"
import { TodoSchema } from "@/app/lib/schemas/todo"

const sql = postgres(process.env.POSTGRES_URL!, {
    ssl: "allow",
})

export async function createTodo(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
    const parse = TodoSchema.safeParse({
        text: formData.get("text")
    })

    if (!parse.success) {
        return { message: "Failed to create todo" }
    }

    const data = parse.data

    try {
        await sql`
            INSERT INTO todos (text)
            VALUES (${data.text})
        `;

        revalidatePath("/")
        return { message: `Added todo ${data.text}` }
    } catch {
        return { message: "Failed to create todo" }
    }
}