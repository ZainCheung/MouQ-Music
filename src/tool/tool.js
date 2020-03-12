var fs=require('fs');
export default {
	formatSize(byte){
		var size = "";
        if( byte <  1024 ){ //如果小于0.1KB转化成B
            size = byte.toFixed(2) + "B"; 	
        }else if(byte <  1024 * 1024 ){//如果小于0.1MB转化成KB
            size = (byte / 1024).toFixed(2) + "KB";			
        }else if(byte <  1024 * 1024 * 1024){ //如果小于0.1GB转化成MB
            size = (byte / (1024 * 1024)).toFixed(2) + "MB";
        }else{ //其他转化成GB
            size = (byte / (1024 * 1024 * 1024)).toFixed(2) + "GB";
        }
        
        var sizestr = size + ""; 
        var len = sizestr.indexOf(".");
        var dec = sizestr.substr(len + 1, 2);
        if(dec == "00"){//当小数点后为00时 去掉小数部分
            return sizestr.substring(0,len) + sizestr.substr(len + 3,2);
        }
        return sizestr;
	},
    makeNameInfo(info){
        fs.writeFile('info.json',info,'utf8',function(error){
            if(error){
                console.log(error);
                return false;
            }
            console.log('信息文件写入成功');
        })
    },
    getIndexInArray(arrays, obj) {
        var i = arrays.length;
        while (i--) {
            if (arrays[i] === obj) {
                return i;
            }
        }
        return false;
    }
}