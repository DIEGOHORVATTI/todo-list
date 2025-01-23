import { z } from 'zod'
import { router, publicProcedure } from '../trpc'
import { createUploadsService } from '@/modules/uploads/createUploads/service'
import { getUploadService } from '@/modules/uploads/getOneUpload/service'
import { deleteUploadService } from '@/modules/uploads/removeUpload/service'

const FileSchema = z.object({
  fieldname: z.string(),
  originalname: z.string(),
  encoding: z.string(),
  mimetype: z.string(),
  destination: z.string(),
  filename: z.string(),
  path: z.string(),
  size: z.number()
})

export const uploadRouter = router({
  create: publicProcedure.input(z.object({ files: z.array(FileSchema) })).mutation(async ({ input }) => {
    return await createUploadsService({ files: input.files as Express.Multer.File[] })
  }),

  getOne: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {
    return await getUploadService(input)
  }),

  delete: publicProcedure.input(z.object({ id: z.string() })).mutation(async ({ input }) => {
    return await deleteUploadService(input)
  })
})
