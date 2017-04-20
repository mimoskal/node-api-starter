export default (req, res, next) => {
    req.startTime = new Date();

    let defaults = {
        code: res.statusCode,
        success: true
    };

    res.success = (data, ...params) => {
        if (data) {
            defaults.data = data;
        }

        let response = Object.assign(defaults, ...params);

        response.time = new Date - req.startTime + 'ms';
        res.json(response);
    };

    return next();

}
