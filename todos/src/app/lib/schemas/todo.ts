import { z } from 'zod'

export const TodoSchema = z.object({
    id: z.number().optional(),
    text: z.string().min(1)
})
export const TodoListSchema = z.array(TodoSchema)

export type ITodo = z.infer<typeof TodoSchema>
export type ITodoList = z.infer<typeof TodoListSchema>