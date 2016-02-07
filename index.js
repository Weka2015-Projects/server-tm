'use strict'

const koa = require('koa')
const koaBody = require('koa-better-body')
const router = require('koa-router')()
const request = require('superagent')
const app = koa()
// const port = process.env.PORT || 4000
// const server = require('http').createServer(app.callback()).listen(port)


router.get('/', function *(next){
  this.body = 'hello world'
})
app.use(router.routes())

app.listen(5000, () => console.log('Listening on port 5000'))
