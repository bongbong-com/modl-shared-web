import { Schema, Document } from 'mongoose';
export interface IModlServer extends Document {
    _id: any;
    serverName: string;
    customDomain: string;
    databaseName?: string;
    adminEmail: string;
    emailVerified: boolean;
    emailVerificationToken?: string;
    provisioningStatus: 'pending' | 'in-progress' | 'completed' | 'failed';
    provisioningNotes?: string;
    provisioningSignInToken?: string;
    provisioningSignInTokenExpiresAt?: Date;
    plan: 'free' | 'premium';
    subscription_status: 'active' | 'canceled' | 'past_due' | 'inactive' | 'trialing' | 'incomplete' | 'incomplete_expired' | 'unpaid' | 'paused';
    current_period_end?: Date;
    stripe_customer_id?: string;
    stripe_subscription_id?: string;
    customDomain_override?: string;
    customDomain_status?: 'pending' | 'active' | 'error' | 'verifying';
    customDomain_lastChecked?: Date;
    customDomain_error?: string;
    customDomain_cloudflareId?: string;
    userCount: number;
    ticketCount: number;
    region?: string;
    lastActivityAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const ModlServerSchema: Schema<IModlServer, import("mongoose").Model<IModlServer, any, any, any, Document<unknown, any, IModlServer, any> & IModlServer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IModlServer, Document<unknown, {}, import("mongoose").FlatRecord<IModlServer>, {}> & import("mongoose").FlatRecord<IModlServer> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare const ModlServerModel: import("mongoose").Model<IModlServer, {}, {}, {}, Document<unknown, {}, IModlServer, {}> & IModlServer & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=ModlServerSchema.d.ts.map