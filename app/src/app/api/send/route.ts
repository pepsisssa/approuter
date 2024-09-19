//import mysql_connection from "@/lib/db/connection";
import { NextRequest } from "next/server";
import mysql_connection from "../../../../lib/db/connection";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name || !body.email || !body.content) {
    return new Response(JSON.stringify({ message: "入力値が不正です。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const connection = await mysql_connection();


    const query =
      "INSERT INTO contact_table (name, email, content_question) VALUES (?, ?, ?)";
    await connection.execute(query, [body.name, body.email, body.content]);

    return new Response(JSON.stringify({ message: "送信に成功しました。" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "送信に失敗しました。" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}