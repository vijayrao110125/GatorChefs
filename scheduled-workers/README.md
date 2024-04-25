---
description: Quick Start Guide
---

# 🕒 Scheduled Workers

## Context & Stack

All scheduled workers (cron jobs) used in the project, have been developed on the **CloudFlare Workers** platform.

The application currently uses only one worker, and its purpose and requirements can be found in its specific guide, located here:
* [chuck-NORRIS](./chuck-NORRIS/README.md)

## Running Locally

The wrangler tooling is required for running the worker locally, install using this command:

```bash
npm i -g wrangler@latest
```

`cd` into the folder of the desired worker and Install dependencies:

```bash
npm install
```

Add requisite environment variables, as per the guide of the specific worker, in the `wrangler.toml` file. Variables must be added in the following format:

```properties
[vars]
VAR_1 = "..."
VAR_2 = "..."
```

Run the worker using the following command:

```bash
wrangler dev --local
```

To trigger the worker manually visit the following link:

```url
http://localhost:[PORT]/cdn-cgi/mf/scheduled
```

Replace `[PORT]` with the assigned local port.
