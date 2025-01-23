import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useState } from 'react'
import { trpc } from './utils/trpc.tsx'

export default function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:8001/trpc'
        })
      ]
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Kanban Board</h1>
          <BoardList />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

function BoardList() {
  const boards = trpc.board.getAll.useQuery()

  if (boards.isLoading) {
    return <div>Loading boards...</div>
  }

  return (
    <div>
      {boards.data?.map(board => (
        <div key={board.id}>
          <h2>{board.name}</h2>
        </div>
      ))}
    </div>
  )
}
