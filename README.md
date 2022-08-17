

# Learn Monorepo + Cypress
Builds off of https://github.com/danielkwok21/learnMonorepo for monoreport portion  
This repo would focus more on cypress

# Key takeaways
Uses yarn workspace

Each application would no longer have
- node_modules
- git repo  
  
All of these would be referred to the root's.

# Steps
## Setup cypress
1. Install
```bash
# cd to root

# Install cypress at root dependency
yarn add -W cypress
```

2. Open cypress
```bash
yarn run cypress open
```
3. Create an empty spec

## Setup github action
1. Create [./.github/workflows/test.yml](./github/workflows/test.yml) according to https://github.com/cypress-io/github-action
