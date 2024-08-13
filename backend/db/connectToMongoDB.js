import mongoose from 'mongoose'

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://aniyeshu:aniyeshu@chatapp.mokxyas.mongodb.net/chatapp'
    )
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message)
  }
}

export default connectToMongoDB
