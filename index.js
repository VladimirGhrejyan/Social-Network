const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const cors = require('cors')
const authRoutes = require('./routes/auth.routes')
const cloudRoutes = require('./routes/cloud.routes')
const userRoutes = require('./routes/user.routes')
const PORT = config.get('port') || 5000
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoutes)
app.use('/api/cloud', cloudRoutes)
app.use('/api/user', userRoutes)

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        app.listen(PORT, () => console.log(`App has been started on ${PORT} port`))

    } catch (e) {
        console.log('Server error', e.message)
        process.exit()
    }
}

start()