

# Learn Monorepo + Cypress
Builds off of https://github.com/danielkwok21/learnMonorepo for monoreport portion  
This repo would focus more on cypress

# Quick start
1. Make a dummy commit and push
2. Go to the `Actions` tab of this repo, or click https://github.com/danielkwok21/learnMonorepoCypress/actions
3. Observe a new job ran succesfully
4. This job is the cypress test defined at [./cypress/e2e/spec.cy.js](./cypress/e2e/spec.cy.js)

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
3. Create a spec at [./cypress/e2e/spec.cy.js](./cypress/e2e/spec.cy.js)

## Setup github action
1. Create an action at [./.github/workflows/test.yml](./github/workflows/test.yml) according to https://github.com/cypress-io/github-action

## POC
1. git push to remote
2. Go to https://github.com/danielkwok21/learnMonorepoCypress/actions
3. Observe job being ran that runs cypress test