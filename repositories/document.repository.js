import DocumentSchema from "../schemas/document.schema.js";
import { connect } from "./mongo.db.js";

// MONGO_DB

async function createDocument(document) {
  try {
    const mongoose = await connect();
    const Document = mongoose.model("Document", DocumentSchema);
    document = new Document(document);
    await document.save();
  } catch (err) {
    throw err;
  }
}

async function getDocumentById(id) {
  try {
    const mongoose = await connect();
    const Document = mongoose.model("Document", DocumentSchema);
    const query = Document.findOne({ id });
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

async function updateDocument(id, updatedDocument) {
  try {
    const mongoose = await connect();
    const Document = mongoose.model("Document", DocumentSchema);
    await Document.findOneAndUpdate({ id }, updatedDocument);
  } catch (err) {
    throw err;
  }
}

async function deleteDocument(id) {
  try {
    const mongoose = await connect();
    const Document = mongoose.model("Document", DocumentSchema);
    await Document.deleteOne({ id });
  } catch (err) {
    throw err;
  }
}

async function getDocument() {
  try {
    const mongoose = await connect();
    const Document = mongoose.model("Document", DocumentSchema);
    const query = Document.find({});
    return await query.exec();
  } catch (err) {
    throw err;
  }
}

export default {
  createDocument,
  getDocumentById,
  updateDocument,
  deleteDocument,
  getDocument,
};
