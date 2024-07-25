export interface Template {
  [key: string]: template;
}
export type template = { id: string; title: string; snippets: string };

export const readmeTemplates: Template = {
  basicDocumentation: {
    id: "basicDocumentation",
    title: "Basic Documentation",
    snippets: `
## Introduction

A brief introduction to your project.

## Installation

\`\`\`bash
npm install my-project
cd my-project
\`\`\`

## Usage

\`\`\`javascript
import { myFunction } from 'my-project';

myFunction();
\`\`\`

## API Reference

\`\`\`http
GET /api/v1/example
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\`| \`string\` | **Required**. Your API key |
`,
  },
  hooksDocumentation: {
    id: "hooksDocumentation",
    title: "Hooks Documentation",
    snippets: `
## Introduction

Overview of hooks provided by the library.

## Installation

\`\`\`bash
npm install my-hooks-library
cd my-hooks-library
\`\`\`

## useExampleHook

### Description

A description of what \`useExampleHook\` does.

### Usage

\`\`\`javascript
import { useExampleHook } from 'my-hooks-library';

const Component = () => {
  const [state, setState] = useExampleHook(initialValue);

  return (
    <div>{state}</div>
  );
}
\`\`\`

## useAnotherHook

### Description

A description of what \`useAnotherHook\` does.

### Usage

\`\`\`javascript
import { useAnotherHook } from 'my-hooks-library';

const Component = () => {
  const { data, error } = useAnotherHook();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>{data}</div>
  );
}
\`\`\`
`,
  },
  apiDocumentation: {
    id: "apiDocumentation",
    title: "API Documentation",
    snippets: `
## Introduction

Overview of the API and its usage.

## Authentication

Description of how to authenticate with the API.

### Request

\`\`\`http
POST /api/v1/auth
\`\`\`

### Parameters

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`username\`| \`string\` | **Required**. Your username |
| \`password\`| \`string\` | **Required**. Your password |

### Response

\`\`\`json
{
  "token": "your-api-token"
}
\`\`\`

## Endpoints

### Get Example

\`\`\`http
GET /api/v1/example
\`\`\`

#### Parameters

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\`| \`string\` | **Required**. Your API key |

#### Response

\`\`\`json
{
  "data": "example data"
}
\`\`\`
`,
  },
  installationGuide: {
    id: "installationGuide",
    title: "Installation Guide",
    snippets: `
## Introduction

A brief introduction to the installation guide.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of \`node.js\` and \`npm\`.
- You have a \`<Windows/Linux/Mac>\` machine.

## Installation

### Step 1: Clone the repo

\`\`\`bash
git clone https://github.com/your-repo.git
cd your-repo
\`\`\`

### Step 2: Install dependencies

\`\`\`bash
npm install
\`\`\`

### Step 3: Configure environment variables

Create a \`.env\` file and add the following:

\`\`\`env
API_KEY=your_api_key
API_SECRET=your_api_secret
\`\`\`

### Step 4: Run the application

\`\`\`bash
npm run start
\`\`\`
`,
  },
  contributingGuide: {
    id: "contributingGuide",
    title: "Contributing Guide",
    snippets: `
## Introduction

Thank you for considering contributing to this project!

## How to Contribute

### Step 1: Fork the project

Fork the project on GitHub.

### Step 2: Clone the project

\`\`\`bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
\`\`\`

### Step 3: Create a branch

\`\`\`bash
git checkout -b feature/your-feature-name
\`\`\`

### Step 4: Make changes

Make your changes to the codebase.

### Step 5: Commit changes

\`\`\`bash
git add .
git commit -m "Add your commit message"
\`\`\`

### Step 6: Push changes

\`\`\`bash
git push origin feature/your-feature-name
\`\`\`

### Step 7: Create a pull request

Create a pull request on GitHub.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.
`,
  },
  projectOverview: {
    id: "projectOverview",
    title: "Project Overview",
    snippets: `
## Introduction

A brief introduction to the project.

## Features

- Feature 1
- Feature 2
- Feature 3

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Documentation

[Documentation](https://linktodocumentation.com)

## Installation

\`\`\`bash
npm install my-project
cd my-project
\`\`\`

## Usage

\`\`\`javascript
import { myFunction } from 'my-project';

myFunction();
\`\`\`

## API Reference

\`\`\`http
GET /api/v1/example
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\`| \`string\` | **Required**. Your API key |
`,
  },
  fullDocumentation: {
    id: "fullDocumentation",
    title: "Full Documentation",
    snippets: `
## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Features](#features)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction

A brief introduction to your project.

## Installation

\`\`\`bash
npm install my-project
cd my-project
\`\`\`

## Usage

\`\`\`javascript
import { myFunction } from 'my-project';

myFunction();
\`\`\`

## API Reference

\`\`\`http
GET /api/v1/example
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\`| \`string\` | **Required**. Your API key |

## Features

- Feature 1
- Feature 2
- Feature 3

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

## Contributing

Contributions are always welcome! Please follow the \`code of conduct\` guidelines.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

For any inquiries, please reach out to [email@example.com](mailto:email@example.com).
`,
  },
  usageGuide: {
    id: "usageGuide",
    title: "Usage Guide",
    snippets: `
## Introduction

A brief introduction to using the project.

## Prerequisites

Ensure you have met the following requirements:

- You have installed the latest version of \`node.js\` and \`npm\`.

## Installation

\`\`\`bash
npm install my-project
cd my-project
\`\`\`

## Basic Usage

\`\`\`javascript
import { myFunction } from 'my-project';

myFunction();
\`\`\`

## Advanced Usage

\`\`\`javascript
import { myAdvancedFunction } from 'my-project';

myAdvancedFunction({ option: true });
\`\`\`

## API Reference

\`\`\`http
GET /api/v1/advanced
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\`| \`string\` | **Required**. Your API key |
`,
  },
  gettingStarted: {
    id: "gettingStarted",
    title: "Getting Started",
    snippets: `
## Getting Started

Instructions to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed the latest version of \`node.js\` and \`npm\`.

### Installation

1. Clone the repo

\`\`\`bash
git clone https://github.com/your-repo.git
cd your-repo
\`\`\`

2. Install dependencies

\`\`\`bash
npm install
\`\`\`

3. Run the application

\`\`\`bash
npm run start
\`\`\`
`,
  },
  deploymentGuide: {
    id: "deploymentGuide",
    title: "Deployment Guide",
    snippets: `
## Deployment

Instructions to deploy the project.

### Prerequisites

Ensure you have met the following requirements:

- You have a deployment environment set up (e.g., Heroku, AWS, etc.).

### Steps

1. Build the project

\`\`\`bash
npm run build
\`\`\`

2. Deploy to your environment

For example, to deploy to Heroku:

\`\`\`bash
heroku create
git push heroku main
\`\`\`
`,
  },
  troubleshootingGuide: {
    id: "troubleshootingGuide",
    title: "Troubleshooting Guide",
    snippets: `
## Troubleshooting

Common issues and how to resolve them.

### Issue 1: Problem description

#### Solution

Steps to resolve the issue.

### Issue 2: Problem description

#### Solution

Steps to resolve the issue.

### Issue 3: Problem description

#### Solution

Steps to resolve the issue.
`,
  },
  faq: {
    id: "faq",
    title: "FAQ",
    snippets: `
## FAQ

Frequently asked questions and their answers.

### Question 1

Answer to question 1.

### Question 2

Answer to question 2.

### Question 3

Answer to question 3.
`,
  },
  acknowledgements1: {
    id: "acknowledgements",
    title: "Acknowledgements",
    snippets: `
## Acknowledgements

We would like to thank the following people and projects:

- [Awesome Project](https://github.com/awesome/project)
- [Another Great Project](https://github.com/great/project)
`,
  },
  changelog: {
    id: "changelog",
    title: "Changelog",
    snippets: `
## Changelog

All notable changes to this project will be documented in this file.

### [Unreleased]

- Initial release
`,
  },
  codeOfConduct: {
    id: "codeOfConduct",
    title: "Code of Conduct",
    snippets: `
## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

### Our Pledge

In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable behavior and are expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting the project team at [email@example.com](mailto:email@example.com). All complaints will be reviewed and investigated and will result in a response that is deemed necessary and appropriate to the circumstances.
`,
  },
  support: {
    id: "support",
    title: "Support",
    snippets: `
## Support

For support, please contact [email@example.com](mailto:email@example.com) or join our Slack channel.
`,
  },
  license: {
    id: "license",
    title: "License",
    snippets: `
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
`,
  },
  roadmap: {
    id: "roadmap",
    title: "Roadmap",
    snippets: `
## Roadmap

Here are the planned features and improvements for this project:

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
`,
  },
  contributing: {
    id: "contributing",
    title: "Contributing",
    snippets: `
## Contributing

Contributions are always welcome! Please follow the \`code of conduct\` guidelines and create a pull request for any changes.

### Steps to Contribute

1. Fork the project
2. Create a branch for your feature or bugfix
3. Make your changes
4. Commit your changes
5. Push to your branch
6. Create a pull request

Please ensure your code adheres to the existing code style and includes relevant tests.
`,
  },
  deployment: {
    id: "deployment",
    title: "Deployment",
    snippets: `
## Deployment

Instructions for deploying the project.

### Prerequisites

Ensure you have the following:

- A server or cloud environment set up (e.g., AWS, Heroku).

### Steps

1. Build the project

\`\`\`bash
npm run build
\`\`\`

2. Deploy to the environment

For example, using Heroku:

\`\`\`bash
heroku create
git push heroku main
\`\`\`
`,
  },
  architecture: {
    id: "architecture",
    title: "Architecture",
    snippets: `
## Architecture

Overview of the project's architecture.

### System Architecture

![System Architecture](https://via.placeholder.com/468x300?text=System+Architecture+Diagram)

### Components

- Component 1: Description
- Component 2: Description
- Component 3: Description

### Data Flow

Description of how data flows through the system.
`,
  },
  bestPractices: {
    id: "bestPractices",
    title: "Best Practices",
    snippets: `
## Best Practices

Follow these best practices when contributing to this project:

- Write clear and concise commit messages
- Write unit tests for your code
- Follow the project's code style and guidelines
- Document your code and any changes made
`,
  },
  glossary: {
    id: "glossary",
    title: "Glossary",
    snippets: `
## Glossary

### Term 1

Definition of term 1.

### Term 2

Definition of term 2.

### Term 3

Definition of term 3.
`,
  },
  acknowledgements2: {
    id: "acknowledgements",
    title: "Acknowledgements",
    snippets: `
## Acknowledgements

We would like to thank the following people and projects:

- [Awesome Project](https://github.com/awesome/project)
- [Another Great Project](https://github.com/great/project)
`,
  },
  dependencies: {
    id: "dependencies",
    title: "Dependencies",
    snippets: `
## Dependencies

List of dependencies required for this project.

### Runtime Dependencies

- Dependency 1: Description
- Dependency 2: Description

### Development Dependencies

- Dependency 1: Description
- Dependency 2: Description
`,
  },
  acknowledgements3: {
    id: "acknowledgements",
    title: "Acknowledgements",
    snippets: `
## Acknowledgements

We would like to thank the following people and projects:

- [Awesome Project](https://github.com/awesome/project)
- [Another Great Project](https://github.com/great/project)
`,
  },
  contact: {
    id: "contact",
    title: "Contact",
    snippets: `
## Contact

For any inquiries, please reach out to [email@example.com](mailto:email@example.com).
`,
  },
  relatedProjects: {
    id: "relatedProjects",
    title: "Related Projects",
    snippets: `
## Related Projects

Here are some related projects:

- [Awesome Project](https://github.com/awesome/project)
- [Another Great Project](https://github.com/great/project)
`,
  },
  sponsors: {
    id: "sponsors",
    title: "Sponsors",
    snippets: `
## Sponsors

We would like to thank the following sponsors for their support:

- [Sponsor 1](https://linktosponsor1.com)
- [Sponsor 2](https://linktosponsor2.com)
`,
  },
  releaseNotes: {
    id: "releaseNotes",
    title: "Release Notes",
    snippets: `
## Release Notes

### [Version 1.0.0]

- Initial release

### [Version 1.1.0]

- Feature 1 added
- Feature 2 improved
`,
  },
  gettingHelp: {
    id: "gettingHelp",
    title: "Getting Help",
    snippets: `
## Getting Help

If you need help with this project, please check the following resources:

- [Documentation](https://linktodocumentation.com)
- [FAQ](#faq)
- [Support](#support)
`,
  },
  donations: {
    id: "donations",
    title: "Donations",
    snippets: `
## Donations

If you find this project useful, consider donating to support its development:

- [PayPal](https://www.paypal.com/)
- [Patreon](https://www.patreon.com/)
`,
  },
  acknowledgements4: {
    id: "acknowledgements",
    title: "Acknowledgements",
    snippets: `
## Acknowledgements

We would like to thank the following people and projects:

- [Awesome Project](https://github.com/awesome/project)
- [Another Great Project](https://github.com/great/project)
`,
  },
  techStack: {
    id: "techStack",
    title: "Tech Stack",
    snippets: `
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express
`,
  },
  colorReference: {
    id: "colorReference",
    title: "Color Reference",
    snippets: `
## Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Primary Color  | ![#3498db](https://via.placeholder.com/10/3498db?text=+) #3498db |
| Secondary Color| ![#2ecc71](https://via.placeholder.com/10/2ecc71?text=+) #2ecc71 |
`,
  },
};
