import { Schema, model, Document } from 'mongoose';

// This combines fields from both modl-admin and modl-panel definitions.
export interface IModlServer extends Document {
  // Core Identifiers
  _id: any; // Mongoose will add this
  serverName: string;
  customDomain: string; // The subdomain used for routing
  databaseName?: string;

  // Admin & Verification
  adminEmail: string;
  emailVerified: boolean;
  emailVerificationToken?: string;

  // Provisioning & Status
  provisioningStatus: 'pending' | 'in-progress' | 'completed' | 'failed';
  provisioningNotes?: string;
  provisioningSignInToken?: string;
  provisioningSignInTokenExpiresAt?: Date;

  // Plan & Billing
  plan: 'free' | 'premium';
  subscription_status: 'active' | 'canceled' | 'past_due' | 'inactive' | 'trialing' | 'incomplete' | 'incomplete_expired' | 'unpaid' | 'paused';
  current_period_end?: Date;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;

  // Custom Domain
  customDomain_override?: string;
  customDomain_status?: 'pending' | 'active' | 'error' | 'verifying';
  customDomain_lastChecked?: Date;
  customDomain_error?: string;
  customDomain_cloudflareId?: string;
  
  // Analytics/Stats from modl-admin
  userCount: number;
  ticketCount: number;
  region?: string;
  lastActivityAt?: Date;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

export const ModlServerSchema = new Schema<IModlServer>({
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

// Indexes for common queries
ModlServerSchema.index({ adminEmail: 1 });
ModlServerSchema.index({ plan: 1, subscription_status: 1 });
ModlServerSchema.index({ provisioningStatus: 1, emailVerified: 1 });
ModlServerSchema.index({ serverName: 'text', customDomain: 'text', adminEmail: 'text' });

export const ModlServerModel = model<IModlServer>('ModlServer', ModlServerSchema); 