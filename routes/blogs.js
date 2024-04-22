const router = require("express").Router();
const blogs = require("../models/blogs")

//Post
router.post("/post", async (req, res) => {
    try {
        const {  title,description} = req.body;
        const newPost = new blogs({ title, description });
        await newPost.save()
            .then(() => res.status(200).json({
                message: "Data saved successfully"
            }));

    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        });
    }
});

//Get
router.get("/getAll", async (req, res) => {
    try {
        const data = await blogs.find().sort({ createdAt: -1});
        res.status(200).json({ "data": data });

    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        });
    }
});

//Get recent Blogs
router.get("/getRecentBlogs", async (req, res) => {
    try {
        const data = await blogs.find().sort({ createdAt: -1}).limit(3);
        res.status(200).json({ "data": data });

    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        });
    }
});

//Get Blog by id
router.get("/getBlog/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const data = await blogs.findById(id);
        res.status(200).json({ "data": data });

    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        });
    }
});

//update by id
router.put("/updateBlog/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const { title, description} = req.body
        await blogs.findByIdAndUpdate(id, { title, description});
        res.status(200).json({ message: "Data updated successfully" });

    } catch (error) {
        res.status(400).json({
            message: "Some error has occured"
        });
    }
});

module.exports = router;