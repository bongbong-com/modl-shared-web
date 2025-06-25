"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModlServerModel = exports.ModlServerSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ModlServerSchema = new mongoose_1.Schema({
    serverName: { type: String, required: true, unique: true, trim: true },
    customDomain: { type: String, required: true, unique: true, trim: true },
    adminEmail: { type: String, required: true, lowercase: true, trim: true },
    databaseName: { type: String, sparse: true },
    emailVerified: { type: Boolean, default: false, index: true },
    emailVerificationToken: { type: String, unique: true, sparse: true },
    provisioningStatus: { type: String, enum: ['pending', 'in-progress', 'completed', 'failed'], default: 'pending', index: true },
    provisioningNotes: { type: String },
    provisioningSignInToken: { type: String, unique: true, sparse: true },
    provisioningSignInTokenExpiresAt: { type: Date },
    plan: { type: String, enum: ['free', 'premium'], default: 'free', index: true },
    subscription_status: { type: String, enum: ['active', 'canceled', 'past_due', 'inactive', 'trialing', 'incomplete', 'incomplete_expired', 'unpaid', 'paused'], default: 'inactive', index: true },
    current_period_end: { type: Date, sparse: true },
    stripe_customer_id: { type: String, unique: true, sparse: true },
    stripe_subscription_id: { type: String, unique: true, sparse: true },
    customDomain_override: { type: String, unique: true, sparse: true },
    customDomain_status: { type: String, enum: ['pending', 'active', 'error', 'verifying'], sparse: true },
    customDomain_lastChecked: { type: Date, sparse: true },
    customDomain_error: { type: String, sparse: true },
    customDomain_cloudflareId: { type: String, unique: true, sparse: true },
    userCount: { type: Number, default: 0 },
    ticketCount: { type: Number, default: 0 },
    region: { type: String, trim: true, sparse: true },
    lastActivityAt: { type: Date, sparse: true },
    createdAt: { type: Date, default: Date.now, index: true },
    updatedAt: { type: Date, default: Date.now }
}, {
    timestamps: true,
    collection: 'servers'
});
exports.ModlServerSchema.index({ adminEmail: 1 });
exports.ModlServerSchema.index({ plan: 1, subscription_status: 1 });
exports.ModlServerSchema.index({ provisioningStatus: 1, emailVerified: 1 });
exports.ModlServerSchema.index({ serverName: 'text', customDomain: 'text', adminEmail: 'text' });
exports.ModlServerModel = (0, mongoose_1.model)('ModlServer', exports.ModlServerSchema);
//# sourceMappingURL=ModlServerSchema.js.map