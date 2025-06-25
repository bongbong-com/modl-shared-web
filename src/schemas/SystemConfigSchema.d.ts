import { Document } from 'mongoose';
export interface ISystemConfig extends Document {
    configId: string;
    general: {
        systemName: string;
        adminEmail: string;
        timezone: string;
        defaultLanguage: string;
        maintenanceMode: boolean;
        maintenanceMessage: string;
    };
    security: {
        sessionTimeout: number;
        maxLoginAttempts: number;
        lockoutDuration: number;
        requireTwoFactor: boolean;
        passwordMinLength: number;
        passwordRequireSpecial: boolean;
        ipWhitelist: string[];
        corsOrigins: string[];
    };
    notifications: {
        emailNotifications: boolean;
        criticalAlerts: boolean;
        weeklyReports: boolean;
        maintenanceAlerts: boolean;
        slackWebhook?: string;
        discordWebhook?: string;
    };
    performance: {
        cacheTtl: number;
        rateLimitRequests: number;
        rateLimitWindow: number;
        databaseConnectionPool: number;
        enableCompression: boolean;
        enableCaching: boolean;
    };
    features: {
        analyticsEnabled: boolean;
        auditLoggingEnabled: boolean;
        apiAccessEnabled: boolean;
        bulkOperationsEnabled: boolean;
        advancedFiltering: boolean;
        realTimeUpdates: boolean;
    };
}
export declare const SystemConfigModel: import("mongoose").Model<ISystemConfig, {}, {}, {}, Document<unknown, {}, ISystemConfig, {}> & ISystemConfig & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
//# sourceMappingURL=SystemConfigSchema.d.ts.map