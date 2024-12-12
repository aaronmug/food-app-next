import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all(); // run is used when inserting data, all is used to fetch data, get for a single row
}
