import { DataSource, DataSourceOptions } from "typeorm";
export const dataStoreOptions:DataSourceOptions={
    type:"mysql",
    host:"localhost",
    database:"plateshare",
    username:"user",
    synchronize: true,
    debug: false,
    logging: false,
    trace: false,
    password:"password",
    entities:[__dirname + '/entity/**/*.entity.{js,ts}'],
    migrations:[__dirname + '/migrations/**/*.entity.{js,ts}']
}

export const AppDataStore=new DataSource(dataStoreOptions)