const Browser = require('zombie')
const assert = require('assert')

const app = require('../helloworld')

const site = 'http://localhost:3000'

describe('main page', function()  {

  before(function() {
    this.browser = new Browser({ site })
  })

  before(function(done) {
    this.browser.visit('/', done)
  })

  it('should say hello world', function () {
    assert.ok(this.browser.success)
    assert.equal(this.browser.text(), "Hello World")
  })
})
