export const R = {
    success: (status = 200, data, message, print_message) => {
        let body = {
            status: status,
            type: 'success',
            error: false
        };

        if (message) {
            body.message = message;
        }

        if (print_message) {
            body.print_message = print_message;
        }

        if (data) {
            body.data = data;
        }

        if (!data.updated_at) {

        }

        return body;
    },

    error: (status, errors) => {
        let body = {
            status: status,
            error: true
        };

        if (errors) {
            body.errors = errors;
        }

        return body;
    },

    validationError: (error) => {
        let errors = error.errors.map(error => {
            return {
                field: error.field,
                message: error.messages.join('. ')
            };
        });

        let body = {
            status: error.status,
            statusText: error.statusText,
            error: true,
            errors: errors
        };
        return body;
    }
};