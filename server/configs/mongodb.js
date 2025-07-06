import mongoose from "mongoose";

// Connect to the MongoDB database
const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    await mongoose.connect(`mongodb+srv://devtyagi230402:devtyagi12@cluster0.ezw6zce.mongodb.net/`)

}

export default connectDB
