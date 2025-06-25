import { Document } from 'mongoose';
export interface IEmailCode extends Document {
    email: string;
    code: string;
    expiresAt: Date;
    used: boolean;
    createdAt: Date;
}
export declare const EmailCodeModel: import("mongoose").Model<IEmailCode, {}, {}, {}, Document<unknown, {}, IEmailCode, {}> & IEmailCode & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=EmailCodeSchema.d.ts.map