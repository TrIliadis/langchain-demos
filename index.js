import { ChatMistralAI } from "@langchain/mistralai"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { ChatPromptTemplate } from "@langchain/core/prompts"
import "dotenv/config"

async function run() {
  const systemTemplate =
    "Translate the following into {language}, do not include anything else:"
  
  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
  ])

  const parser = new StringOutputParser()
  const model = new ChatMistralAI({
    model: "mistral-large-latest",
    temperature: 0,
  })

  const llmChain = promptTemplate.pipe(model).pipe(parser)

  const res = await llmChain.invoke({
    language: "Greek",
    text: "hi all!",
  })
  console.log(res)
}

run()
