'use strict'

require('babel-polyfill')
const koa = require('koa')
const koaBody = require('koa-better-body')
const router = require('koa-router')()
const request = require('superagent')
const app = koa()
const port = process.env.PORT || 4000

router.get('/', function *(next){
  this.body = 'hello world'
})
app.use(router.routes())

app.listen(port, () => console.log('Listening on port ' + port))
