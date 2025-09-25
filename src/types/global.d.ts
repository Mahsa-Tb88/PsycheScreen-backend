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

      namespace Express{
        interface Response {
          success(message?: string, body?: any, code?: number);
          fail(message?: string, code?: number, body?: any);
        }
      }
}

export{}
