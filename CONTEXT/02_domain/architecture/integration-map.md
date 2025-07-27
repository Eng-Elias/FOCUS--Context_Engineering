# Integration Map

## Purpose
Documents all internal and external system integrations, including APIs, data feeds, and third-party services.

## Template Content

### Internal Integrations
- **`{{SERVICE_A}}` -> `{{SERVICE_B}}`**:
  - **Protocol**: `{{PROTOCOL}}` - e.g., REST
  - **Auth**: `{{AUTH_METHOD}}` - e.g., JWT
  - **Purpose**: `{{INTEGRATION_PURPOSE}}`

### External Integrations
- **`{{APPLICATION}}` -> `{{THIRD_PARTY_SERVICE}}` (e.g., Stripe)**:
  - **API Version**: `{{API_VERSION}}`
  - **Auth**: API Key in header.
  - **Key Endpoints**:
    - `POST /v1/charges`
    - `GET /v1/customers/{id}`

## Technology Adaptations
- **REST**: Document base URLs, key endpoints, and HTTP methods.
- **GraphQL**: Document the GraphQL endpoint and key queries/mutations.
- **gRPC**: Link to `.proto` files for service definitions.
- **Webhooks**: Specify the event payloads and endpoint URLs.

## Validation
- [ ] All critical integrations are documented.
- [ ] Authentication methods are secure and correctly described.
- [ ] Links to external API documentation are valid.

## Updates
- Update when a new integration is added or an existing one is modified/versioned.
- Frequency: As needed.
