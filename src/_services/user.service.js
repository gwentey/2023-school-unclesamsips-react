import Axios from './caller.service'

let getAllUsers = () => {
    return Axios.get('/users')
}

let getUser = (uid) => {
    return Axios.get('/users/' + uid)
}

let updateUser = (user) => {
    return Axios.patch('/users/' + user.id, user)
}

export const userService = {
    getAllUsers, getUser, updateUser
}