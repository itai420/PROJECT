const dbhandler = require('./dbHandler')
myTestimoniesHandler = {}

myTestimoniesHandler.getMyTestimonies = (mail) => dbhandler.findDoucuments('testimonies',mail)




module.exports = myTestimoniesHandler