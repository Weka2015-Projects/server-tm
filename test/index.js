'use strict'

require('co-mocha')
const app = require('../app.js')
const expect = require('chai').expect
const request = require('co-supertest').agent(app.listen())

describe('tests', () => {
  it ('does this', () => {
    console.log('Then this')
  })
})