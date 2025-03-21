# @seriesfi/cypress-courier

A Cypress plugin for handling email testing with Courier. This plugin provides utilities and commands for testing email functionality in your Cypress tests.

## Installation

```bash
npm install --save-dev @seriesfi/cypress-courier
```

## Usage

1. Import the plugin in your `cypress/support/e2e.ts`:

```typescript
import "@seriesfi/cypress-courier";
```

2. Configure your Cypress environment variables in `cypress.env.json`:

```json
{
  "courierApiKey": "your-courier-api-key"
}
```

3. Use the provided commands in your tests:

```typescript
cy.getCourierEmail("recipient@example.com")
  .should("have.subject", "Welcome Email")
  .and("contain.text", "Welcome to our platform!");
```

## Available Commands

- `cy.getCourierEmail(email)`: Get the latest email for a recipient
- `cy.waitForCourierEmail(email, options)`: Wait for an email to arrive
- `cy.clearCourierEmails(email)`: Clear all emails for a recipient

## License

MIT
