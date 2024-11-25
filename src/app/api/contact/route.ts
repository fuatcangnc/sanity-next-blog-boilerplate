import { writeClient } from "@/sanity/lib/client"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const doc = {
      _type: 'contact',
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      createdAt: new Date().toISOString(),
    }

    await writeClient.create(doc)

    return NextResponse.json({ message: "Mesaj başarıyla gönderildi" }, { status: 200 })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ message: "Bir hata oluştu" }, { status: 500 })
  }
} 