/// <reference types="cypress" />

import { CourierMessageContent } from "../types";

Cypress.Commands.add('getMessageContent', (messageId: string) => {
    const { courierAuthToken } = Cypress.env()
    const options = {
        url: `https://api.courier.com/messages/${messageId}/output`,
        method: 'GET',
        auth: {
            bearer: courierAuthToken
        },
    }

    cy.request<CourierMessageContent>(options).then((response) => {
        expect(response.status).to.eq(200)
        return response.body
    })
})

declare global {
    namespace Cypress {
        interface Chainable {
            getMessageContent(messageId: string): Chainable<CourierMessageContent>
        }
    }
}
