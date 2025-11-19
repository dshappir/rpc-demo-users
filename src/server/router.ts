import { os } from '@orpc/server';
import { z } from 'zod';
import { getAllUsers, addUser, streamUsers } from './db.js';
import { UserSchema, UserDataSchema } from './types.js';

export const router = {
    users: {
        getAll: os.output(z.array(UserSchema)).handler(getAllUsers),
        add: os
            .input(UserDataSchema)
            .output(UserSchema)
            .handler(({ input }) => addUser(input)),
        stream: os.handler(streamUsers),
    },
};

export type RouterType = typeof router;
