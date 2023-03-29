const { graphConfig } = require('../graphing/config')
const IDEAL_BLIP_WIDTH = 22
const Blip = function (name, ring, isNew, topic, description) {
  let self, number, isGroup

  self = {}
  number = -1
  isGroup = false

  self.width = IDEAL_BLIP_WIDTH

  self.name = function () {
    return name
  }

  self.groupBlipWidth = function () {
    return isNew ? graphConfig.newPillBlipWidth : graphConfig.noChangePillBlipWidth
  }

  self.topic = function () {
    return topic || ''
  }

  self.description = function () {
    return description || ''
  }

  self.isNew = function () {
    return isNew
  }

  self.isGroup = function () {
    return isGroup
  }

  self.ring = function () {
    return ring
  }

  self.number = function () {
    return number
  }

  self.setNumber = function (newNumber) {
    number = newNumber
  }

  self.setIsGroup = function (value) {
    isGroup = value
  }

  return self
}

module.exports = Blip
