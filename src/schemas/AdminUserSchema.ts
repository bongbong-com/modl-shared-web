import { Schema, model, Document } from 'mongoose';

export interface IAdminUser extends Document {
  email: string;
  username: string;
  role: 'Super Admin' | 'Admin' | 'Moderator' | 'Helper';
  loggedInIps: string[];
  lastActivityAt: Date;
  createdAt: Date;
}

const AdminUserSchema = new Schema<IAdminUser>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  username: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ['Super Admin', 'Admin', 'Moderator', 'Helper'], default: 'Admin' },
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

export const AdminUserModel = model<IAdminUser>('AdminUser', AdminUserSchema); 