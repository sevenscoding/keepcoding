import {  watch, onMounted } from 'vue'
import { useDocumentStore } from '@/stores/documentStore'

export const useUrlFilters = () => {
    const documentStore = useDocumentStore()

    const syncFiltersWithURL = () => {
        const params = new URLSearchParams(window.location.search)

        documentStore.filters.document_type = params.get('document_type') || ''
        documentStore.filters.status = params.get('status') || ''
        documentStore.filters.created_at = params.get('created_at') || ''
    }

    const updateURL = () => {
        const params = new URLSearchParams()

        if (documentStore.filters.document_type) params.set('document_type', documentStore.filters.document_type)
        if (documentStore.filters.status) params.set('status', documentStore.filters.status)
        if (documentStore.filters.created_at) params.set('created_at', documentStore.filters.created_at)

        const newUrl = params.toString() ? `${window.location.pathname}?${params.toString()}` : window.location.pathname
        window.history.replaceState({}, '', newUrl)
    }

    watch(
        () => documentStore.filters,
        () => {
            updateURL()
            documentStore.fetchDocuments()
        },
        { deep: true }
    )

    onMounted(() => {
        syncFiltersWithURL()
    })

    return {
        syncFiltersWithURL,
        updateURL,
    }
}