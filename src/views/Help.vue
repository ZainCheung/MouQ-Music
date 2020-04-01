<template>
    <el-container>
      <el-main>
        <el-row>
          <el-col :xs="24" :sm="18" :md="14" :lg="14" id="main">
              
            
            <el-tabs tabPosition="left">
                <el-tab-pane label="歌单链接获取" name="first">
                    
                    <el-tabs type="border-card">
                        <el-tab-pane label="电脑" name="first">
                            <h4>打开歌单详情页面</h4>
                            <h4>电脑QQ音乐分享不出歌单,所以不考虑</h4>
                            <el-link  href="https://y.qq.com/n/yqq/playlist/3805603854.html" target="_blank">https://y.qq.com/n/yqq/playlist/3805603854.html</el-link>
                            <p>歌单id为 ”/playlist/“ 和 “.html” 之间的数字</p>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1FZnJ.png"
                                  fit="contain">
                            </el-image>
                        </el-tab-pane>
                        
                        <el-tab-pane label="手机" name="second">
                            <p>步骤：分享到<strong>QQ</strong>，选择<strong>我的电脑</strong>，就可以获得链接</p>
                            <el-link  href="https://i.y.qq.com/n2/m/share/details/taoge.html?platform=11&amp;appshare=android_qq&amp;appversion=9090508&amp;hosteuin=owCk7w-FNe-i7v**&amp;id=3805603854&amp;ADTAG=qfshare'>https://i.y.qq.com/n2/m/share/details/taoge.html?platform=11&amp;appshare=android_qq&amp;appversion=9090508&amp;hosteuin=owCk7w-FNe-i7v**&amp;id=3805603854&amp;ADTAG=qfshare" target="_blank">
                                https://i.y.qq.com/n2/m/share/details/taoge.html?platform=11&amp;appshare=android_qq&amp;appversion=9090508&amp;hosteuin=owCk7w-FNe-i7v**&amp;id=3805603854&amp;ADTAG=qfshare'>https://i.y.qq.com/n2/m/share/details/taoge.html?platform=11&amp;appshare=android_qq&amp;appversion=9090508&amp;hosteuin=owCk7w-FNe-i7v**&amp;id=3805603854&amp;ADTAG=qfshare
                            </el-link>
                            <p>歌单id为 ”&amp;id=“ 后面的数字</p>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1Fk1U.jpg"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1FuA1.jpg"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1FPhV.jpg"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1FEX4.jpg"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1FMh6.jpg"
                                  fit="contain">
                            </el-image>
                            
                            <h4>手机网页的话打开歌单详情页面</h4>
                            <el-link href="https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=newyqq.taoge&amp;id=3805603854" target="_blank">https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=newyqq.taoge&amp;id=3805603854</el-link>
                            <p>链接为页面顶部的框框里，歌单id为 ”&amp;id=“ 后面的数字</p>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1Fm7R.jpg"
                                  fit="contain">
                            </el-image>
                        </el-tab-pane>
                        <el-tab-pane label="歌单ID" name="third">
                            <p>或者可以直接输入id也可以解析比如：3805603854</p>
                        </el-tab-pane>
                      </el-tabs>
                    
                </el-tab-pane>
                
                <el-tab-pane label="试听歌曲" name="second">
                    <el-tabs type="border-card">
                        <el-tab-pane label="电脑" name="first">
                            <p>双击歌曲，或者点击对应歌曲的试听按钮</p>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1eyuT.png"
                                  fit="contain">
                            </el-image>
                            <!-- <p><img src="https://s1.ax1x.com/2020/04/01/G1eyuT.png" referrerpolicy="no-referrer" alt="G1eyuT.png"></p> -->
                            <p>点击后即可出现这样的页面</p>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1mpKf.png"
                                  fit="contain">
                            </el-image>
                        </el-tab-pane>
                        <el-tab-pane label="手机" name="second">
                            <p>选中歌曲，点击试听按钮即可</p>
                        </el-tab-pane>
                      </el-tabs>
                </el-tab-pane>
                
                <el-tab-pane label="下载歌曲" name="third">
                    <el-tabs type="border-card">
                        <el-tab-pane label="单首下载" name="first">
                            <p>直接点击对于歌曲的下载按钮即可，并且歌曲支持文件大小预览，默认优先下载无损音质，如果没有无损，则下载高清音质，以此类推，注意自己流量哦，建议Wifi网络环境下下载。</p>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1KbQI.png"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1MCSs.png"
                                  fit="contain">
                            </el-image>
                        </el-tab-pane>
                        <el-tab-pane label="多选下载" name="second">
                            <p>只需要勾选对应歌曲的选择框，再点击下载选中按钮即可</p>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1QYD0.png"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1QB8J.png"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1Q6Dx.png"
                                  fit="contain">
                            </el-image>
                            <el-image
                                  src="https://s1.ax1x.com/2020/04/01/G1MCSs.png"
                                  fit="contain">
                            </el-image>
                        </el-tab-pane>
                      </el-tabs>
                </el-tab-pane>
                
              </el-tabs>
              
              
            
            </el-col>
        </el-row>
      </el-main>
      <el-footer>
          <el-row>
            <el-col :xs="24" :sm="18" :md="14" :lg="14" id="main">
                <el-row class="note">
                    <el-alert
                        title="欢迎使用牟Q音乐，作品仅为作者学习测试而编写，请勿借助该作品非法牟利，请大家到多多支持QQ音乐官方正版音乐"
                        type="warning"
                        :closable="false">
                      </el-alert>
                </el-row>
                  
                  <el-row class="note">
                      <el-alert
                          title="牟Q音乐提供QQ音乐歌单的解析，只需要粘贴进正确格式的歌单链接就可以进行解析，然后进行试听及下载操作。"
                          type="success"
                          :closable="false">
                        </el-alert>
                  </el-row>
                    
                    <el-row class="note">
                        <el-alert
                            title="因为采用Blob下载方式，下载工作会在后台进行，所以点击下载后，需要几秒时间在后台，下载完成后才会提醒，请不要着急，也不要刷新页面"
                            type="info"
                            :closable="false">
                          </el-alert>
                    </el-row>
                      
                      <el-row class="note">
                          <el-alert
                              title="手机端可能无法使用多选下载功能"
                              type="info"
                              :closable="false">
                            </el-alert>
                      </el-row>
                      
            </el-col>
          </el-row>
      </el-footer>
    </el-container>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Help',
  
}
</script>

<style>
    .note{
        margin-top: 12px;
    }
</style>
