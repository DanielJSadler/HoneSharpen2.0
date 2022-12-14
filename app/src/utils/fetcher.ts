import React from "react"

export const useFetchData = <TData, TVariables>(
    query: string,
    options?: RequestInit['headers']
  ): ((variables?: TVariables) => Promise<TData>) => {

    return async (variables?: TVariables) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API ?? 'http://localhost:80'}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(options ?? {})
        },
        body: JSON.stringify({
          query,
          variables
        })
      })

      const json = await res.json()

      if (json.errors) {
        const { message } = json.errors[0] || 'Error..'
        throw new Error(message)
      }

      return json.data
    }
  }