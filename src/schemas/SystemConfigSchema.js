"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemConfigModel = void 0;
const mongoose_1 = require("mongoose");
const SystemConfigSchema = new mongoose_1.Schema({
    configId: { type: String, required: true, unique: true, default: 'main_config' },
    general: { type: Object, required: true },
    security: { type: Object, required: true },
    notifications: { type: Object, required: true },
    performance: { type: Object, required: true },
    features: { type: Object, required: true }
}, {
    timestamps: true,
    collection: 'system_configs'
});
exports.SystemConfigModel = (0, mongoose_1.model)('SystemConfig', SystemConfigSchema);
//# sourceMappingURL=SystemConfigSchema.js.map