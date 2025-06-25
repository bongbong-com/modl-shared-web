"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemLogModel = void 0;
const mongoose_1 = require("mongoose");
const SystemLogSchema = new mongoose_1.Schema({
    level: { type: String, required: true, enum: ['info', 'warning', 'error', 'critical'], index: true },
    message: { type: String, required: true, maxlength: 2000 },
    source: { type: String, required: true, index: true },
    metadata: { type: mongoose_1.Schema.Types.Mixed, default: {} },
    timestamp: { type: Date, default: Date.now, index: -1 },
    serverId: { type: String, index: true },
    category: { type: String, index: true },
    ipAddress: String,
    userAgent: String,
    userId: String,
    stackTrace: String,
    resolved: { type: Boolean, default: false, index: true },
    resolvedBy: String,
    resolvedAt: Date,
    tags: [{ type: String, index: true }]
}, {
    timestamps: false,
    collection: 'system_logs'
});
SystemLogSchema.index({ level: 1, timestamp: -1 });
SystemLogSchema.index({ source: 1, timestamp: -1 });
SystemLogSchema.index({ serverId: 1, timestamp: -1 });
SystemLogSchema.index({ resolved: 1, level: 1, timestamp: -1 });
SystemLogSchema.index({ message: 'text', source: 'text', category: 'text' });
SystemLogSchema.index({ timestamp: 1 }, { expireAfterSeconds: 90 * 24 * 60 * 60 });
exports.SystemLogModel = (0, mongoose_1.model)('SystemLog', SystemLogSchema);
//# sourceMappingURL=SystemLogSchema.js.map