# Interaction Guidelines

## Purpose
Establishes clear protocols for communication, feedback, and collaboration between the user and the AI assistant.

## Template Content

### Communication Protocol
- **Query Structure**: Provide clear, specific requests. Use file paths and line numbers where applicable.
- **Feedback Loop**: Use `{{FEEDBACK_MECHANISM}}` (e.g., "/feedback" command, 👍/👎 reactions) to refine AI performance.
- **Error Handling**: When the AI makes a mistake, state the error clearly and provide the correct information.

### Key Commands
- **`/clear`**: Resets the immediate conversation context.
- **`/history`**: Summarizes the last `{{N}}` interactions.
- **`/request_change`**: Formally request a code modification.

### Session Management
- **Context Caching**: The AI will cache `{{CACHE_ITEMS}}` (e.g., key files, architectural diagrams) for the duration of the session.
- **User Preferences**: Use the `sessions/user-preferences.md` file to set persistent preferences.

## Validation
- [ ] Communication protocols are easy to follow.
- [ ] Key commands are documented and functional.
- [ ] Session management rules are understood.

## Updates
- Update when new interaction patterns emerge or tools are added.
- Frequency: Quarterly review or as needed.
