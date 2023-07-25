import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
// import { getProducts } from "@/backend/controllers/productControllers";
// import onError from "@/backend/middlewares/errors";
import { newProduct } from "@/backend/controllers/productControllers";

// const handler = nc({ onError });
const handler = nc();

dbConnect();

// handler.get(getProducts);
handler.get(newProduct);

export default handler;