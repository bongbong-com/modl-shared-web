import { Document } from 'mongoose';
export interface ISystemLog extends Document {
    level: 'info' | 'warning' | 'error' | 'critical';
    message: string;
    source: string;
    metadata: Record<string, any>;
    timestamp: Date;
    serverId?: string;
    category?: string;
    ipAddress?: string;
    userAgent?: string;
    userId?: string;
    stackTrace?: string;
    resolved?: boolean;
    resolvedBy?: string;
    resolvedAt?: Date;
    tags?: string[];
}
export declare const SystemLogModel: import("mongoose").Model<ISystemLog, {}, {}, {}, Document<unknown, {}, ISystemLog, {}> & ISystemLog & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=SystemLogSchema.d.ts.map