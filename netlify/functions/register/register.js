import Joi from 'joi'
import md5 from 'md5'
import axios from 'axios'
const apiUrl = process.env.VITE_HASURA_ENDPOINT;
const hasura = process.env.VITE_X_HASURA_ADMIN_SECRET;

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
            username:Joi.string().required(),
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

        const {username, email, password} = value; 
        // response.body = JSON.stringify({username:username, email:email, password:password})
        // return response


        const alreadyExists = await axios({
            method:"POST",
                url:apiUrl,
                headers:{
                    "content-type":"application/json",
                    "x-hasura-admin-secret":hasura
                },
                data:{
                    query:`
                    query getUserByEmail {
                        users(where: {email: {_eq:"${email}"}}) {
                            id
                        }
                    }
                `
                }
        })
        console.log('Alreadyexists: ', alreadyExists.data.data)
        const exists = alreadyExists.data.data.users.length > 0

        if (exists) {
            response.statusCode = 401
            response.body = 'That email is already registered with us, please log in to your account.'
            return response
        }

        const passwordHash = md5('789gGtHyJkSuI'+password)

        // const createQuery = `
        //             mutation MyMutation {
        //                 insert_users_one(object: {email: "${email}", password: "${passwordHash}", username: "${username}", role: "commenter"})
        //             }
        //             `

        const createUser = await axios({
            method:"POST",
            url:apiUrl,
            headers:{
                "content-type":"application/json",
                "x-hasura-admin-secret":hasura
            },
            data:{
                query:`
                mutation MyMutation {
                    insert_users_one(object: {email: "${email}", password: "${passwordHash}", username: "${username}", role: "commenter"}) {
                        id
                    }
                }
                `
            }
        })

        if(createUser.data.data) {
            console.log('CreateUser: ', createUser.data.data.insert_users_one)
            response.body = JSON.stringify({
                id:  createUser.data.data.insert_users_one.id
            })
            return response
        }
        else if (createUser.data.errors) {
            console.log(createUser.data.errors)
            response.statusCode = 401
            response.body = 'Sorry! That username is already taken, please try again.'
            return response
        }
        

        return response


    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }
  
  module.exports = { handler }