import e from "express";
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.routes.js"
import commentRouter from "./routes/comment.routes.js"
import connectDB from "./lib/connectDB.js";


const app = e();

app.use(e.json())
app.use((error,req,res,next)=> {

    res.status(error.status || 500)

    res.json(
        {
            message : error.message || "Somthing went wrong",
            status : error.status,
            stack:error.stack
        }
    )
})

app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/comments',commentRouter)



app.listen(3000,() => {
    connectDB()
    console.log('server is runnig !')
})