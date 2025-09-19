import Joi from "joi";

const loginMiddleware = async (req, res, next) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(100).required()
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: 'Invalid request data', error });
        }
        next();
}

const signupMiddleware = async (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().min(5).max(100).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(100).required()
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: 'incorrect request', error });
        }
        next();
}

export {loginMiddleware, signupMiddleware};