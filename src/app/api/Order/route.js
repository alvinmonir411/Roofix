import ConnectDb from "@/app/lib/Db";

export async function POST(req) {
  try {
    const Order = await req.json();
    const clint = await ConnectDb;
    const db = clint.db(process.env.DB_NAME);
    const OrderCollection = db.collection("Order");
    const result = await OrderCollection.insertOne(Order);
    return new Response(
      JSON.stringify({ message: "Order inserted successfully", result })
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "inseted faile ", error }));
  }
}
