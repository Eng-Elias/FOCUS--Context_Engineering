# Deployment Topology

## Purpose
Illustrates the infrastructure setup for each environment, from development to production.

## Template Content

### Environment Overview
- **Diagram**: `{{LINK_TO_INFRA_DIAGRAM}}` - Link to a diagram showing the environments.

### Production Environment
- **Cloud Provider**: `{{CLOUD_PROVIDER}}` - e.g., AWS
- **Region**: `{{REGION}}` - e.g., us-east-1
- **Compute**: `{{COMPUTE_SERVICE}}` - e.g., EKS Cluster, Lambda Functions.
- **Database**: `{{DATABASE_SERVICE}}` - e.g., RDS for PostgreSQL.
- **CI/CD**: `{{CI_CD_TOOL}}` - e.g., GitHub Actions deploying to EKS.

### Staging Environment
- **Description**: Mirrors production but with smaller instance sizes. Used for pre-release testing.
- **URL**: `staging.{{APP_DOMAIN}}.com`

### Development Environment
- **Description**: Runs locally via Docker Compose (`docker-compose.yml`).

## Technology Adaptations
- **AWS**: Note key services (e.g., EC2, S3, VPC, IAM roles).
- **Azure**: Note key services (e.g., App Service, Blob Storage, VNet).
- **GCP**: Note key services (e.g., GKE, Cloud Storage, VPC).
- **Docker/Kubernetes**: Reference `Dockerfile`, manifest files and Helm chart locations.

## Validation
- [ ] The diagram accurately represents the production infrastructure.
- [ ] Key services for each environment are listed.
- [ ] CI/CD pipeline is correctly described.

## Updates
- Update when infrastructure is provisioned, decommissioned, or modified.
- Frequency: On any infrastructure change.
