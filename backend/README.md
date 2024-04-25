# Backend


sTgYa4kJzG2BPSS6k47qOZtBO8Dn1PXh2B_4uXDd


* [Getting Started](README.md#getting-started)
* [Prerequisites](README.md#prerequisites)
* [Deployment](README.md##deployment)

## Getting Started

Running this application requires [Node.js (Version 20+)](https://nodejs.org/en/download/).&#x20;

To run the application, [fulfill all prerequisites](./#prerequisites) and `cd` into the `/backend` folder.&#x20;

Add a [.env file](https://dev.to/dallington256/how-to-use-env-file-in-nodejs-578h) with all the [requisite environment variables](./#prerequisites).

Install dependencies, by running:

```bash
npm install
```

Run the app, using the following command:

```bash
node app
```

Please ensure that port `8080` is available and that you are not connected to a VPN before you run the app.&#x20;

If you need to change the default port, please set the `PORT` environment vairable to your desired port.

## Prerequisites

Setting up the Backend API requires an instance of MongoDB Atlas, Clerk, Cloudflare Images, an API key for the OpenAI Platform.

You'll also need to setup environment variables to point to these instances.

For updated information on environment variables and setting up these instances,
