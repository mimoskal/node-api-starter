function paginate(q, select, cursor = {}, lean = true) {
    let model = this;
    let defaults = {
        page: 1,
        limit: 5
    };

    let options = Object.assign(defaults, cursor);

    let query = model.find(q, select, options);
    let count = model.find(q, select).count();

    if (lean) {
        query.lean();
    }

    let stats = {
        pagination: {
            current_page: (options.skip / options.limit) + 1,
            last_page: null,
            total_count: null,
            per_page: options.limit
        }
    };

    if (q && q.length) {
        stats.query = q;
    }

    return count.exec()
        .then(count => {
            stats.pagination.last_page = Math.ceil(count / options.limit);
            stats.pagination.total_count = count;

            return query.exec();
        })
        .then(result => {
            return new Promise((resolve, reject) => {
                let data = {
                    items: result,
                    stats: stats
                };

                resolve(data);
            });
        });
}

module.exports = function(schema) {
    schema.statics.paginate = paginate;
};