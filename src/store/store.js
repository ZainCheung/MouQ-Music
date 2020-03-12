const STORAGE_KEY = 'tabale-vuejs'//名字随便起
const LISTINFO = 'listinfo'
export default {//向往输出，以便组件接收
	fetch() {//我们定义的获取数据的方法
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
		|| '[]')
	},
	save(items) {//我们定义的保存数据的方法
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	},
	getsonglist(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)
		|| '[]')
	},
	getinfo(){
		return JSON.parse(window.localStorage.getItem(LISTINFO)
		|| null)
	},
	updatainfo(info){
		window.localStorage.setItem(LISTINFO, JSON.stringify(info))
	}
	
}
