module.exports = {
  assetsDir: 'static',
  runtimeCompiler: true,
  publicPath: './',
  devServer: {
      proxy: {
        '/api': {
          target: 'https://api.qq.jsososo.com/',
		  // https://api.qq.jsososo.com/
          ws: true,
          changeOrigin: true,
		  pathRewrite: {
		    '^/api': ''          //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
		  }
        },
		'/download': {
		  target: 'http://122.226.161.16/amobile.music.tc.qq.com/',
		  ws: true,
		  changeOrigin: true,
		  pathRewrite: {
		    '^/download': ''          //这里理解成用‘/download’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://10.1.5.11:8080/xxx/duty?time=2017-07-07 14:57:22'，直接写‘/api/xxx/duty?time=2017-07-07 14:57:22’即可
		  }
		},
      }
    },

}