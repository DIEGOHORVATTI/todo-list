import { Schema } from 'mongoose'
import { z } from 'zod'

import { mongoConnection } from '@/shared/connection-db'

import { setDefaultSettingsSchema } from '@/shared'
import { collectionsData } from '@/config'

export const BoardSchema = z.object({
  name: z.string(),
  ordered: z.array(z.string()),
  columnIds: z.array(z.string())
})
export type IKanbanBoard = Omit<DocumentSchemaZod<typeof BoardSchema>, 'columnIds' | 'usersIds'>

type KanbanBoardDto = IKanbanBoard & { columnIds: Array<Schema.Types.ObjectId> }

const SchemaModel = new Schema<KanbanBoardDto>(
  {
    columnIds: { type: [{ type: Schema.Types.ObjectId, ref: collectionsData.KanbanColumn.name }], required: true },
    ordered: { type: [String], required: true },
    name: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: collectionsData.KanbanBoard.collection
  }
)

setDefaultSettingsSchema(SchemaModel)

export const KanbanBoard = mongoConnection.model<KanbanBoardDto>(collectionsData.KanbanBoard.name, SchemaModel)
