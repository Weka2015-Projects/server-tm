'use strict'

import 'babel-polyfill'
const koa = require('koa')
const koaBody = require('koa-better-body')
const router = require('koa-router')()
const request = require('superagent')
const app = koa()



router.get('/', function *(next){
  this.body = 'hello world'
})
app.use(router.routes())

app.listen(5000, () => console.log('Listening on port 5000'))
