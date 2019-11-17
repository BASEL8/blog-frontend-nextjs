import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig()
export const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT
export const NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT
export const FB_APP_ID_ = publicRuntimeConfig.FB_APP_ID
export const GOOGLE_CLINT_ID = publicRuntimeConfig.GOOGLE_CLINT_ID
export const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME