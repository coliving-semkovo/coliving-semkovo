
# Node.js, TypeScript & PostgreSQL (javascript-node-postgres)

Develop Node.js based applications in TypeScript, with PostgreSQL as the database. Includes Node.js and TypeScript in a container linked to a Postgres DB container.

## Using this devcontainer definition

The definition is almost exactly the same as the [standard Node.js & PostgreSQL template](https://github.com/devcontainers/templates/tree/main/src/javascript-node-postgres), with the only differences being that the underlying container image is
the [Node.js and TypesScript image](https://github.com/devcontainers/images/tree/main/src/typescript-node) rather than the [Node.js image](https://github.com/devcontainers/images/tree/main/src/javascript-node).

This definition creates two containers, one for Node.js with TypeScript, and one for PostgreSQL. You will be connected to the Node.js with TypeScript container, and from within that container the PostgreSQL container will be available on **`localhost`** port 5432. The default database is named `postgres` with a user of `postgres` whose password is `postgres`, and if desired this may be changed in `docker-compose.yml`. Data is stored in a volume named `postgres-data`.

While the definition itself works unmodified, it uses the `mcr.microsoft.com/devcontainers/typescript-node` image which includes `git`, `zsh`, [Oh My Zsh!](https://ohmyz.sh/), a non-root `vscode` user with `sudo` access, and a set of common dependencies for development.

You also can connect to PostgreSQL from an external tool when connected to the Dev Container from a local tool  by updating `.devcontainer/devcontainer.json` as follows:

```json
"forwardPorts": [ "5432" ]
```

### Adding another service

You can add other services to your `docker-compose.yml` file [as described in Docker's documentaiton](https://docs.docker.com/compose/compose-file/#service-configuration-reference). However, if you want anything running in this service to be available in the container on localhost, or want to forward the service locally, be sure to add this line to the service config:

```yaml
# Runs the service on the same network as the database container, allows "forwardPorts" in devcontainer.json function.
network_mode: service:db
```

### Using the forwardPorts property

By default, web frameworks and tools often only listen to localhost inside the container. As a result, we recommend using the `forwardPorts` property to make these ports available locally.

```json
"forwardPorts": [9000]
```

The `ports` property in `docker-compose.yml` [publishes](https://docs.docker.com/config/containers/container-networking/#published-ports) rather than forwards the port. This will not work in a cloud environment like Codespaces and applications need to listen to `*` or `0.0.0.0` for the application to be accessible externally. Fortunately the `forwardPorts` property does not have this limitation.

---
