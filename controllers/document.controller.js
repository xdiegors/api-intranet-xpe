import DocumentService from "../services/document.service.js";
import upload from "../utils/multer.config.js";
import saveFile from "../repositories/files.repository.js";
import * as fs from "fs";
import * as path from "path";

//const uploadDir = path.join(__dirname, "uploads");

const createDocument = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }

    //const savedFilePath = await saveFile(file);
    res.status(201).send(`File uploaded!`);
  } catch (error) {
    next(error);
  }
};

// const createDocument = async (req, res, next) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).send("No file uploaded.");
//     }

//     const savedFilePath = await saveFile(file);
//     res.status(201).send(`File uploaded to ${savedFilePath}`);
//   } catch (error) {
//     next(error);
//   }
// };

// async function createDocument(req, res, next) {
//   try {
//     let document = req.body;
//     // if (!document.id || !document.content || !document.date) {
//     //   throw new Error("Id, conteúdo e data são obrigatórios.");
//     // }
//     document = await DocumentService.createDocument(document);
//     res.send(document);
//     //logger.info(`POST /document - ${JSON.stringify(document)}`);
//   } catch (err) {
//     next(err);
//   }
// }

async function getAllDocument(req, res, next) {
  try {
    fs.readdir("uploads", (err, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Return the list of file names as JSON
      res.json({ files });
    });
  } catch (err) {
    next(err);
  }
}

async function getDocumentById(req, res, next) {
  try {
    res.send(await DocumentService.getDocumentById(req.params.id));
    //logger.info("GET /document");
  } catch (err) {
    next(err);
  }
}

async function deleteDocument(req, res, next) {
  const fileName = req.params.name;

  try {
    const filePath = `uploads/${fileName}`; // Adjust the path to your "uploads" folder

    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Delete the file
      fs.unlinkSync(filePath);
      console.log(`File '${fileName}' has been deleted.`);
      res.end();
    } else {
      // File not found, respond with an error status
      res.status(404).json({ error: "File not found" });
    }
  } catch (err) {
    next(err);
  }
}

async function updateDocument(req, res, next) {
  try {
    let document = req.body;
    // if (!document.id || !document.content || !document.date) {
    //   throw new Error("Id, conteúdo e data são obrigatórios.");
    // }
    document = await DocumentService.updateDocument(document.id, document);
    res.send(document);
    //logger.info(`PUT /document - ${JSON.stringify(document)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createDocument,
  getAllDocument,
  getDocumentById,
  deleteDocument,
  updateDocument,
};
