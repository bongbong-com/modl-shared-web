import { Document } from 'mongoose';
export interface IAdminUser extends Document {
    email: string;
    loggedInIps: string[];
    lastActivityAt: Date;
    createdAt: Date;
}
export declare const AdminUserModel: import("mongoose").Model<IAdminUser, {}, {}, {}, Document<unknown, {}, IAdminUser, {}> & IAdminUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=AdminUserSchema.d.ts.map