## Git Clone

```bash
git clone https://github.com/PPZeen/Docker_first_test.git
```

## Installation

install **node_modules** and **packages json**

In work directory **api-dev** and **api-test** 

```bash
npm init
npm i express, mysql2
```
## Open Docker Decktop before run docker-compose

In work directory **api-dev** and **api-test** 

```bash
docker-compose up -d --build
```
## Ports

- **8081** for api-dev
- **8082** for manage db-dev
- **8083** for api-test
- **8084** for manage db-test

## Manage DB - Create users table

go to **localhost:8082** or **localhost:8084** <br />
```diff
-if php access denied od error try reload page
```
- click db-[...]
- table name: **users** / number of columns: **3**
- **create database** uid (INT, Primary Key, select AI), name (VARCHARR 255), age (INT) and click **save**
- click **Insert** > fill name and age > click **GO** > successfull

## Test API connected DB 

- localhost:8081/users
- localhost:8083/users


