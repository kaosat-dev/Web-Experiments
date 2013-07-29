'use strict';

HelloWorld = require('../../src/index')

describe "HelloWorld", ()->
	it "hello() should say hello when called", ()->
    	expect(HelloWorld.sayHello()).toEqual("hi world")

describe "HelloWorld2", ()->
	it "hello() should say hello when called", ()->
    	expect(HelloWorld.sayHello()).toEqual("hiyaaa")
