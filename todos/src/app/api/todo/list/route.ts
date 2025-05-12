import postgres from "postgres"

const sql = postgres(process.env.POSTGRES_URL!, {
    ssl: "allow",
})

export async function GET() {
    const todos = await sql`SELECT * FROM todos`
    return Response.json(todos)
}