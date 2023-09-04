import DocumentRepository from "../repositories/document.repository.js";
// MONGO_DB

async function createDocument(document) {
  return await DocumentRepository.createDocument(document);
}

async function deleteDocument(document_id) {
  await DocumentRepository.deleteDocument(document_id);
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
