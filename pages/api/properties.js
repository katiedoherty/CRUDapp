import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const client = await clientPromise;

  const customers = await client
    .db("mobile-phone-store")
    .collection("customers")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(customers);
};


