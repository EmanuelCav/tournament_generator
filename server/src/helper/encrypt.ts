import { genSalt, hash } from "bcryptjs";

export const hashText = async (password: string): Promise<string> => {

    const salt = await genSalt(8)

    return await hash(password, salt)

}