export default (req, res, next) => {
    res.success = (data, ...params) => {
        let defaults = {
            code: res.statusCode,
            success: true
        };

        if (data) {
            defaults.data = data;
        }

        let response = Object.assign(defaults, ...params);

        if (!response.message) {
            response.message = 'OK';
        }

        if (req.startTime) {
            response.time_ms = new Date() - req.startTime;
        }

        res.json(response);
    };

    res.error = (errors, ...params) => {
        let defaults = {
            code: res.statusCode,
            error: true
        };

        if (errors) {
            defaults.errors = errors;
        }

        let response = Object.assign(defaults, ...params);

        if (req.startTime) {
            response.time_ms = new Date() - req.startTime;
        }

        res.json(response);
    };

    return next();
}
