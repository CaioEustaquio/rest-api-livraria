import env from "env-var";

const config = {

    dbConnectionString: env.get("DB_CONNECTION_STRING").required().asString()
}

export default config;