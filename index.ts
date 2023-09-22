import Express, { Request, Response } from "express";
import ITodos from "./src/interface/todos";
import Todos from "./src/mocks/Todos";

const app = Express();
const PORT: number = 5000;

app.use(Express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({ massage: "Testing aja cuy" });
});

// === Menampilkan semua todos === \\
app.get("/todos", (req: Request, res: Response): Response => {
  return res.status(200).json({ data: Todos });
});

// === Menampilkan todos berdasarkan id === \\
app.get("/todos/:id", (req: Request, res: Response): Response => {
  const id = parseInt(req.params.id);
  const data = Todos.find((data) => data.id === id);

  return res.status(200).json(data);
});

// === Menambahkan todos === \\
app.post("/todo", (req: Request, res: Response): Response => {
  const data: ITodos = req.body;
  Todos.push(data);

  return res.status(200).json({ data: Todos });
});

// === Menghapus todos berdasarkan id === \\
app.delete("/todo/:id", (req: Request, res: Response) : Response => {
    const { id } = req.params
    const data: ITodos[] = Todos.filter(todo => todo.id !== parseInt(id))

    return res.status(200).json(data)
})



async function start(): Promise<void> {
  try {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
start();
