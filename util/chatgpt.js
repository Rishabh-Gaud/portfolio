
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "sk-secret key",
});
const openai = new OpenAIApi(configuration);
export async function generatedText(formData){
  try {

    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: formData.message}],
    });
    const newMessage = await chatCompletion.data.choices[0].message.content;
    const payload = {
      name : formData.name,
      email: formData.email,
      message: newMessage
    }
    console.log("payload>>>>>>>>>>>>> ", payload);
    return (payload.message);
  } catch (error) {
    if (error.response) {
      console.log("error1");
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log("error12");
      console.log(error.message);
    }
  }
}