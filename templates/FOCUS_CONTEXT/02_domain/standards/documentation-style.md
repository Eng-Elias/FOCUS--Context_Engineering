# Documentation Style Guide

## Purpose
Sets the standard for writing and maintaining clear, helpful, and consistent project documentation.

## Template Content

### Code Comments
- **When to comment**: Comment on the *why*, not the *what*. Explain complex logic, business rules, or trade-offs.
- **Format**: Use `{{COMMENT_FORMAT}}` (e.g., JSDoc, reStructuredText for Python) for functions and classes.
- **Example**:
  ```javascript
  /**
   * Calculates the total price including tax.
   * @param {number} price - The base price.
   * @param {string} region - The two-letter region code.
   * @returns {number} The final price.
   */
  ```

### READMEs
- **Module READMEs**: Every module (`src/modules/*`) should have a `README.md` explaining its purpose and usage.
- **Content**: Include a brief description, setup instructions, and usage examples.

### Wiki / Knowledge Base
- **Tool**: `{{WIKI_TOOL}}` - e.g., Confluence, Notion, GitHub Wiki.
- **Structure**: Organize pages by domain/feature.

## Validation
- [ ] Public functions and classes have documentation comments.
- [ ] Complex code blocks are explained.
- [ ] Module READMEs are present and up-to-date.

## Updates
- Update documentation whenever the code it describes changes.
- Frequency: Continuously, as part of the development process.
