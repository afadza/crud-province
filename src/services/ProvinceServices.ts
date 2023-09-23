import { Request, Response } from "express";
import Province from "../databases/models/province";
import IProvinces from "../interface/Provinces";
import Provinces from "../mocks/Provinces";

export default new class ProvinceServices {
  private province: IProvinces[];

  constructor() {
    this.province = [...Provinces];
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const provinces = await Province.findAll();

      return res.status(200).json(provinces);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0)
        return res.status(400).json({ Error: "Invalid id" });

      const province = await Province.findByPk(id);
      if (!province) return res.status(404).json({ Error: "ID Not found " });

      return res.status(200).json(province);
    } catch (error) {
      return res.status(500).json({ error: "Something error while findOne" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;
      const province = await Province.create({ name });

      return res.status(200).json(province);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something wrong while create todo" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = parseInt(req.params.id);
      const provinceToUpdate = await Province.findByPk(id);
      if (!provinceToUpdate)
        return res.status(404).json({ Error: "Todo not found" });

      const updateTodo = req.body;
      const todo = await provinceToUpdate.update(updateTodo);

      return res.status(200).json(todo);
    } catch (error) {
      return res
        .status(500)
        .json({ massage: "Something error while update todo" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const provinceToDelete = await Province.findByPk(id);
      if (!provinceToDelete)
        return res.status(404).json({ Error: "Todo not found" });

      const todo = await provinceToDelete.destroy();
      return res.status(200).json(todo);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something wrong while delete todo" });
    }
  }
}();
