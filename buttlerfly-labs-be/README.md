# Butterfly Labs BE

## Installation

Optional: run mysql database with docker
```bash
docker-compose up
```

Install dependencies
```bash
npm i
```

Install typeorm depencies
```bash
npm i -g ts-node
npm run typeorm:run
```

## Running the app

Run the project in dev mode:
```bash
npm run start:dev 
```

## Database

Create new migration:
```bash
npm run typeorm:migrate UserTable
```

Revert migration:
```bash
npm run typeorm:revert
```
