# surfbot

a slack bot to check the surf

## Node version

This is deployed to AWS lambda using the v6.10.3 Javascript runtime, so I recommend using the same version locally.  Here's an example if you use NVM for version management:

```bash
nvm install v6.10.3
echo "v6.10.3" > .nvmrc
nvm use
```

## Setup

Install Javascript dependencies:

```bash
yarn install
```

## Build & Deploy

Bundle the code into a zip file, and deploy the stack in AWS:

*Note: You need an s3 bucket to upload the zip file to.  Edit your package.json file and replace ENTER_S3_BUCKET_HERE with the bucket name*

*Note: requires aws command line utility, which can be installed with homebrew (brew install awscli)*

```bash
yarn run build
yarn run deploy
```

## Development

You can run the lambda handlers locally with jeffws-dev-server:

```bash
yarn run start
```

Then connect to localhost:3000
