const express = require('express');
const router = express.Router();
const data=require('../data.json').projects;

router.get("/", (req, res) => {
    res.render('index',{ data });
  });

 router.get("/about", (req, res) => {
   res.render('about');
});
    
    
// route to display one of the selected projects
router.get("/projects/:projectId", (req, res, next) => {
  const projectId = parseInt(req.params.projectId);
  const projectLength = data.length;

  if (projectId > projectLength) {
    const err = new Error(`Project: ${projectId} - Not Found`);
    err.status = 404;
    console.log(err);
    res.render("projectError", { project: err });
    next(err);
  } else {
    res.render("project", { project: data[projectId] });
  }
});

module.exports = router;
