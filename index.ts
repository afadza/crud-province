import Express from "express";
import dotenv from "dotenv"
import router from "./src/routes";

async function start(): Promise<void> {
  try {
    dotenv.config()
    
    const app = Express();
    const PORT = process.env.APP_PORT

    app.use(Express.json())
    app.use('/api/v1', router)
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

void start();