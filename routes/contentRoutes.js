const mongoose = require('mongoose')
const Category = mongoose.model("category")
const User = mongoose.model("users");
const ShareKnowledgeForm = mongoose.model("shareKnowledgeForm")
const requireLogin = require('../middleware/requireLogin')

module.exports = app => {
    app.post('/api/content/createCategory',requireLogin, async (req, res) => {
        const { categoryName, categoryDescription, imagePath } = req.body
        await new Category({
            categoryName,
            categoryDescription,
            imagePath,
            createdDate: Date.now(),
            lastUpdatedDate: Date.now()

        }).save().then(result => {
            res.status(200).json({
                status: true,
                message: `${result.categoryName} successfully added into categories`
            })
        })
            .catch(error => {
                res.status(400).json({
                    status: false,
                    message: error
                })
            });
    })

    app.get('/api/content/getCategory', async (req, res) => {
        await Category.find({}).then(result => {
            res.status(200).json({
                status: "passed",
                message: result
            })
        })
            .catch(err => {
                res.status(500).json({
                    status: "failed",
                    message: err
                })
            })
    })

    app.put('/api/content/category',requireLogin, async (req, res) => {
        var query = { '_id': req.query.categoryId};
        const { imagePath, categoryName, categoryDescription } = req.body
        await Category.findByIdAndUpdate(query, {imagePath, categoryName, categoryDescription}, {useFindAndModify:false}).then(result=>{
            res.status(202).json({
                status: true,
                message: "Updated successfully"
            })
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })
            })
        
    })
    app.delete('/api/content/deleteCategory',requireLogin, async (req, res) => {
        var query = { '_id': req.query.categoryId};
        await Category.findByIdAndRemove(query, {useFindAndModify:false}).then(result=>{
            res.status(202).json({
                status: true,
                message: "Deleted successfully"
            })
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })
            })
        
    })

    app.put('/api/content/editShareKnowledge',requireLogin, async (req, res) => {
        var query = { '_id': req.query.contentId};
        const { status } = req.body
        await ShareKnowledgeForm.findByIdAndUpdate(query, {status}, {useFindAndModify:false}).then(result=>{
            res.status(202).json({
                status: true,
                message: "Updated successfully"
            })
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })
            })
        
    })

    app.delete('/api/content/deleteShareKnowledge',requireLogin, async (req, res) => {
        var query = { '_id': req.query.contentId};
        await ShareKnowledgeForm.findByIdAndRemove(query, {useFindAndModify:false}).then(result=>{
            res.status(202).json({
                status: true,
                message: "Deleted successfully"
            })
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })
            })
        
    })


    app.post('/api/content/createShareKnowledge', requireLogin, async (req, res) => {
        const { title, type, category, link, description, image } = req.body
        await new ShareKnowledgeForm({
            title,
            type,
            category,
            link,
            imagePath:image,
            description,
            _user: req.user.id,
            createdDate: Date.now(),
            lastUpdatedDate: Date.now()
        }).save().then(result => {
            res.status(200).json({
                status: true,
                message: "Your knowledge is successfully saved"
            })
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })
            })
    })

    app.get('/api/content/getUserContent', async (req, res) => {
        if(req.query.status=='published'){
            await ShareKnowledgeForm.find({status: req.query.status, _user:req.query.userId }).then(result => {
                res.status(200).json({
                    status: true,
                    message: result
                })
            })
                .catch(err => {
                    res.status(500).json({
                        status: false,
                        message: err
                    })
                })
        }
        else{
            await ShareKnowledgeForm.find({_user:req.query.userId }).then(result => {
                res.status(200).json({
                    status: true,
                    message: result
                })
            })
                .catch(err => {
                    res.status(500).json({
                        status: false,
                        message: err
                    })
                })
        }
        
    })
    app.get('/api/content/latestshareKnowledge', async (req, res) => {
        await ShareKnowledgeForm.find({status: 'published'}).populate('_user').limit(4).sort('-_id').then(result => {
            res.status(200).json({
                status: true,
                message: result
            })
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })
            })
    })
    app.get('/api/content/getShareKnowledge', async (req, res) => {
        if(req.query.status==="pending" && req.query.category==='all'){
            await ShareKnowledgeForm.find({status: req.query.status}).populate('_user').then(result => {
                res.status(200).json({
                    status: true,
                    message: result
                })
            })
                .catch(err => {
                    res.status(500).json({
                        status: false,
                        message: err
                    })
                })
        }
        else if(req.query.status==="published" && req.query.category==='all'){
            await ShareKnowledgeForm.find({status: req.query.status}).populate('_user').then(result => {
                res.status(200).json({
                    status: true,
                    message: result
                })
            })
                .catch(err => {
                    res.status(500).json({
                        status: false,
                        message: err
                    })
                })
        }
        else{
            await ShareKnowledgeForm.find({ category: req.query.category, type: req.query.type, status:req.query.status }).populate('_user').then(result => {
                res.status(200).json({
                    status: true,
                    message: result
                })
            })
                .catch(err => {
                    res.status(500).json({
                        status: false,
                        message: err
                    })
                })
        }
        
    })

    app.get('/api/content/stats', async (req, res) => {
        var content, contributors, views, categories;
        await ShareKnowledgeForm.countDocuments({status:"published"}).then(result=>{
            content=result
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })                   
        }) 
        await Category.countDocuments().then(result=>{
            categories=result
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })                   
        })

        await User.countDocuments().then(result=>{
            contributors=result
        })
            .catch(err => {
                res.status(500).json({
                    status: false,
                    message: err
                })                   
        })
    
        res.status(200).json({
            status: true,
            message: {"content":content,"contributors":contributors,"categories":categories}
            
        })
    })
    
}