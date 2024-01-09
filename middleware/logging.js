import { appendFile } from "fs";
import fs from "fs/promises";

const logging = async (req, res, next) => {
  try {
    const text = `\nIP: ${req.ip} , Method ${
      req.method
    } , Endpoint /assignments ${
      req.url
    } , Time: ${new Date().toLocaleString()}`;
    await fs.appendFile("logs.txt", text);
    console.log(text);
  } catch {
    appendFile(
      "log.txt",
      `\nLogging Error on IP: ${req.ip} , Method ${req.method} , URL: ${
        req.url
      } , Time: ${new Date().toLocaleString()}`
    );
  }
  next();
};

export default logging;
