import mongoose, { ConnectOptions } from 'mongoose'

mongoose.set('debug', true)

export const mongooseConnect = async () => {
  mongoose
    .connect(
      process.env.MONGO_URI as string,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      } as ConnectOptions
    )
    .then((result: any) => {
      if (result.STATES['1']) {
        console.log(`Connected to Mongo -  ${process.env.PORT}`)
      } else {
        console.error
      }
    })
    .catch(err => console.error(err))
}
