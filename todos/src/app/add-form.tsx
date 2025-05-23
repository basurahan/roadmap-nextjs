"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { createTodo } from "@/app/actions"

const initialState = {
  message: "",
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  )
}

export function AddForm() {
    const [state, formAction] = useActionState(createTodo, initialState);

    return (
        <form action={formAction}>
            <label htmlFor="todo">Enter Task: </label>
            <input type="text" id="todo" name="text"  />
            <SubmitButton />
            <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
            </p>
        </form>
    )
}