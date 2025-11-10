import { z } from 'zod';

export const UserDataSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
});

export type UserDataType = z.infer<typeof UserDataSchema>;

export const UserSchema = UserDataSchema.extend({
    id: z.string(),
});

export type UserType = z.infer<typeof UserSchema>;
