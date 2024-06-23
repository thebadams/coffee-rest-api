import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const coffees = pgTable("coffees", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  roaster: varchar("roaster", { length: 256 }),
  origin: varchar("origin", { length: 256 }),
});
