import _ from 'lodash'
import validateUser from '../helpers/validation'

import users from '../models/users'

const createAccount = (req, res) => {
  const { error } = validateUser(req.body)

  if (error) {
    res.send({ status: 400, error: error.details[0].message })
    return
  }
  //    Checking if password and confirm-Password is the same
  if (req.body.password !== req.body.confirmPassword) {
    res.send({ status: 400, error: 'Your password should match confirm password' })
    return
  }
  //    Checking if the entered email does not exist
  let user = users.find(email => email.email === req.body.email)
  if (user) return res.send({ status: 400, error: 'The email is already registered' })

  user = {
    id: users.length + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  }
  users.push(user)
  res.send({ status: 200, data: _.pick(user, ['id', 'firstName', 'lastName', 'email']) })
}

export default createAccount
