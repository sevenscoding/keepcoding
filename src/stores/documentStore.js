import { defineStore } from 'pinia'
import { createDocument, deleteDocument, getDocuments, updateDocument } from '@/services/document/documentService'

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
        formData: {
            type: '',
            name: '',
            number: '',
            startDate: '',
            endDate: '',
            notify: false,
            createTask: false,
            file: null,
        },
        modal: false,
    }),

    getters: {
        isDocumentAddDisabled: (state) => !Boolean(state.formData.type) || !state.formData.name,
    },

    actions: {
        toggleModal(value) {
            this.modal = value
        },

        openModal() {
            this.toggleModal(true)
        },

        closeModal() {
            this.resetForm()
            this.toggleModal(false)
        },

        async fetchDocuments() {
            this.isLoading = true
            this.error = null
            try {
                this.documents = await getDocuments(this.filters)
            } catch (error) {
                this.error = error.message
            } finally {
                this.isLoading = false
            }
        },

        setFilter(key, value) {
            this.filters[key] = value
        },

        resetFilters() {
            this.filters = {
                document_type: '',
                status: '',
                created_at: '',
            }
        },

        resetForm() {
            this.formData = {
                type: 'contract',
                name: '',
                number: '',
                startDate: '',
                endDate: '',
                notify: false,
                createTask: false,
                file: null,
            }
        },

        async addDocument(document) {
            this.isLoading = true
            this.error = null
            try {
                const newDocument = await createDocument(document)
                this.documents.push(newDocument[0])
                this.resetForm()
            } catch (error) {
                this.error = error.message
            } finally {
                this.isLoading = false
            }
        },

        async updateExistingDocument(id, updatedData) {
            this.isLoading = true
            this.error = null
            try {
                const updatedDocument = await updateDocument(id, updatedData)
                const index = this.documents.findIndex((doc) => doc.id === id)
                if (index !== -1) {
                    this.documents[index] = { ...this.documents[index], ...updatedDocument[0] }
                }
            } catch (error) {
                this.error = error.message
            } finally {
                this.isLoading = false
            }
        },

        async removeDocument(id) {
            this.isLoading = true
            this.error = null
            try {
                await deleteDocument(id)
                this.documents = this.documents.filter((doc) => doc.id !== id)
            } catch (error) {
                this.error = error.message
            } finally {
                this.isLoading = false
            }
        },

        updateFormField(key, value) {
            if (Object.hasOwnProperty.call(this.formData, key)) {
                this.formData[key] = value
            }
        },
    },
})