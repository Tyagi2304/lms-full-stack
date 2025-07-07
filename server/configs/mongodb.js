import mongoose from "mongoose";

// Connect to the MongoDB database
const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    await mongoose.connect(`mongodb+srv://devtyagi230402:devtyagi230402@cluster0.croikqi.mongodb.net/`)

}

export default connectDB
