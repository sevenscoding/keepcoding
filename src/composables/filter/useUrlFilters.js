import {  watch, onMounted } from 'vue'
import { useDocumentStore } from '@/stores/documentStore'

export const useUrlFilters = () => {
    const documentStore = useDocumentStore()

    const syncFiltersWithURL = () => {
        const params = new URLSearchParams(window.location.search)

        documentStore.filters.type = params.get('type') || ''
        documentStore.filters.status = params.get('status') || ''
        documentStore.filters.startDate = params.get('startDate') || ''
    }

    const updateURL = () => {
        const params = new URLSearchParams()

        if (documentStore.filters.type) params.set('type', documentStore.filters.type)
        if (documentStore.filters.status) params.set('status', documentStore.filters.status)
        if (documentStore.filters.startDate) params.set('startDate', documentStore.filters.startDate)

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