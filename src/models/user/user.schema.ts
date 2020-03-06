import mongoose, { Schema } from 'mongoose';
import IUser from './user.model';

const UserSchema: Schema = new Schema(
	{
		id: { type: String },
		userName: { type: String },
	},
	{ timestamps: { createdAt: 'created_at' , updatedAt: 'updated_at' }}
);

export default mongoose.model<IUser>('User', UserSchema);
