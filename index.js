'use strict'

require('babel-polyfill') // lets us use es6 stuff
const koa = require('koa')
const Resource = require('koa-resource-router')
const koaBody = require('koa-better-body')
const path = require('path')
const knex = require('koa-knex')

const port = process.env.PORT || 4000
const app = module.exports = koa() // export koa app for testing

const dbName = `arcane_products_development`

// connect to knex

app.use(knex({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    port     : '5432',
    database : dbName
  },
  searchPath: 'public'
}))

const products = new Resource('products', {
  // GET /products
  index: function *(next) {
    this.body = yield { products: this.knex('products')}
  }
})

app.use(products.middleware())

app.listen(port, () => console.log('Listening on port ' + port))
