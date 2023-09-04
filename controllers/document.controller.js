import DocumentService from "../services/document.service.js";
import upload from "../utils/multer.config.js";
import saveFile from "../repositories/files.repository.js";

const createDocument = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send("No file uploaded.");
    }

    const savedFilePath = await saveFile(file);
    res.status(201).send(`File uploaded to ${savedFilePath}`);
  } catch (error) {
    next(error);
  }
};

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
    res.send(await DocumentService.getDocument(req.query.autor_id));
    //logger.info("GET /document");
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
  try {
    await DocumentService.deleteDocument(req.params.id);
    res.end();
    //logger.info("DELETE /document");
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
