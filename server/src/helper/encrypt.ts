import jwt from 'jsonwebtoken'
import { genSalt, hash, compare } from "bcryptjs";
import { Types } from 'mongoose';

import { jwt_user } from '../config/config';
import { IEvent } from 'interface/Event';

export const hashText = async (password: string): Promise<string> => {

    const salt = await genSalt(8)

    return await hash(password, salt)

}

export const compareHash = async (password: string, hash: string): Promise<boolean> => {

    return await compare(password, hash)

}

export const generateUserToken = (id: Types.ObjectId): string => {

    return jwt.sign({ id }, `${jwt_user}`, {
        expiresIn: '90d'
    })

}

export const generateId = (events: IEvent[]): string => {

    let characters = 'abcdefghijklmnopqrstuvwxyz1234567890'.split("")
    let id = ''    
    
    do {
        for (let i = 0; i < 8; i++) {
            shuffle(characters)
            console.log(characters);
            
            id += characters[0]
        }
    } while (events.find((e) => e.id === id))

    return id

}

function shuffle(array: any[]) {
    let currentIndex = array.length;
  
    while (currentIndex != 0) {
  
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  