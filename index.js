import { ChatMistralAI } from "@langchain/mistralai"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { ChatPromptTemplate } from "@langchain/core/prompts"
import { HumanMessage, AIMessage } from "@langchain/core/messages"
import "dotenv/config"

async function run() {
  const model = new ChatMistralAI({
    model: "mistral-large-latest",
    temperature: 0,
  })
  const parser = new StringOutputParser()
  const chain = model.pipe(parser)

  const res = await chain.invoke([
    new HumanMessage({ content: "Hi! I'm Bob" }),
    new AIMessage({ content: "Hello Bob! How can I assist you today?" }),
    new HumanMessage({ content: "What's my name?" }),
  ])
  console.log(res)
}

run()
