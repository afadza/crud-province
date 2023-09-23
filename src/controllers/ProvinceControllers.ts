import { Request, Response } from 'express'
import ProvinceServices from '../services/ProvinceServices'

export default new class ProvinceControllers {
    find(req: Request, res: Response) {
        ProvinceServices.find(req, res)
    }
    findOne(req: Request, res: Response) {
        ProvinceServices.findOne(req, res)
    }
    create(req: Request, res: Response) {
        ProvinceServices.create(req, res)
    }
    update(req: Request, res: Response) {
        ProvinceServices.update(req, res)
    }
    delete(req: Request, res: Response) {
        ProvinceServices.delete(req, res)
    }
}