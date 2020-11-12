export default{
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/ductuan',
    JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
    PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb'
}