# personal-blog

This is a simple web blog built in Nodejs, Typescript, EJS and SASS, this blog have a guest and an admin side, is the admin side you’ll be asked to login in order to add, edit or delete articles.

## project url

roadmap(https://roadmap.sh/projects/personal-blog)

## Prerequisites

- [NodeJS ^18.x](https://nodejs.org/en)
- [Node Package Manager (npm)](https://www.npmjs.com/)

## Installation

1. Clone this repository.

```shell
git clone https://github.com/GioLop/personal-blog
```

2. Enter to personal-blog directory.

```shell
cd personal-blog
```

3. Rename .env_example to .env and fill the variables.

```shell
SERVER_PORT=<PORT_TO_EXPOSE_APP>
ADMIN_USERNAME=<USER_NAME_TO_LOGIN>
ADMIN_PASSWORD=<PASSWORD_TO_LOGIN>
USERD_ID=<MOCK_VALUE>
SESSION_SECRET_KEY=<MOCK_VALUE>
```

4. Install dependencies.

 ```shell
npm install
```

4. Run project.

 ```shell
npm start
```

4. Or run dev mode.

 ```shell
npm run dev
```

5. Visit the url logged in your shell.

 ```shell
Server listening on http://localhost:PORT_DEFINED_IN_ENV_FILE
```