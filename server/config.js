let env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        //mongodb connection settings
        db: {
            host:   '127.0.0.1',
            port:   '27017',
            name:     'testdb'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        },
        api: {
            port: '8080',
            secret: 'test'
        }
    },
    production: {
        //mongodb connection settings
        db: {
            host:   '127.0.0.1',
            port:   '27017',
            name:     'testdb'
        },
        //server details
        server: {
            host: '127.0.0.1',
            port: '3000'
        },
        api: {
            port: '8080',
            secret: 'test'
        }
    }
};

export default config[env];