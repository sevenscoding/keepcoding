import { defineStore } from 'pinia'
import {
    checkElementExistsById,
    createDocument,
    deleteDocument,
    getDocuments,
    updateDocument,
} from '@/services/document/documentService'
import { filterDocumentFields, getFileFormat } from "@/helpers/";

export const useDocumentStore = defineStore('documentStore', {
    state: () => ({
        documents: [],
        isLoading: false,
        error: null,
        filters: {
            type: '',
            status: '',
            startDate: '',
        },
        formData: {
            type: null,
            name: '',
            number: '',
            startDate: null,
            endDate: null,
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
                const params = {
                    type: this.filters.type,
                    status: this.filters.status,
                    startDate: this.filters.startDate,
                }
                this.documents = await getDocuments(params)
            } catch (error) {
                this.error = error.message
            } finally {
                this.isLoading = false
            }
        },

        setFilter(key, value) {
            this.filters[key] = value
        },

        setForm(form) {
            this.toggleModal(true)
            this.formData = { ...form };
        },

        resetForm() {
            this.formData = {
                type: null,
                name: '',
                number: '',
                startDate: null,
                endDate: null,
                notify: false,
                createTask: false,
                file: null,
            }
        },

        async addDocument() {
            this.isLoading = true
            this.error = null
            try {
                const isEditDocument = await checkElementExistsById(this.formData?.id)
                const formatedData = filterDocumentFields(this.formData)
                const data = {
                    ...formatedData,
                    file: getFileFormat(this.formData.file),
                }

               if (isEditDocument) {
                    await this.updateExistingDocument(this.formData?.id, data)
                } else {
                    await createDocument(data)
                }
            } catch (error) {
                this.error = error.message
            } finally {
                this.isLoading = false
                this.resetForm()
                this.closeModal()
                await this.fetchDocuments()
            }
        },

        async updateExistingDocument(id, updatedData) {
            this.isLoading = true
            this.error = null
            try {
                await updateDocument(id, updatedData)
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
            } catch (error) {
                this.error = error.message
            } finally {
                await this.fetchDocuments()
                this.isLoading = false
            }
        },
    },
})