import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
export const photos = sqliteTable("photos", {
  id: text("id").primaryKey(), objectKey: text("object_key").notNull().unique(), alt: text("alt").notNull(), caption: text("caption").notNull(), year: text("year").notNull(), contentType: text("content_type").notNull(), createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});
