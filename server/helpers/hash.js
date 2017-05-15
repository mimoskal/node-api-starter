import bcrypt from 'bcrypt';

const hash = {
    /**
     Given a string, resolves to the string's hashed value.
     */
    make: str => {
        console.log(str);
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {

                if (err) {
                    return reject(err);
                }

                // Generate the hash with random salt
                bcrypt.hash(str, salt, (err, hash) => {
                    if (err) {
                        return reject(err);
                    }

                    // Hash generated successfully!
                    return resolve(hash);
                });
            });
        });
    },

    /**
     Given a string and a bcrypt hash, resolves if str matches the given hash
     */
    compare: (str, hash) => {
        return new Promise((resolve, reject) =>
            bcrypt.compare(str, hash, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return result ? resolve() : reject();
            })
        );
    }
};

export default hash;