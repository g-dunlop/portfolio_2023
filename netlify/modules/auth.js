import jwt from 'jsonwebtoken'

export const generateJwtToken = function(user) {
    console.log('auth.js: ', user)
    const fields = ['id', 'email', 'role'];
    const JWT_TOKEN_EXPIRES = 60*24*1;
    const HASURA_GRAPHQL_JWT_SECRET = process.env.VITE_X_HASURA_JWT_SECRET

    let custom_claims = {};
    fields.forEach(user_field => {
        custom_claims['x-hasura-' + user_field.replace('_', '-')] = user[user_field].toString();
    });

    return jwt.sign({
        'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles':['commenter'],
            'x-hasura-default-role':'commenter',
            'x-hasura-role':'commenter',
            'x-hasura-user-id': user.id.toString(),
            ...custom_claims,
        },
    }, HASURA_GRAPHQL_JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: `${JWT_TOKEN_EXPIRES}m`
    });
}