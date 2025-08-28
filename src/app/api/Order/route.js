import ConnectDb from "@/app/lib/Db";

export async function POST(req) {
  try {
    const Order = await req.json();

    const client = await ConnectDb;
    const db = client.db(process.env.DB_NAME);
    const OrderCollection = db.collection("Order");

    // check if existing
    const existingOrder = await OrderCollection.findOne({ email: Order.email });

    if (existingOrder) {
      return new Response(JSON.stringify({ message: "Order already exists" }), {
        status: 200,
      });
    }

    const result = await OrderCollection.insertOne(Order);
    return new Response(
      JSON.stringify({ message: "Order inserted successfully", result }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Insert failed", error: error.message }),
      { status: 500 }
    );
  }
}
