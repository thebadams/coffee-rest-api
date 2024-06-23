import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const coffees = pgTable("coffees", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
});
