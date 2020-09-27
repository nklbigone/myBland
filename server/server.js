import '@babel/polyfill'
import express from "express"
import mongoose from "mongoose"
import contactRoute from './scr/routes/contacts'
import blogRoute from './scr/routes/blogs'
import articleRoute from './scr/routes/articles'
import queryRoute from './scr/routes/query'
import {upload} from './scr/utils/imageUpload'
import passport from'passport'
import dotenv from 'dotenv'

dotenv.config()

//loading passpot

const app = express()
  require('./scr/config/passport').default(passport)
const {  NODE_ENV, URL, MONGO_URI_TEST} = process.env
mongoose.connect(NODE_ENV === 'test'? MONGO_URI_TEST:URL, { useNewUrlParser: true })
	const con = mongoose.connection
	
	con.on('open', () => {

		console.log('Connected...')
	})

	//bodyparser

app.use(express.urlencoded({extended: false }));

  // passport middleware
  app.use(passport.initialize());


	app.use(express.json())
	app.use(upload.single("blogPicture"))
	app.use('/queries', queryRoute)
	app.use('/contacts', contactRoute)
	app.use('/blogs', blogRoute)
	app.use('/articles', articleRoute)

	// app.use('/', require('./routes/index'))
	app.use('/users', require('./scr/routes/users'))
	app.listen(6000, () => {
		console.log('Server started')
	})

export default app