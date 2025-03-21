export type CourierError = {
    message: string
    type: 'authentication_error' | 'invalid_request_error'
}

export type CourierMessage = {
    id: string
    status: 'CANCELED' | 'CLICKED' | 'DELAYED' | 'DELIVERED' | 'DIGESTED' | 'ENQUEUED' | 'FILTERED' | 'OPENED' | 'ROUTED' | 'SENT' | 'SIMULATED' | 'THROTTLED' | 'UNDELIVERABLE' | 'UNMAPPED' | 'UNROUTABLE'
    enqueued: number
    sent: number
    delivered: number
    opened: number
    clicked: number
    recipient: string
    event: string
    notification: string
    error?: string
    reason: 'FILTERED' | 'NO_CHANNELS' | 'NO_PROVIDERS' | 'PROVIDER_ERROR' | 'UNPUBLISHED' | 'UNSUBSCRIBED'
    providers?: object[]
}

export type CourierMessages = {
    paging: {
        more: boolean
        cursor?: string
    }
    results: CourierMessage[]
}

export type CourierMessageContent = {
    results: {
        channel: string
        channel_id: string
        content: {
            html: string
            title: string
            body: string
            subject: string
            text: string
            blocks: {
                type: string
                text: string
            }[]
        }
    }[]
} 