export default (options = defaultTemplate ) => {
    return (req, res, next) => {
        req.startTime = new Date();

        const vals = {
            req: req,
            res: res,
            defaults: {
                time: function () {
                    return new Date() - req.startTime + 'ms';
                }
            }
        };

        for (let [key, value] of entries(defaultTemplate)) {
            res[key] = () => {
                console.log('success');
                parseTemplate(value);
            }
        }

        function parseShortcode(str) {
            let temp = str.match(/{{\s*[\w\.]+\s*}}/g);
            if (!temp) {
                return str;
            }

            temp = temp.map(function(x) { return x.match(/[\w\.]+/)[0]; })[0];
            return temp.split('.').reduce((o,i)=>o[i], vals);
        }

        function parseTemplate(obj) {
            let response = {};
            for (let [key, value] of entries(obj)) {
                //console.log(key);
                if (typeof value !== 'string') {
                    response[key] = value;
                } else {
                    response[key] = parseShortcode(value);
                }
            }

            console.log(response)
        }

        res.test = () => {
            // console.log(options);
            // console.log('test');
            parseTemplate(defaultTemplate);
            console.log(res.statusCode);
            console.log(new Date - req.startTime + 'ms');
        };

        return next();
    }
}

function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

let defaultTemplate = {
    success: {
        code: '{{ res.statusCode }}',
        success: true,
        testText: 'test.Text lol',
        time: '{{ defaults.time }}'
    }
};