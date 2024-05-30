/*import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'

// Break the app if the API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing Environment Variable OPENAI_API_KEY')
}

export const config = {
  runtime: 'edge',
}

const handler = async (req: Request): Promise<Response> => {
  const body = await req.json()

  const messages: ChatGPTMessage[] = [
    {
      role: 'system',
      content: `An AI assistant that formulates responses to answer the questions given to it by the user`
    },
  ]
  messages.push(...body?.messages)

  const payload: OpenAIStreamPayload = {
    model: 'gpt-3.5-turbo',
    messages: messages,
    temperature: process.env.AI_TEMP ? parseFloat(process.env.AI_TEMP) : 0.7,
    max_tokens: process.env.AI_MAX_TOKENS
      ? parseInt(process.env.AI_MAX_TOKENS)
      : 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stream: true,
    user: body?.user,
    n: 1,
  }

  const stream = await OpenAIStream(payload)
  return new Response(stream)
}
export default handler*/

import fetch from 'node-fetch';
import { type ChatGPTMessage } from '../../components/ChatLine'
import { OpenAIStream, OpenAIStreamPayload } from '../../utils/OpenAIStream'
import OpenAI from "openai";

const { Configuration, OpenAIApi } = require('openai');

// Initialize the OpenAI API client
//const configuration = new Configuration({
    //apiKey: process.env.OPENAI_API_KEY, // Ensure you have set the API key in your environment
//    apiKey:process.env.OPENAI_API_KEY
    //dangerouslyAllowBrowser: true,
//  });
const configuration = new Configuration({
  apiKey: process.env.SOCCER_API_KEY
});
const openai = new OpenAIApi(configuration);

// Function to interact with the custom assistant
async function interactWithAssistant(prompt: string) {
    try {
        const response = await openai.createCompletion({
            model: 'asst_0nZxiZCrqPruUSAmc1WK2jJr', // Specify your custom assistant model
            prompt: prompt,
            max_tokens: 150, // Adjust the max tokens as per your requirement
        });

        console.log(response.data.choices[0].text.trim());
    } catch (error) {
        console.error("Error interacting with the assistant:", error);
    }
}

// Example usage
const userPrompt = "What is the weather like today?";
interactWithAssistant(userPrompt);

