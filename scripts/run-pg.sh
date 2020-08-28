docker run --rm -e POSTGRES_USER=tryfle -e POSTGRES_PASSWORD=tryfle -e POSTGRES_DB=tryfle -p 5436:5432 -v tryfle:/var/lib/postgresql/data --name=tryfle_development_db postgres:11
