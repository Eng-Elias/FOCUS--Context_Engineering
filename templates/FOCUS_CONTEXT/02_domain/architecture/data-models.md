# Data Models

## Purpose
Defines the structure, relationships, and constraints of the core data entities used across the application.

## Template Content

### Data Schema
- **Schema Diagram**: `{{LINK_TO_ERD}}` - Link to an Entity-Relationship Diagram or equivalent.
- **Primary Entities**:
  - **`{{ENTITY_1_NAME}}`**: `{{ENTITY_1_DESCRIPTION}}`
    - Key Attributes: `id`, `name`, `created_at`
  - **`{{ENTITY_2_NAME}}`**: `{{ENTITY_2_DESCRIPTION}}`
    - Key Attributes: `id`, `user_id`, `product_id`

### Key Relationships
- **User-Order**: One-to-Many. A user can have multiple orders.
- **Product-Category**: Many-to-Many. A product can belong to multiple categories.

## Technology Adaptations
- **SQL**: Schemas are enforced by the database. Use migrations for changes.
- **NoSQL (Document)**: Schema is flexible. Document structure should be consistent within the application logic.
- **Graph**: Focus on the nodes (entities) and edges (relationships).

## Validation
- [ ] The ERD accurately reflects the current database schema.
- [ ] Naming conventions for tables and columns are followed.
- [ ] Relationships and constraints are correctly defined.

## Updates
- Update whenever a database migration is created or a data model changes.
- Frequency: On every schema change.
