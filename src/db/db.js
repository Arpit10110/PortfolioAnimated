import mongoose from 'mongoose'
import dns from 'dns'

dns.setServers(['8.8.8.8', '1.1.1.1'])

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'Blog_Generator',
    })
    console.log('Connected to MongoDB Successfully')
  } catch (err) {
    console.log('Error connecting to MongoDB', err)
    throw err
  }
}
