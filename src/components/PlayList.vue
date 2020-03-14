<template>
  <el-container>
   <el-main>   
  <el-row>
    <el-col :xs="24" :sm="18" :md="14" :lg="10" id="main">
    <label>请粘贴某Q音乐歌单链接或者id：</label>
    <el-input v-model="link" v-on:input= "formatLink" @keyup.enter.native="search" clearable placeholder="请输入歌单链接或者id"></el-input>
    <!-- 
    <el-select v-model="info.sex" placeholder="请选择">
      <el-option v-for="item in options" :key="item" :value="item"></el-option>
    </el-select> -->
    <el-button  class="btn-auto" @click="search" type="primary" icon="el-icon-search" plain :loading="loading">解析</el-button>
    <el-card class="info-card" v-if="listinfo != null" v-loading="loading">
      <div slot="header" class="clearfix">
        <span>{{listinfo.name}}  来自:{{listinfo.user}}  共有:{{listinfo.total}}首歌</span>
      </div>
      <!-- <img :src="listinfo.logo" class="image"> -->
      <!-- <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
          <el-image
                style="width: 100px; height: 100px"
                :src="listinfo.logo"
           ></el-image>
      </el-col> -->
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <!-- <el-row>
            <label></label>  
          </el-row> -->
          <!-- <el-row>
            <label></label>      
          </el-row> -->
          <el-row>
              <!-- <audio  ref="audio" 
                 @pause="onPause"
                 @play="onPlay" 
                 :src="audiosrc" 
                 controls="controls">
              </audio> -->
              <aplayer :music="aplayermusic" v-if="aplayermusic.show" autoplay repeat="repeat-one" ref="aplayer"></aplayer>
          </el-row>
      </el-col>
    </el-card>
    <template>
      <el-table 
          :data="tablesonglist" 
          @row-click="rowClick" 
          @row-dblclick="rowClick" 
          @cell-mouse-enter="mouseEnter" 
          @cell-mouse-leave="mouseLeave" 
          @selection-change="handleSelectionChange"
          align="left" 
       v-loading="loading" >
        <el-table-column
              type="selection"
              width="50">
        </el-table-column>
        <!-- <el-table-column label="全选" :render-header="renderHeader">
            <el-checkbox ></el-checkbox>
        </el-table-column> -->
        <el-table-column prop="name" label="歌名"></el-table-column>
        <el-table-column prop="singer" label="歌手"></el-table-column>
        <!-- <el-table-column prop="album" label="专辑"></el-table-column> -->
        <el-table-column width="150">
            <template slot="header" >
                <el-button type="primary" @click="downloadChoose" plain :disabled="disabledChoose" >下载选中</el-button>
            </template>
          <template slot-scope="a">
            
            <el-tooltip class="item" effect="dark" :content="tablesonglist[a.$index].size" placement="left">
                <el-button size="small" type="primary" @click="download(a.$index)" icon="el-icon-download" plain circle></el-button>  
            </el-tooltip>
            <el-button v-show="tablesonglist[a.$index].playShow" @click="startPlayOrPause(tablesonglist[a.$index].mid,tablesonglist[a.$index].name,tablesonglist[a.$index].singer)" size="small" icon="el-icon-video-play" plain circle></el-button>
            
          </template>
        </el-table-column>
      </el-table>
    </template>
    </el-col>
  </el-row>
  </el-main>
  
  <el-footer>
  </el-footer>
  </el-container>
      <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop> -->
  
