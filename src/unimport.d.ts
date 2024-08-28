export {}
declare global {
  const logSomething: typeof import('./utils/some')['logSomething']
}