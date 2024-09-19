//import mysql_connection from "@/lib/db/connection";
import mysql_connection from "../../../../lib/db/connection";


export async function GET() {
  try {
    const connection = await mysql_connection();
    const result = await connection.query("SELECT * from contact_table");
    connection.end();
    return new Response(
      JSON.stringify({ message: "取得に成功しました。", contents: result[0] }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "取得に失敗しました。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}