import { PrismaClient } from "@prisma/client";

// const connectionString = `${process.env.DATABASE_URL}`;
// const pool = new Pool({
//   connectionString,
// });
// const adapter = new PrismaPg(pool);
const db = new PrismaClient();

const globalForPrisma = global as unknown as { db: typeof db };

if (process.env.NODE_ENV !== "production") globalForPrisma.db = db;

export default db;
