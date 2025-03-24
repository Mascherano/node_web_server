const { envs } = require('./config/env');
const { starServer, startServer } = require('./server/server');

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//Función agnóstica autoinvocada
//Agnóstica por que no tiene nombre
//Autoconvocada porque la ejecutamos con los parentesis
(async () => {
    main()
}) ()

