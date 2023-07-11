import Joi from 'joi'
import md5 from 'md5'
import axios from 'axios'
const apiUrl = process.env.VITE_HASURA_ENDPOINT;
const hasura = process.env.VITE_X_HASURA_ADMIN_SECRET;
import {generateJwtToken} from '../../modules/auth'

const handler = async (event) => {
  const response = {statusCode: 200, body: ''}
  console.log('setting response default: ', response)

  try {
    
    if (event.httpMethod !== 'POST') {
      response.statusCode = 405
      response.body = 'Method Not Allowed'
      return response
    }
    const schema = Joi.object({
      email:Joi.string().email({minDomainSegments: 2}),
      password:Joi.string().required(),
    })

    const {error, value} = schema.validate(JSON.parse(event.body))
    console.log(value)
    if (error) {
      response.statusCode = 400
      response.body = error.toString()
      return response
    }

    const {email, password} = value;

    const login = await axios({
      method:"POST",
      url:apiUrl,
      headers:{
        "content-type":"application/json",
        "x-hasura-admin-secret":hasura
    },
      data:{
        query:`
        query MyQuery {
          users(where: {email: {_eq: "${email}"}}) {
            email
            first_name
            id
            last_name
            role
            username
            password
          }
        }
      `
      }
    })

    console.log('Login: ', login.data.data.users)

    if(login.data.data.users.length == 0) {
      response.statusCode = 401
      response.body = 'Invalid email given, please check your details and try again.'
      return response
    }

    const user = login.data.data.users[0]
    console.log('password: ', md5('789gGtHyJkSuI' + password))
    console.log(user.password)
    const match = md5('789gGtHyJkSuI' + password) === user.password
    console.log('match?', match)
    if(!match) {
      response.statusCode = 401
      response.body = 'Invalid password, please check your details and try again.'
      return response
    }

    const jwt_token = generateJwtToken(user);
    console.log(jwt_token)
    const hour = 3600000;
    const twoWeeks = 14*24*hour;

    user.token = jwt_token
    response.body = JSON.stringify({
      user:user
    })
   return response

  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
