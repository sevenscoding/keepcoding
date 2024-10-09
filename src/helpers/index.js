import { STATUSES } from '@constants/common/statuses'

export function setStatusText(status) {
    if (!status || typeof status !== 'string') {
        return null;
    }

    const statusText = STATUSES.DOCUMENT[status];
    if (!statusText) {
        return null;
    }

    return statusText;
}

export function filterDocumentFields(document) {
    return Object.keys(document).reduce((acc, key) => {
        if (document[key] !== undefined && document[key] !== "") {
            acc[key] = document[key]
        } else {
            acc[key] = null
        }
        return acc
    }, {})
}

export const getFileFormat = (file) => {
    const allowedFormats = ['jpg', 'pdf', 'doc', 'xls']
    if (allowedFormats.includes(file)) { return file }

    if (!file) return null
    const extension = file.name.split('.').pop().toLowerCase()
    return extension || null
}