const dbhandler = require('./dbHandler')
pendingTestimoniesHandler = {}

pendingTestimoniesHandler.changeTestimonieStatus = (id,change) => dbhandler.changeTestimonieStatus("testimonies",id,{"Approved":change})

module.exports = pendingTestimoniesHandler