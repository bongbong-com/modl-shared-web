"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUserModel = void 0;
const mongoose_1 = require("mongoose");
const AdminUserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    loggedInIps: [{
            type: String,
            trim: true
        }],
    lastActivityAt: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: false,
    collection: 'admin_users'
});
AdminUserSchema.index({ lastActivityAt: -1 });
exports.AdminUserModel = (0, mongoose_1.model)('AdminUser', AdminUserSchema);
//# sourceMappingURL=AdminUserSchema.js.map