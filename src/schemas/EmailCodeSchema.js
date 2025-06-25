"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailCodeModel = void 0;
const mongoose_1 = require("mongoose");
const EmailCodeSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    code: {
        type: String,
        required: true,
        length: 6
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expireAfterSeconds: 0 }
    },
    used: {
        type: Boolean,
        default: false,
        index: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: false,
    collection: 'email_codes'
});
EmailCodeSchema.index({ email: 1, used: 1 });
EmailCodeSchema.index({ code: 1, used: 1 });
exports.EmailCodeModel = (0, mongoose_1.model)('EmailCode', EmailCodeSchema);
//# sourceMappingURL=EmailCodeSchema.js.map