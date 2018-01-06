# surfbot

a slack bot to check the surf

## Prereqs

[Install](https://docs.aws.amazon.com/cli/latest/userguide/installing.html) the aws command line client and [configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html) it to use your AWS credentials.

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

## Testing

Run the tests (currently only supports linting, but is still helpful):

```bash
yarn run test
```

