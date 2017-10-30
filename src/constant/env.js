const ENV_CONFIG = {
  production: {
    moduleA: 'http://127.0.0.1:8001/api',
    moduleB: 'http://127.0.0.1:8002/api',
    sso: 'http://127.0.0.1:8003/api',
  },
  testing: {
    moduleA: 'http://127.0.0.1:8001/api',
    moduleB: 'http://127.0.0.1:8002/api',
    sso: 'http://127.0.0.1:8003/api',
  },
  development: {
    moduleA: 'http://127.0.0.1:8001/api',
    moduleB: 'http://127.0.0.1:8002/api',
    sso: 'http://127.0.0.1:8003/api',
  },
};
export const curEnv = process.env.NODE_ENV || 'development';
export default ENV_CONFIG[curEnv];
console.log('curEnv is [%s]', curEnv);
