import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { TaskSchema } from '@/models/KanbanTask';
import { createTasksService } from '@/modules/tasks/createTasks/service';
import { getAllTasksService } from '@/modules/tasks/getAllTasks/service';
import { getOneTaskService } from '@/modules/tasks/getOneTask/service';
import { updateTaskService } from '@/modules/tasks/updateTasks/service';
import { deleteBoardService as deleteTaskService } from '@/modules/tasks/removeTasks/service';

export const taskRouter = router({
  getAll: publicProcedure
    .query(async () => {
      return await getAllTasksService();
    }),

  getOne: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await getOneTaskService(input.id);
    }),

  create: publicProcedure
    .input(TaskSchema)
    .mutation(async ({ input }) => {
      return await createTasksService(input);
    }),

  update: publicProcedure
    .input(TaskSchema.extend({ 
      id: z.string(),
      userName: z.string()
    }))
    .mutation(async ({ input }) => {
      return await updateTaskService(input);
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      return await deleteTaskService(input);
    })
});