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