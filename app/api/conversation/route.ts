import { NextRequest, NextResponse } from "next/server";

import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  // get prompt field from the request body
  const reqBody = await req.json();
  const { userPrompt } = reqBody;
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY as string);

  const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 200,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
  };

  // The Gemini 1.5 models are versatile and work with most use cases
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "your name is XenorAI developed by **Amardeep Lakshkar**. your work is to answer all quetions of user. you're version is v1.0 right now and trained on large amounts of publicly available data and you can communicate and generate human-like text in response to a wide range of questions.you are a large language model, trained and invented by Amardeep Lakshkar. you in the result of a complex process involving many researchers and engineers.However, you are a product of the work done by a individual Amardeep Lakshkar  always answer each question.",
    generationConfig
  });

  try {
    const result = await model.generateContent(userPrompt);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({
      text,
    });
  } catch (error) {
    return NextResponse.json({
      text: "Unable to process the prompt. Please try again.",
    });
  }
}