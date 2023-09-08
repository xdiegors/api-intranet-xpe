// document.repository.js

import * as fs from "fs/promises";

const saveFile = async (file) => {
  try {
    await fs.writeFile(
      `uploads/${file.originalname}`,
      Buffer.alloc(file.size, file.buffer, "utf8")
    );
    return `uploads/${file.originalname}`;
  } catch (error) {
    throw error;
  }
};

export default saveFile;
