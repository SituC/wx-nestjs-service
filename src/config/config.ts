export const config = {
  /**
   * 服务环境：开发-development; 测试-test; 生产-production
   * 请在.env.*文件中修改环境变量配置
   * 您也可以通过docker配置环境变量
  */
  env: process.env.NODE_ENV || 'development',
  webUrl: process.env.APP_HOST || 'http://localhost:3000', // 本服务域名
  encryptMode: true, // 与微信交互是否加密，如果选择了安全模式则需要开启
  swagger: '/api', // swagger地址前缀
  token: process.env.TOKEN || '', // 微信公众号加密token
  encodingAESKey: process.env.ENCODEING_AES_KEY || '', // 微信公众号AES密钥
  appId: process.env.WX_APP_ID || '',
  appSecret: process.env.WX_APP_SECRET || '',
} as const

