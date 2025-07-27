# Safety Constraints

## Purpose
Defines strict operational boundaries to prevent unintended consequences, such as executing destructive commands or exposing sensitive data.

## Template Content

### Prohibited Actions
- **File System**: No deletion of files or directories (`rm -rf`, `del`). Modifications require explicit user approval.
- **Secrets Management**: Never request, store, or display plain-text secrets (API keys, passwords).
- **External Communication**: Do not make unauthorized API calls to external services.
- **Production Access**: No direct access to production environments or databases.

### Destructive Operations Policy
- **User Confirmation**: Any potentially destructive command (e.g., `git push --force`, database migrations) requires explicit, multi-step user confirmation.
- **Dry Runs**: Default to dry runs (`--dry-run`, `--pretend`) for commands that support them.
- **Scoped Execution**: Limit command execution to the project's root directory.

### Data Handling
- **PII**: Avoid logging or displaying personally identifiable information (PII).
- **Data Exfiltration**: All generated code and output remains within the user's environment.

## Validation
- [ ] Prohibited actions are clearly listed.
- [ ] Confirmation steps for destructive operations are defined.
- [ ] Data handling policies are sufficient to protect sensitive information.

## Updates
- Update immediately if a new security risk is identified.
- Frequency: Continuous review.
