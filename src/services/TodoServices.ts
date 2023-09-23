import { Request, Response } from "express";
import Todo from "../databases/models/province";
import ITodos from "../interface/Todos";
import Todos from "../mocks/Todos";

export default new class TodoService {
  private todos: ITodos[];

  constructor() {
    this.todos = [...Todos];
  }

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const todos = await Todo.findAll();

      return res.status(200).json(todos);
    } catch (error) {
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async findOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id) || id <= 0)
        return res.status(400).json({ Error: "Invalid id" });

      const todo = await Todo.findByPk(id);
      if (!todo) return res.status(404).json({ Error: "ID Not found " });

      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ error: "Something error while findOne" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name } = req.body;
      const todo = await Todo.create({ name });

      return res.status(200).json(todo);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Something wrong while create todo" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id: number = parseInt(req.params.id);
      const todoToUpdate = await Todo.findByPk(id);
      if (!todoToUpdate)
        return res.status(404).json({ Error: "Todo not found" });

      const updateTodo = req.body;
      const todo = await todoToUpdate.update(updateTodo);

      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ massage: "Something error while update todo" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const todoToDelete = await Todo.findByPk(id)
      if(!todoToDelete) return res.status(404).json({ Error: "Todo not found" })

      const todo = await todoToDelete.destroy()
      return res.status(200).json(todo)
    } catch (error) {
      return res.status(500).json({ error: "Something wrong while delete todo" });
    }   
  }
}
