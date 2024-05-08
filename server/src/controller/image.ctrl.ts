import { Request, Response } from "express";
import { unlink } from 'fs-extra'

import Image from '../models/image'

import { cloud } from "../helper/cloud";

export const images = async (req: Request, res: Response): Promise<Response> => {

    try {

        const showImages = await Image.find()

        return res.status(200).json(showImages)

    } catch (error) {
        throw error
    }

}

export const createImage = async (req: Request, res: Response): Promise<Response> => {

    try {

        if(!req.file) {
            return res.status(400).json({ message: "Image does not exists" })
        }

        const result = await cloud.uploader.upload(req.file.path)

        await unlink(req.file.path)

        const newImage = new Image({
            image: result.url,
            imageId: result.public_id
        })

        await newImage.save()

        return res.status(200).json({ message: "Image created successfully" })

    } catch (error) {
        throw error
    }

}