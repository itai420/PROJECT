const dbhandler = require('./dbHandler')
homeHandler = {}

homeHandler.getQuotes = (filter) => dbhandler.findQuotes('testimonies',filter)

module.exports = homeHandler