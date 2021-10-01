const dbhandler = require('./dbHandler')
homeHandler = {}

homeHandler.getQuotes = () => dbhandler.getAllQuotes('testimonies')

module.exports = homeHandler