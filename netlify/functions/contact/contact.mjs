import Joi from 'joi'
import axios from 'axios'

const emailServiceId = process.env.VITE_EMAIL_SERVICE_ID
const emailUserId = process.env.VITE_EMAIL_USER_ID
const emailPrivateKey = process.env.VITE_EMAIL_PRIVATE_KEY
const contactedTemplate = process.env.VITE_EMAIL_CONTACTED_TEMPLATE_ID
const replyTemplate = process.env.VITE_EMAIL_REPLY_TEMPLATE_ID

// send two emails using email js here.  First send me the ocntact details. 
// If that works, send the confirmation to the client

const handler = async (event) => {
    const response = {statusCode: 200, body: ''}
    console.log('setting response default: ', response)

    try {
        if (event.httpMethod !== 'POST') {
            response.statusCode = 200
            response.body = 'Method Not Allowed'
            return response
        }

        const schema = Joi.object({
            title:Joi.string().required(),
            name:Joi.string().required(),
            email:Joi.string().email({minDomainSegments: 2}),
            message:Joi.string().required(),
        })

        const {error, value} = schema.validate(JSON.parse(event.body))
        console.log(value)
        if (error) {
            console.log('schema vlaidation error')
            response.statusCode = 401
            response.body = error.toString()
            return response
        }

        const {title, name, email, message} = value; 

        // send 'contacted message to me


        var data = {
            service_id: emailServiceId,
            template_id: contactedTemplate,
            user_id: process.env.VITE_EMAIL_USER_ID,
            accessToken: emailPrivateKey,
            template_params: {
                title: title,
                name: name,
                email: email,
                message: message
            },
            
        }

        console.log('data for request set: ', data)

        const result = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
            headers: {"content-type":"application/json"},
        }).catch(e => console.error(e))

        console.log('Contacted Email Response: ', result)
        response.body = result.statusText
        return response


    } catch (error) {
        return { statusCode: 200, body: error.toString() }
      }
}

module.exports = { handler }