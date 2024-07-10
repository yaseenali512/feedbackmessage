import {z} from 'zod'

export const AccepptMessageSchema = z.object({
    acceptMessages: z.boolean(),
})