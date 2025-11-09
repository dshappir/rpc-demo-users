import { z } from 'zod';

export const UserDataSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
});

export type UserData = z.infer<typeof UserDataSchema>;

export const UserSchema = UserDataSchema.extend({
    id: z.string(),
});

export type User = z.infer<typeof UserSchema>;
