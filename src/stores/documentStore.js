import { defineStore } from 'pinia';
import { createDocument, deleteDocument, getDocuments, updateDocument } from '@/services//document/documentService';

export const useDocumentStore = defineStore('documentStore', {
    state: () => ({
        documents: [],
        isLoading: false,
        error: null,
        filters: {
            document_type: '',
            status: '',
            created_at: '',
        },
    }),

    getters: {
        getDocumentById: (state) => (id) => state.documents.find((doc) => doc.id === id),
    },

    actions: {
        async fetchDocuments() {
            this.isLoading = true;
            this.error = null;
            try {
                this.documents = await getDocuments(this.filters);
            } catch (error) {
                this.error = error.message;
            } finally {
                this.isLoading = false;
            }
        },

        setFilter(key, value) {
            this.filters[key] = value;
        },

        async addDocument(document) {
            this.isLoading = true;
            this.error = null;
            try {
                const newDocument = await createDocument(document);
                this.documents.push(newDocument[0]);
            } catch (error) {
                this.error = error.message;
            } finally {
                this.isLoading = false;
            }
        },

        async updateExistingDocument(id, updatedData) {
            this.isLoading = true;
            this.error = null;
            try {
                const updatedDocument = await updateDocument(id, updatedData);
                const index = this.documents.findIndex((doc) => doc.id === id);
                if (index !== -1) {
                    this.documents[index] = { ...this.documents[index], ...updatedDocument[0] };
                }
            } catch (error) {
                this.error = error.message;
            } finally {
                this.isLoading = false;
            }
        },

        async removeDocument(id) {
            this.isLoading = true;
            this.error = null;
            try {
                await deleteDocument(id);
                this.documents = this.documents.filter((doc) => doc.id !== id);
            } catch (error) {
                this.error = error.message;
            } finally {
                this.isLoading = false;
            }
        },
    },
});