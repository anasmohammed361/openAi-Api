import { Configuration, OpenAIApi } from "openai";
import {config} from "dotenv"
config();

class OpenAi {
    configuration = new Configuration({
        apiKey: process.env.OPEN_AI_KEY,
      });
    openai = new OpenAIApi(this.configuration);
    //Methods 
    generateText =async (prompt) => {
        try {
            const response = await this.openai.createCompletion({
                model: "text-davinci-003",
                prompt, 
                temperature: 0,
                max_tokens: 100,
                top_p: 1,
                frequency_penalty: 0.0,
                presence_penalty: 0.0,
                n:1
              });
              return response
        } catch (error) {
            console.log(error);
            return "Oops!! Found something fishy . Try Again!!!"
        }
    }

    generateImage = async (prompt) => {
        try {
            const response = await this.openai.createImage({
                prompt,
                n: 1,
                size: "1024x1024",
            })
            return response
        } catch (error) {
            console.log(error);
            return "Oops!! Found something fishy . Try Again!!!"
        }
    }
    
}

export const openAi = new OpenAi()