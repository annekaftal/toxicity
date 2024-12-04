import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

export const isValidEmail = (str: string): boolean => {
    const regex = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)
    return regex.test(str)
}

export const isValidUsernamePassword = (str: string): boolean => {
    return str.length >= 3
}

export const hashPassword = (password: string): string => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export const comparePasswords = async (userPassword: string, hashedPassword: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
		bcrypt.compare(userPassword, hashedPassword, (err, result) => {
			if (err) {
				reject(err)
			} else {			
				resolve(result)
			}
		})
	})
}

export const generateToken = (id: bigint | bigint[]) => {
	const token = jwt.sign(
		{ id: id },
		process.env.TOKEN_SECRET as string,
		{ expiresIn: "2 days" }
	);
	return token;
};

export const verifyToken = (token: string | undefined): object => {
	if (token && process.env.TOKEN_SECRET) {
		console.log('good')

		jwt.verify(token, process.env.TOKEN_SECRET, function(err, decoded) {
			if (err) {
				throw new Error('invalid token')
			}
			console.log('good')
			return decoded	
		  });
	}
}


// module.exports = { isValidEmail, isValidUsernamePassword, hashPassword }