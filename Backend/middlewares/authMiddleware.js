import Joi from "joi";

const loginMiddleware = async (req, res, next) => {
        const { email, password } = req.body;
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(100).required()
        })

        const { error } = schema.validate(req.body); //validate data , returns error info if it has error
        if (error) {
            return res.status(400).json({ message: 'Invalid request data', error });
            // execution stops
        }
        // no error, pass control
        next();
}

const signupMiddleware = async (req, res, next) => {
        const { name, email, password } = req.body;

        const schema = Joi.object({
            name: Joi.string().min(5).max(100).required(), // validation criteria for coming data using Joi
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(100).required()
        })

        const { error } = schema.validate(req.body); //validate data , returns error info if it has error
        if (error) {
            return res.status(400).json({ message: 'incorrect request', error });
            // execution stops
        }
        // no error, pass control
        next();
}

export {loginMiddleware, signupMiddleware};