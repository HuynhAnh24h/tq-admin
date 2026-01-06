import {z} from "zod"

export const AddProductSchema = z.object({
    name: z.string().min(6, "Tên ít nhất 6 ký tự")
})