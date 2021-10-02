const dbhandler = require('./dbHandler')
authenticationHandler = {}
authenticationHandler.byMailOrName = async (userName, userMail) => {
    console.log(userName)
    // const isNameExist = await dbhandler.findDoucument('users', { name: userName })
    // const isEmailExist = await dbhandler.findDoucument('users', { email: userMail })
    // if (isNameExist) {
    //     console.log("name is taken")
    //     return "name"
    // }
    // if (isEmailExist) {
    //     console.log("email is taken")
    //     return "email"
    // }
    return dbhandler.findDoucument('users',{$or:[{name:userName},{email:userMail}]})

}
authenticationHandler.addUser = user => dbhandler.addDoucument('users', user)

authenticationHandler.IsExist = async (userName, userPassword) => {
    const exist = await dbhandler.findDoucument('users', { $and: [{ name: userName }, { password: userPassword }] })
    if (exist) return ("ok")
    return "no"
}
authenticationHandler.findUserBy = (filter) => {
    return dbhandler.findDoucument('users', filter)
}

authenticationHandler.findDoucumentById = (id) => {
    return dbhandler.findDoucumentById('users', id)
}


module.exports = authenticationHandler