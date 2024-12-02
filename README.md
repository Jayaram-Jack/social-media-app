types - Recommended File Structure
/src/types/

Core types and shared interfaces
Feature-specific types
API types
UI component types
/src/types/core/

models.ts - Base interfaces
enums.ts - Global enums
configs.ts - Global configuration interfaces
/src/types/features/[feature-name]/

[feature].config.ts - Feature configuration
[feature].model.ts - Feature data models
[feature].enum.ts - Feature enums
index.ts - Barrel exports
/src/types/api/

API request/response types
API client configurations
/src/types/ui/

Shared UI component interfaces
Theme and style types
Naming Conventions
Files:

Use .config.ts for configuration interfaces
Use .model.ts for data models
Use .enum.ts for enums
Use lowercase with hyphens for filenames
Interfaces:

Use PascalCase
Suffix with purpose (Config, Model, Props, etc.)
Be descriptive and specific
Enums:

Use PascalCase
Group related enums in feature-specific files
Use consistent naming patterns
Import Strategy
Use barrel exports (index.ts) for clean imports
Use absolute imports with aliases
Group imports by type (core, feature, UI)
