import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const encoder = new TextEncoder();

    // Create a streaming response
    const customReadable = new ReadableStream({
      async start(controller) {
        const textToStream = "This is a simulated response from the server. You said: " + message + ". Here is some more text to simulate a longer response from an LLM. It will stream chunk by chunk.";
        const words = textToStream.split(' ');

        for (let i = 0; i < words.length; i++) {
          // Simulate network/generation delay
          await new Promise((resolve) => setTimeout(resolve, 50));
          
          // Send word with a space
          const chunk = words[i] + (i === words.length - 1 ? '' : ' ');
          
          // Format as Server-Sent Events (SSE)
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text: chunk })}\n\n`));
        }

        // Send a final "[DONE]" event to signal completion (standard in OpenAI/SSE chat apis)
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      },
    });

    return new Response(customReadable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
