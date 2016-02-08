'use strict'

require('babel-polyfill') // lets us use es6 stuff
const koa = require('koa')
const Router = require('koa-resource-router')
const koaBody = require('koa-better-body')
const path = require('path')
const knex = require('koa-knex')

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

const products = new Router('products', {
  // GET /products
  index: function *(next) {
    const res = yield this.knex.raw('SELECT * FROM products') // select all products direct with knex
    this.body = res.rows // just grab the part of the returned results we need
    this.status = 200 // set status to ok
  }
})

app.use(products.middleware())