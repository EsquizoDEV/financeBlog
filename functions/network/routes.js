import blogRouter from '../routes/blog/network.js'

const version = "api/v1"

export const blogRoutes = (app) => {
    app.use(`/${version}/blogs`, blogRouter)
}