</template>
<script>
import Storage from '../store/store'
import Tool from '../tool/tool.js'
import aplayer from 'vue-aplayer'
export default {
  name: "PlayList",
  components: {
    aplayer
  },
  data(){
    return {
      link: '',
      playlistid: '',
      song: {
          id: '',
          mid: '',
          name: '',
          singer: '',
          album: '',
          type: '',//音质
          size: ''
      },
      songlist: [],
      Selection: [],
      loading: false,
      disabledChoose: true,
      // infoShow: false,
      audiosrc: null,
      audio: {
        // 该字段是音频是否处于播放状态的属性
        playing: false
       },
      aplayermusic:{
          show: false
      },
      playingmid: null ,//初始化播放歌曲mid
      // tabledata: Storage.fetch(),
      tablesonglist:Storage.getsonglist(), //歌单里歌曲列表
      listinfo: Storage.getinfo(), //歌单信息
    }
  },
  methods: {
     // 实时检测输入并解析id
    formatLink(){
        let begin,end;
        
        if(this.link.indexOf("i.y.qq.com") != -1){
            begin = this.link.indexOf("id=");
            end = this.link.indexOf("&ADTAG");
            if(end != -1){
                this.playlistid = this.link.slice(begin+3,end);
            }else{
                this.playlistid = this.link.slice(begin+3);
            }
        }else if(this.link.indexOf("y.qq.com") != -1){
            begin = this.link.indexOf("/playlist/");
            end = this.link.indexOf(".html");
            this.playlistid = this.link.slice(begin+10,end);
        }else{
            this.playlistid = this.link;
        }
        // console.log(this.playlistid);
    },
     search(){
      // this.tabledata.push(this.info)
        var _this = this;
        _this.loading = true;
        

        this.axios.get('https://mq.api.superboyjack.cn/songlist', {
            // vue项目使用 /api/songlist
            // 打包到electron使用  https://mq.api.superboyjack.cn/songlist
            params: {
                id: this.playlistid
            }
        })
        .then(function (response) {
            _this.loading = false;
            if(response.data.result == 500){
                _this.$message({
                    showClose: true,
                    message: response.data.errMsg,
                    type: 'error'
                });
                return
            }
            if(JSON.stringify(response.data.data) === '{}'){
                _this.$message({
                    showClose: true,
                    message: "未能解析到歌单,请检查输入是否正确",
                    type: 'warning'
                });
                return
            }
            
            _this.$message({
                showClose: true,
                     message: "解析成功",
                    type: 'success'
            });
            
            // 清空上一次结果
            _this.tablesonglist.splice(0,_this.tablesonglist.length);
            // 取消加载动画
            _this.loading = false;
            
            _this.listinfo = {
                name: response.data.data.dissname,
                user: response.data.data.nick,
                logo: response.data.data.logo,
                headurl: response.data.data.headurl,
                total: response.data.data.total_song_num,
                // infoShow: true
            }
            // _this.infoShow = true;
            let length = response.data.data.songlist.length;
            let infoObj = {};
            for (var i = 0; i < length; i++) {
                // console.log(response.data.data.songlist[i]);
                _this.songlist = response.data.data.songlist;
                _this.song =  {
                    id: _this.songlist[i].songid,
                    mid: _this.songlist[i].songmid,
                    name: _this.songlist[i].songname,
                    album: _this.songlist[i].albumname,
                    playShow: false
                }
                
                // 歌手
                for(var j = 0; j< _this.songlist[i].singer.length; j++){
                    if(j != 0){
                        _this.song.singer = _this.song.singer + " / " + _this.songlist[i].singer[j].name;
                    }else{
                        _this.song.singer = _this.songlist[i].singer[j].name;
                    }
                }
                // 音质
                if(_this.songlist[i].sizeflac != 0){
                    _this.song.type = 'flac';
                    _this.song.size = _this.songlist[i].sizeflac;
                }else if(_this.songlist[i].sizeape != 0){
                    _this.song.type = 'ape';
                    _this.song.size = _this.songlist[i].sizeape;
                }else if(_this.songlist[i].size320 != 0){
                    _this.song.type = '128';//受接口影响,这里只能获取到128的下载
                    _this.song.size = _this.songlist[i].size128;
                }else if(_this.songlist[i].size128 != 0){
                    _this.song.type = '128';
                    _this.song.size = _this.songlist[i].size128;
                }else{
                    _this.song.type = null;
                    _this.song.size = 0;
                }
                
                // if(_this.song.type != null){
                //     var temptype = _this.song.type;
                //     if(_this.song.type != 'flac' && _this.song.type != 'ape'){
                //         temptype = "mp3";
                //     }
                    
                // }
                infoObj[_this.songlist[i].songmid] = _this.songlist[i].songname + "-" + _this.song.singer;
                
                _this.song.size = Tool.formatSize(_this.song.size);
                
                _this.tablesonglist.push(_this.song);
                
                _this.song = {
                  id: '',
                  mid: '',
                  name: '',
                  singer: '',
                  album: '',
                  type: '',//音质
                  size: ''
                }
            }
            // console.log(infoObj);
            // console.log(infoObj.toJSONString()); 
        })
        .catch(function (error) {
            _this.loading = false;
            console.log(error);
        });
    },
    
    /*
     * 下载
     * @param  {String} url 目标文件地址
     * @param  {String} filename 想要保存的文件名称
     */
    courseDownload(url, filename) {
        var _this = this;
        _this.getBlob(url, function(blob) {
            _this.saveAs(blob, filename);
        })
    },
    getBlob(url,cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
            if (xhr.status === 200) {
                cb(xhr.response);
            }
        };
        xhr.send();
    },
    /**
     * 保存
     * @param  {Blob} blob
     * @param  {String} filename 想要保存的文件名称
     */
    saveAs(blob, filename) {
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveBlob(blob, filename);
        } else {
            var link = document.createElement('a');
            var body = document.querySelector('body');
     
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
     
            // fix Firefox
            link.style.display = 'none';
            body.appendChild(link);
     
            link.click();
            body.removeChild(link);
     
            window.URL.revokeObjectURL(link.href);
        }
        },
    
    // 根据url下载文件
        downloadFile (url,name,type) {
            
            try{
               var ipcRenderer = window.require('electron').ipcRenderer;
                ipcRenderer.send('setname',name); 
            }catch(e){
                //TODO handle the exception
            }
            let link = document.createElement('a')
            link.style.display = 'none'
            link.href = url
            link.setAttribute('download', name + "." + type)
            link.setAttribute('v-on:click', this.courseDownload(url, name + "." + type));
            console.log(this.courseDownload(url, name + "." + type));
            document.body.appendChild(link)
            link.click()
        },
    // 根据点击位置下载方法
    download(order){
        // console.log(order);
        var _this = this;
        this.axios.get('https://mq.api.superboyjack.cn/song/url', {
            // /api/song/url
            // https://mq.api.superboyjack.cn/song/url
            params: {
                id: this.tablesonglist[order].mid,
                type: this.tablesonglist[order].type
            }
        })
        .then(function (response) {
            // console.log(response.data.data);
            var name = _this.tablesonglist[order].name;
            var type = _this.tablesonglist[order].type;
            
            if(type == '320' || type == '128'){
                type = 'mp3';//防止出现****.320文件名
            }
            
            name = name + "-" + _this.tablesonglist[order].singer;
            if (typeof(response.data.data) != "undefined"){
                var index = response.data.data.indexOf(".com");
                var url = response.data.data;
                if(index != -1){
                    // 代理内网,打包到electron时时要注释下面这行
                    // url = "/download/" + url.slice(index+5,url.length);
                    _this.downloadFile (url,name,type);
                }
            }else{
                _this.$message({
                    showClose: true,
                    message: name + "这首歌已经下架了,无能为力哦",
                    type: 'warning'
                });
            }
            
            
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    // 下载多选按钮
    downloadChoose(){
        var _this = this;
        this.$message({
          showClose: true,
          message: '开始下载选中的' + this.Selection.length + "首歌"
        });
        this.Selection.forEach(selectSong => {
          this.timer = setTimeout(()=>{   //设置延迟执行
            _this.download(Tool.getIndexInArray(this.tablesonglist,selectSong));
        },200);
      })  
    },
    // 鼠标单击与双击事件
    rowClick(row){
        var index = this.tablesonglist.indexOf(row);
        // console.log(index);
        var mid = this.tablesonglist[index].mid;
        var name = this.tablesonglist[index].name;
        var singer = this.tablesonglist[index].singer;
        this.startPlayOrPause(mid,name,singer);
    },
    // 鼠标进入事件
    mouseEnter(row){
        var index = this.tablesonglist.indexOf(row);
        // console.log(index);
        this.tablesonglist[index].playShow = true;
    },
    // 鼠标离开事件
    mouseLeave(row){
        var index = this.tablesonglist.indexOf(row);
        // console.log(index);
        this.tablesonglist[index].playShow = false;
        // this.tablesonglist.forEach(song => {
        //     song.playShow = false;
        // })
    },
    // 监听选择框变化事件
    handleSelectionChange(val) {
        this.Selection = val;
        if(this.Selection.length == 0){
            this.disabledChoose = true;
        }else{
            this.disabledChoose = false;
        }
        // console.log(this.Selection);
    },
    
    
    // 以下是播放相关方法
    getAudioUrl(mid){
        var _this = this;
        this.axios.get('https://mq.api.superboyjack.cn/song/urls', {
            // /api/song/urls
            // https://mq.api.superboyjack.cn/song/urls
            params: {
                id: mid
            }
        })
        .then(function (response) {
            // console.log(response.data.data[mid]);
            let temp =  response.data.data[mid];
            if (typeof(temp) != "undefined"){
                _this.audiosrc = temp;
                _this.playingmid = mid;
            }else{
                _this.$message({
                    showClose: true,
                    message: "这首歌已经找不到了,换一首听听吧",
                    type: 'warning'
                });
            }
            
            
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    // 控制音频的播放与暂停
    startPlayOrPause (mid,name,singer) {
      var _this = this;
          // if(_this.playingmid == null || _this.playingmid != mid){
            _this.getAudioUrl(mid);
            
            clearTimeout(this.timer);  //清除延迟执行
            this.timer = setTimeout(()=>{   //设置延迟执行
                // console.log("mid不一致或者为空");
                // this.audio.playing = true;
                if(this.audiosrc != null){
                    this.play(name,singer);
                }
                
                // console.log(this.audiosrc);
            },1000);
          // }else{
          //     console.log("mid一致切换状态");
          //     console.log(this.audio.playing);
          //       return this.audio.playing ? this.pause() : this.play() 
          // }
    },
    // 播放音频
    play (name,singer) {
        let _this = this;
        this.aplayermusic.show = false;
        this.timer = setTimeout(()=>{
            this.aplayermusic = {
                src:_this.audiosrc,
                title: name,
                artist: singer,
                show: true
            }
        },20);
       
      // this.$refs.audio.play()
    },
    // 暂停音频
    // pause () {
    //   this.$refs.audio.pause()
    // },
    // // 当音频播放
    // onPlay () {
    //   this.audio.playing = true
    // },
    // // 当音频暂停
    // onPause () {
    //   this.audio.playing = false
    // }
  },
  watch:{
    // tabledata:{
    //   handler(items){Storage.save(items)},
    //   deep: true
    // },
    tablesonglist:{
      handler(song){Storage.save(song)},
      deep: true
    },
    listinfo:{
      handler(info){Storage.updatainfo(info)},
      deep: true
    }
  }
}
</script>
<style>
    #main{
      float: none;
      margin: 0 auto;
  }
  .el-input{
    padding-bottom: 5px;
  }
  .el-select {
      display: block;
  }
  .btn-auto{
      width: 100%;
      margin-top: 12px;
  }
  
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  
    .info-card {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .image {
        width: 100px;
        display: block;
      }
</style>

