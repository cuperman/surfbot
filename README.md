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

## Configuration

Create a .env file with values for the following secret keys:

```bash
# .env
SLACK_OAUTH_ENDPOINT="SLACK_OAUTH_ENDPOINT"
SLACK_WEBHOOK_ENDPOINT="SLACK_WEBHOOK_ENDPOINT"
SLACK_CLIENT_ID="SLACK_CLIENT_ID"
SLACK_CLIENT_SECRET="SLACK_CLIENT_SECRET"
SURFLINE_BASE_URL="SURFLINE_BASE_URL"
```

Create a .aws.json file with values for the following secret keys:

```json
{
  "AwsProfile": "default",
  "S3Bucket": "my-bucket-for-lambda-code"
}
```

## Build & Deploy

Bundle the code into a zip file, and deploy the stack in AWS:

*Note: you need an s3 bucket to upload the zip file to.  Edit your package.json file and replace ENTER_S3_BUCKET_HERE with the bucket name*

*Note: you need to update the environment variables in template.yaml before deploying*

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

Then connect to [localhost:3000](http://locahost:3000)

Or try the API explorer that you get with jeffws-dev-server at [localhost:3000/api_explorer](http://localhost:3000/api_explorer)
