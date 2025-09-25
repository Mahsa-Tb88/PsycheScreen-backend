declare global{
    var MONGO_URI:string;
    var SECRET_KEY:string;
    var PORT:number;

    var SUCCESS_MSG:string;

    namespace NodeJS {
        interface ProcessEnv {
          MONGO_URI: string;
          API_SENDGRIND: string;
          SECRET_KEY: string;
          PORT: string;

        }
      }
}

export{}
