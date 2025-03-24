//require('dotenv').config();
import env from 'dotenv'
import  envvar from 'env-var'
//const { get } = require('env-var');

env.config();

export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

//Exportar función de forma antigua
// module.exports = {
//     envs
// }