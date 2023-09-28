import DocumentRepository from "../repositories/document.repository.js";
// MONGO_DB

async function createDocument(document) {
  return await DocumentRepository.createDocument(document);
}

async function deleteDocument(name) {
  await DocumentRepository.deleteDocument(name);
}

async function updateDocument(document, updatedDocument) {
  return await DocumentRepository.updateDocument(document, updatedDocument);
}

async function getDocument() {
  return await DocumentRepository.getDocument();
}

async function getDocumentById(id) {
  return await DocumentRepository.getDocumentById(id);
}

export default {
  createDocument,
  getDocument,
  deleteDocument,
  updateDocument,
  getDocumentById,
};
