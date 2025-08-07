# API Design Conventions

## Purpose
Establishes a consistent and predictable design for all internal and external APIs.

## Template Content

### General Principles
- **Protocol**: `{{API_PROTOCOL}}` - e.g., REST, GraphQL.
- **Base URL**: `https://api.{{DOMAIN}}.com/v{{VERSION}}`
- **Authentication**: All endpoints must be authenticated using `{{AUTH_METHOD}}` (e.g., JWT Bearer Token).

### REST Conventions
- **Resource Naming**: Use plural nouns (e.g., `/users`, `/products`).
- **HTTP Methods**:
  - `GET`: Retrieve resources.
  - `POST`: Create resources.
  - `PUT` / `PATCH`: Update resources.
  - `DELETE`: Delete resources.
- **Status Codes**:
  - `200 OK`: Successful `GET`, `PUT`, `PATCH`.
  - `201 Created`: Successful `POST`.
  - `204 No Content`: Successful `DELETE`.
  - `400 Bad Request`: Client-side error.
  - `401 Unauthorized`: Authentication failure.
  - `404 Not Found`: Resource not found.
  - `500 Internal Server Error`: Server-side error.
- **Payload Format**: JSON with `camelCase` keys.

## Validation
- [ ] API endpoints follow resource naming conventions.
- [ ] Correct HTTP methods are used for actions.
- [ ] Consistent error response format is used.

## Updates
- Update when new API patterns are introduced or versions are released.
- Frequency: Before developing a new major API version.
