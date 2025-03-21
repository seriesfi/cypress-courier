/// <reference types="cypress" />

import { CourierMessages } from "../types"

interface ListMessagesParams {
    archived?: boolean
    cursor?: string
    event?: string
    list?: string
    messageId?: string
    notification?: string
    provider?: string[]
    recipient?: string
    status?: string[]
    tag?: string[]
    tags?: string
    tenant_id?: string
    enqueued_after?: string
    traceId?: string
    limit?: number
}

Cypress.Commands.add('listMessages', (params: ListMessagesParams) => {
    const { courierAuthToken } = Cypress.env()
    const options = {
        url: 'https://api.courier.com/messages',
        method: 'GET',
        auth: {
            bearer: courierAuthToken
        },
        qs: params
    }

    cy.request<CourierMessages>(options).then((response) => {
        expect(response.status).to.eq(200)
        return response.body
    })
})

declare global {
    namespace Cypress {
        interface Chainable {
            listMessages(params: ListMessagesParams): Chainable<CourierMessages>
        }
    }
} 