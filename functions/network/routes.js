import blogRouter from '../routes/blog/network.js'

export const blogRoutes = (app) => {
    app.use(`/blog`, blogRouter)
}