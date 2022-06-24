require("dotenv").config();
const BlocksService = require("./services/BlocksService");
const service = new BlocksService();
const { check } = require("./main")(service);

const MY_TOKEN = process.env.MY_TOKEN;

const main = async () => {
  const unordered = await service.getBlocks(MY_TOKEN);
  const ordered = await check(unordered, MY_TOKEN);

  console.log("Unordered:\n", unordered);
  console.log("Ordered:\n", ordered);

  const verified = await service.verifyBlocks(ordered, MY_TOKEN);

  if (verified) {
    console.log("Blocks are ordered correctly");
  } else {
    console.log("There was an error in the ordering");
  }
};

main();
