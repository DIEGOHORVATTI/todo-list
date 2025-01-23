import * as trpc from '@trpc/server'
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express'

export const createContext = ({ req, res }: CreateExpressContextOptions) => ({ req, res })

export type Context = trpc.inferAsyncReturnType<typeof createContext>
