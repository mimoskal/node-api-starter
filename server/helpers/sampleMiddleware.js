export default (options) => {
    return (req, res, next) => {
        res.test = () => {
            console.log(options);
            console.log('test');
            console.log(res.statusCode);
        };

        return next();
    }
}

let dafaultTemplate = {
    success: {
        code: '{{ res.statusCode }}',
        success: true,
    }
};