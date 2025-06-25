import { Connection } from "mongoose";

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
    details?: any;
}
export interface AdminUser {
    _id: string;
    email: string;
    username: string;
    role: 'Super Admin' | 'Admin' | 'Moderator' | 'Helper';
    loggedInIps: string[];
    lastActivityAt: Date;
    createdAt: Date;
}
export interface StaffMember {
    _id: string;
    email: string;
    username: string;
    role: 'Super Admin' | 'Admin' | 'Moderator' | 'Helper';
    createdAt: string;
    status: 'Active' | 'Pending Invitation';
}
export interface Invitation {
    _id: string;
    email: string;
    role: 'Admin' | 'Moderator' | 'Helper';
    token: string;
    expiresAt: Date;
    status: 'pending' | 'accepted';
}
export interface EmailCode {
    email: string;
    code: string;
    expiresAt: Date;
    used: boolean;
    createdAt: Date;
}
declare module 'express-session' {
    interface SessionData {
        userId?: string;
        email?: string;
        username?: string;
        role?: 'Super Admin' | 'Admin' | 'Moderator' | 'Helper';
        isAuthenticated?: boolean;
    }
}
declare global {
    namespace Express {
        interface Request {
            adminUser?: AdminUser;
            currentUser?: {
                userId: string;
                email: string;
                username: string;
                role: 'Super Admin' | 'Admin' | 'Moderator' | 'Helper';
            };
            serverDbConnection?: Connection;
        }
    }
}
export interface Player {
    _id: string;
    minecraftUuid: string;
    usernames: {
        username: string;
        date: Date;
    }[];
    notes: {
        text: string;
        date: Date;
        issuerName: string;
        issuerId?: string;
    }[];
    ipList: {
        ipAddress: string;
        country?: string;
        region?: string;
        asn?: string;
        firstLogin: Date;
        logins: Date[];
    }[];
    punishments: any[];
    status: 'Active' | 'Warned' | 'Banned';
    lastOnline: string;
}
export interface Ticket {
    id: string;
    type: 'bug' | 'player' | 'chat' | 'appeal' | 'staff' | 'support';
    subject: string;
    reportedBy: string;
    date: string;
    status: 'Unfinished' | 'Open' | 'Closed';
    priority: 'Critical' | 'Medium' | 'Low' | 'Fixed';
    locked?: boolean;
}
export interface KnowledgebaseCategory {
    id: string;
    name: string;
    slug: string;
    description?: string;
    ordinal: number;
    articles: KnowledgebaseArticleStub[];
}
export interface KnowledgebaseArticleStub {
    id: string;
    title: string;
    slug: string;
    ordinal: number;
    is_visible: boolean;
    categoryId: string;
}
export interface KnowledgebaseArticle extends KnowledgebaseArticleStub {
    content: string;
    category: {
        id: string;
        name: string;
        slug: string;
    };
    created_at: string;
    updated_at: string;
}
export interface HomepageCard {
    id: string;
    title: string;
    description: string;
    icon: string;
    icon_color?: string;
    action_type: 'url' | 'category_dropdown';
    action_url?: string;
    action_button_text?: string;
    category_id?: string;
    background_color?: string;
    is_enabled: boolean;
    ordinal: number;
    category?: KnowledgebaseCategory;
}
export interface SystemLog {
    _id: string;
    level: 'info' | 'warning' | 'error' | 'critical';
    message: string;
    source: string;
    category?: string;
    timestamp: string;
    metadata?: Record<string, any>;
    resolved?: boolean;
    resolvedBy?: string;
    resolvedAt?: string;
}
export interface AuditLog {
    user: string;
    userType: string;
    actionType: 'staff' | 'ai' | 'system' | 'admin';
    action: string;
    detail: string;
    viewText: string;
    time: string;
    color: 'primary' | 'secondary' | 'info' | 'warning';
}
export interface WindowPosition {
    x: number | string;
    y: number | string;
}
export interface Window {
    id: string;
    title: string;
    isOpen: boolean;
    position: WindowPosition;
    size: {
        width: number;
        height: number;
    };
}
export interface WindowState {
    windows: Record<string, Window>;
}
export interface Registration {
    email: string;
    serverName: string;
    customDomain: string;
    plan: 'free' | 'premium';
    agreeTerms: boolean;
}
export interface InsertServer {
    adminEmail: string;
    serverName: string;
    customDomain: string;
    plan: 'free' | 'premium';
    emailVerificationToken?: string;
    emailVerified?: boolean;
}
export type Server = InsertServer & {
    id: string;
};
//# sourceMappingURL=index.d.ts.map