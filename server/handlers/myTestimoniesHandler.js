const dbhandler = require('./dbHandler')
myTestimoniesHandler = {}

myTestimoniesHandler.getMyTestimonies = (mail) => dbhandler.findDoucuments('testimonies',mail)


// myTestimoniesHandler.addTestimony = (testimony) => dbhandler.addDoucument('testimonies',testimony)


module.exports = myTestimoniesHandler