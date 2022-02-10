# JSON to Env variables

This package converts your JSON file to environment variable format. This executable also provides `process.env.<key>` for you to copy in your code.

## Installation

```bash
npm install @syedbasim/jsenv
```

## Usage Syntax

```bash
jsenv <input file> <output file> -w -p <?prefix>
```

_Note: `-w` (write) and `-p <prefix>` (prefix) are optional. See [Prefix](#passing-a-prefix) and [Append & Write modes](#append--write-mode) for more detail._

## Example

`file.json`

```json
{
	"port": 8000,
	"projectName": "json-to-env-var"
}
```

In Terminal:

```bash
jsenv file.json .env
```

Will output in `.env` file:

```bash
PORT=8000
PROJECT_NAME="json-to-env-var"
```

Also, the terminal will generate code which you can copy and paste in your JS/TS files:

```javascript
{
        port: process.env.PUBLIC_VAR_PORT,
        projectName: process.env.PUBLIC_VAR_PROJECT_NAME
}
```

## Passing a prefix

```bash
jsenv file.json .env -p public_var
```

Will output to:

```bash
PUBLIC_VAR_PORT=8000
PUBLIC_VAR_PROJECT_NAME="json-to-env-var"
```

## Append & Write mode

By default, this executable will _append_ to the output file. If you want to write to it (i.e. remove any existing data in the output file and then writing), you can specify `-w` flag.

```bash
jsenv file.json .env -w
```

```bash
jsenv file.json .env -w -p prefix
```
