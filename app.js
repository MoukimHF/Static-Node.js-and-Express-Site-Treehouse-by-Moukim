const express = require("express");
const app = express();
const router = require('./routes');
app.use('/static',express.static('public'));
app.set('view engine','pug');
app.use(router);

app.use((req,res,next)=>{
	const err=new Error('oh noooo!');
	res.locals.error=err;
	err.status = 404;
	res.render('error');
	next(err);
	});
	
app.listen(3000,(req,res)=>{
	console.log('listening');

});