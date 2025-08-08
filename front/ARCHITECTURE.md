# Frontend Architecture Documentation

## Overview

This document outlines the refactored frontend architecture for the Next Big Things application, implementing clean, scalable, and maintainable code following industry best practices.

## Architecture Principles

### Applied Principles

- **DRY (Don't Repeat Yourself)**: Eliminated code duplication through reusable components and utilities
- **KISS (Keep It Simple, Stupid)**: Simple, focused components with single responsibilities
- **SOLID Principles**:
  - Single Responsibility: Each component has one clear purpose
  - Open/Closed: Components are extensible through props and composition
  - Dependency Inversion: Services abstract data layer concerns

### Design Patterns

- **Service Layer Pattern**: Centralized data operations in `TechnologyService`
- **Component Composition**: Modular, reusable UI components
- **Error Boundary Pattern**: Graceful error handling with fallbacks

## Directory Structure

```
app/
├── components/
│   ├── layout/           # Layout-specific components
│   │   ├── Navigation.tsx
│   │   ├── PageHeader.tsx
│   │   └── index.ts
│   ├── technology/       # Domain-specific components
│   │   ├── TechnologyCard.tsx
│   │   ├── TechnologyDetail.tsx
│   │   ├── TechnologyImage.tsx
│   │   ├── TechnologyList.tsx
│   │   └── index.ts
│   ├── ui/              # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── ImpactScore.tsx
│   │   └── index.ts
│   ├── Footer.tsx       # Global components
│   └── Header.tsx
├── lib/
│   ├── services/        # Business logic layer
│   │   ├── technology.service.ts
│   │   └── index.ts
│   ├── constants.ts     # Application constants
│   ├── strapi.ts       # GraphQL client
│   ├── technologies.ts # Deprecated (backwards compatibility)
│   ├── types.ts        # TypeScript definitions
│   └── utils.ts        # Utility functions
├── technologies/       # Technology pages
│   ├── [slug]/
│   │   └── page.tsx
│   └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

## Component Architecture

### UI Components (`/components/ui/`)

#### Badge Component

- **Purpose**: Consistent labeling and categorization
- **Features**: Multiple variants (default, secondary, accent), size options
- **Usage**: Technology categories, maturity levels

#### ImpactScore Component

- **Purpose**: Visual representation of technology impact scores
- **Features**: Color-coded progress bars, configurable display options
- **Logic**: Centralized color calculation based on score thresholds

#### ErrorBoundary

- **Purpose**: Graceful error handling
- **Features**: Development error details, retry functionality
- **Implementation**: React class component with proper TypeScript typing

### Technology Components (`/components/technology/`)

#### TechnologyCard

- **Purpose**: Technology list item display
- **Features**: Hover effects, responsive layout, integrated badges and impact scores
- **Composition**: Uses Badge, ImpactScore, and TechnologyImage components

#### TechnologyDetail

- **Purpose**: Detailed technology view
- **Features**: Full content display, SEO-optimized structure
- **Composition**: Modular sub-components for header, meta, image, and content

#### TechnologyImage

- **Purpose**: Consistent image handling
- **Features**: Fallback placeholder, responsive sizing, optimization
- **Logic**: Handles missing images gracefully

#### TechnologyList

- **Purpose**: Technology collection display
- **Features**: Empty states, responsive grid
- **Error Handling**: Graceful degradation for data issues

### Layout Components (`/components/layout/`)

#### Navigation

- **Purpose**: Site navigation
- **Features**: Active state management, configurable items
- **Accessibility**: Proper ARIA labels and keyboard navigation

#### PageHeader

- **Purpose**: Consistent page headers
- **Features**: Title, description, optional children
- **Flexibility**: Extensible through children prop

## Service Layer

### TechnologyService (`/lib/services/technology.service.ts`)

**Responsibilities:**

- Data fetching and transformation
- Error handling and logging
- GraphQL query management
- Response normalization

**Methods:**

- `getTechnologies()`: Fetch all technologies
- `getTechnologyBySlug(slug)`: Fetch specific technology
- `getAllSlugs()`: Fetch slugs for static generation

**Benefits:**

- Centralized data logic
- Consistent error handling
- Easy testing and mocking
- Clear separation of concerns

## Utility Functions (`/lib/utils.ts`)

### Core Utilities

- `cn()`: Tailwind CSS class merging
- `formatDate()`: Consistent date formatting
- `normalizeImageUrl()`: Image URL normalization
- `clamp()`: Number range validation
- `truncateText()`: Text truncation with ellipsis

### Benefits

- Reusable across components
- Consistent behavior
- Easy to test and maintain

## Constants Management (`/lib/constants.ts`)

### Organized Constants

- **APP_CONFIG**: Application metadata
- **IMPACT_SCORE_THRESHOLDS**: Score categorization
- **IMPACT_SCORE_COLORS**: Color mappings
- **DATE_FORMATS**: Date formatting options
- **ROUTES**: Application routing
- **API_CONFIG**: API configuration

### Benefits

- Single source of truth
- Easy configuration changes
- Type safety
- Prevents magic numbers/strings

## Error Handling Strategy

### Levels of Error Handling

1. **Component Level**: ErrorBoundary components
2. **Service Level**: Try-catch with meaningful error messages
3. **UI Level**: Error fallbacks
4. **Development**: Detailed error information in dev mode

### Implementation

- React Error Boundaries for component crashes
- Service layer error transformation
- User-friendly error messages
- Graceful degradation

## Performance Optimizations

### Implemented Optimizations

- **Static Generation**: Pre-rendered pages for better performance
- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic with Next.js App Router
- **Revalidation**: 60-second ISR for fresh content

### Bundle Analysis

- Shared chunks optimization
- Tree shaking for unused code
- Optimized imports with barrel exports

## Type Safety

### TypeScript Implementation

- Strict type checking
- Interface definitions for all data structures
- Proper generic usage in services
- Component prop typing
- Error boundary typing improvements

### Benefits

- Compile-time error detection
- Better IDE support
- Self-documenting code
- Refactoring safety

## Testing Strategy

### Testable Architecture

- Pure utility functions
- Isolated components
- Mockable services
- Predictable state management

### Recommended Testing

- Unit tests for utilities and services
- Component testing with React Testing Library
- Integration tests for user flows
- E2E tests for critical paths

## Migration Notes

### Backwards Compatibility

- Old `technologies.ts` file marked as deprecated
- Wrapper functions provide migration path
- Console warnings for deprecated usage
- Clear migration documentation

### Breaking Changes

- Component imports now use barrel exports
- Service layer replaces direct API calls
- Constants replace hardcoded values

## Future Enhancements

### Potential Improvements

- State management (Zustand/Redux) for complex state
- React Query for advanced caching
- Storybook for component documentation
- Automated testing setup
- Performance monitoring
- Accessibility improvements

### Scalability Considerations

- Feature-based organization for larger teams
- Micro-frontend architecture support
- API versioning strategy
- Internationalization support

## Development Guidelines

### Code Standards

- Use TypeScript for all new code
- Follow component composition patterns
- Implement proper error handling
- Use constants instead of magic values
- Write self-documenting code with proper naming

### Component Guidelines

- Single responsibility principle
- Composition over inheritance
- Props interface definitions
- Default props when appropriate
- Proper error boundaries

### Performance Guidelines

- Optimize images and assets
- Use React.memo for expensive components
- Avoid unnecessary re-renders
- Monitor bundle size

This architecture provides a solid foundation for scalable, maintainable, and performant React applications while following industry best practices and design principles.
