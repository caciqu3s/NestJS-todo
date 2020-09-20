# NestJS Task (todo) API example
In this repo, you can see an api builded with NestJS, TypeORM and MySQL DB. To run it, follow those instructions.

## How to run
1) Create a docker container of mysql:

    docker run --name some-mysql -e MYSQL_USER=admin -e MYSQL_PASSWORD=admin -e MYSQL_DATABASE=test -e MYSQL_ROOT_PASSWORD=P@ssw0rd -p 3306:3306  -d mysql:5

2) Clone the repository in your workspace
3) Install dependencies with ***npm i***
4) Run locally with ***npm run start:dev***
