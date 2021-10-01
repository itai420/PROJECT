const dbhandler = require('./dbHandler')
authinticationHandler = {}
authinticationHandler.byMailOrName = async (userName, userMail) => {
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
authinticationHandler.addUser = user => dbhandler.addDoucument('users', user)

authinticationHandler.IsExist = async (userName, userPassword) => {
    const exist = await dbhandler.findDoucument('users', { $and: [{ name: userName }, { password: userPassword }] })
    if (exist) return ("ok")
    return "no"
}
authinticationHandler.findUserBy = (filter) => {
    return dbhandler.findDoucument('users', filter)
}

authinticationHandler.findDoucumentById = (id) => {
    return dbhandler.findDoucumentById('users', id)
}


module.exports = authinticationHandler