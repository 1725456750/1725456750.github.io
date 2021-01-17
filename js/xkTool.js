（函数 （window ， undefiend ） {
  var  xkTool  =  function  （选择器， 过滤器） {
    返回 新的 xkTool 。原型。初始化（选择器， 过滤器）;
  } ;
  xkTool 。原型 =  {
    构造函数：xkTool ，
    初始化：函数 （bgUrl ， 过滤器） {
      这个。changeBanner （bgUrl ， filter ）;
      控制台。日志（
        “ \ n％c小康蝴蝶主题魔改工具库”  +
          这个。版本 +
          “％c https://docs.tzki.cn/xkTool/ \ n” ，
        “颜色：#fff；背景：＃4285f4；填充：5px 0；” ，
        “背景：＃66CCFF；填充：5px 0；”
      ）;
      返回 这个;
    } ，
    版本：“ 3.1.1” ，
    选择器：“” ，
    //背景图片列表
    imgList：[
      “https://ae01.alicdn.com/kf/Uc32240fb1b134adc8b256577bd78b9a3j.jpg” ，
    ] ，
    //横幅图列表
    bannerList：[
      “https://ae01.alicdn.com/kf/H21b5f6b8496141a1979a33666e1074d9x.jpg” ，
    ] ，
  } ;
  xkTool 。扩展 =  xkTool 。原型。扩展 = 功能 （obj ） {
    为 （VAR 键 在 OBJ ） {
      这个[键]  =  obj [键] ;
    }
  } ;
  //生成相关
  xkTool 。扩展（{
    / **
     *生成随机整数包括首尾
     * @date二○二○年六月三十〇日
     * @param {数字}分钟
     * @param { number } max最高
     * @returns {任意}
     * /
    randomNum：函数 （最小， 最大） {
      // min最小值，max最大值
      返回 Math 。地板（数学。随机（） * （最大值 - 最小）） + 分钟;
    } ，
  } ）;
  //工具方法
  xkTool 。扩展（{
    / **
     *根据Cookie设置背景
     * @date二○二○年六月三十〇日
     * @param {任何} content_inner公共父级
     * @param { any } opacity极端
     * @returns {任意}
     * /
    setColor：function  （content_inner ， opacity ） {
      // style =“-light_bg_color：rgb（255，255，255，.3）;-dark_bg_color：rgba（18,18,18，.2）;”
      var  light_bg_color  =
        “ --light_bg_color：rgb（255，255，255，”  + 不透明度 +  “）;” ;
      var  dark_bg_color  =  “ --dark_bg_color：rgba（18,18,18，”  + 不透明 +  “）;” ;
      content_inner 。setAttribute （“ style” ， light_bg_color  +  dark_bg_color ）;
    } ，

    / **
     *设置背景图片
     * @date二○二○年六月三十〇日
     * @param { string }} img图片的地址
     * @returns {任意}
     * /
    setBg：函数 （img ） {
      $ （“ #web_bg” ）。CSS （{
        backgroundImage：“ url（”  +  img  +  “）” ，
        backgroundRepeat：“ no-repeat” ，
        backgroundSize：“ cover” ，
      } ）;
    } ，
    / **
     *设置横幅的方法
     * @date 2020年7月6日
     * @param {任意} img图片地址
     * @param { any } filter是否开启滤镜，默认不开启
     * @returns {任意}
     * /
    setBanner：function  （img ， filter ） {
      如果 （！过滤器） {
        $ （“ .full_page” ）。CSS （{
          backgroundImage：“ url（”  +  img  +  “）” ，
        } ）;
      } 其他 {
        $ （“ .full_page” ）。CSS （{
          backgroundImage：
            'url（“ https://ae01.alicdn.com/kf/H18a4b998752a4ae68b8e85d432a5aef0l.png”），线性渐变（60度，rgba（255、165、150、0.5）5％，rgba（0、228、255、0.35 ）），网址（'  +
            img  +
            “）” ，
        } ）;
      }
    } ，
  } ）;
  //点击互动
  xkTool 。原型。扩展（{
    / **
     *当点击目录时控制台输出当前文章地址加锚点
     * @date二○二○年六月三十〇日
     * @returns { xkTool }
     * /
    consoleAnchor：函数 （） {
      $ （“ .toc-link” ）。点击（功能 （e ） {
        // location.hash = this.hash;
        控制台。日志（此。HREF ）;
      } ）;
      返回 这个;
    } ，
    / **
     *当使用mac编码主题时，点击绿色按钮会出现代码框放大的效果
     * @date二○二○年六月三十〇日
     * @returns { xkTool }
     * /
    codeFull：函数 （） {
      $ （“ .highlight-tools” ）。追加（
        '<i class =“ fas fa-fingerprint fullScreen”> </ i>'
      ）;
      $ （“ .highlight-tools” ）。委托（“ .fullScreen” ， “ click” ， 函数 （） {
        $ （这个）。父母（）。父母（）。toggleClass （“ code-block-fullscreen” ）;
        // var expand = $（this）.prevAll（）。eq（3）;
        // if（expand.hasClass（“ code-closed”））{
        // expand.trigger（“ click”）;
        //}
      } ）;
      返回 这个;
    } ，
  } ）;
  //视觉感受
  xkTool 。原型。扩展（{
    / **
     *修改主页banner图，参数添加图片地址，或者透明
     * @date二○二○年六月三十〇日
     * @param {字符串} [imageUrl]可选，转化图片地址或透明
     * @param { boolean } filter = false是否使用滤镜默认不适用
     * @returns { xkTool }
     * /
    changeBanner：函数 （imageUrl ， filter =  false ） {
      如果 （IMAGEURL！=未定义 &&  IMAGEURL 。搜索（“HTTP” ）！= - 1 ） {
        xkTool 。setBanner （imageUrl ， 过滤器）;
      }  else  if  （imageUrl  ==  “ transparent” ） {
        $ （“ .full_page” ）。CSS （{
          背景：“透明” ，
        } ）;
      }
      返回 这个;
    } ，
    / **
     *随机横幅图
     * @date 2020年7月6日
     * @param { any } startUrl开始的网址
     * @param { any } endUrl结束的URL
     * @param { any } startNum开始的数字
     * @param { any } endNum结束的数字
     * @param { any } filter = false是否使用滤镜，默认不使用
     * @returns {任意}
     * /
    randomBanner：函数 （
      startUrl ，
      endUrl ，
      startNum ，
      endNum ，
      筛选器= 否
    ） {
      var  num ;
      如果 （（参数。长度 =  1  &&  startUrl  == 真）） {
        filter  =  true ;
      }
      如果 （参数。长度 <  4 ） {
        var  imgLength  =  this 。bannerList 。长度;
        num  =  xkTool 。randomNum （0 ， imgLength ）;
        控制台。日志（此。bannerList [ NUM ] ， NUM ）;
        xkTool 。setBanner （此。bannerList [ NUM ] ， 过滤器）;
      } 其他 {
        num  =  xkTool 。randomNum （startNum ， endNum  +  1 ）;
        xkTool 。setBanner （startUrl  +  num  +  endUrl ， 过滤器）;
      }
      返回 xkTool ;
    } ，
    / **
     *手机状态下工具栏默认不展开
     * @date二○二○年六月三十〇日
     * @returns {任意}
     * /
    mobileSidebar：功能 （） {
      var  mobile_sidebar_menus  =  document 。getElementById （
        “移动侧边栏菜单”
      ）;
      var  menus_item_child  =  mobile_sidebar_menus 。getElementsByClassName （
        “ menus_item_child”
      ）;
      var  menus_expand  =  mobile_sidebar_menus 。getElementsByClassName （
        “菜单扩展”
      ）;
      为 （VAR 我 =  0 ; 我 <  menus_item_child 。长度; 我++ ） {
        menus_item_child [ i ] 。风格。显示 =  “无” ；
        menus_expand [ i ] 。className  + =  “菜单关闭” ;
      }
      返回 这个;
    } ，
    / **
     *根据Cookie设置背景，更长等
     * @date二○二○年六月三十〇日
     * @returns {任意}
     * /
    bgPage：函数 （） {
      //获取标签
      //整体背景div
      var  web_bg  =  document 。getElementById （“ web_bg” ）;
      //公共父级
      var  content_inner  =  document 。getElementById （“ content-inner” ）;
      //获取Cookie
      //同轴
      var  opacity  =  Cookies 。得到（“不透明” ）？饼干。得到（“ opacity” ）：0.5 ;
      //背景
      var  bg  =  Cookies 。get （“ bg” ）;
      //动画
      var  animation  =  Cookies 。得到（“动画” ）；
      //背景类型
      var  type  =  Cookies 。get （“ type” ）;
      //声明遍历用于记录当前颜色
      //设置背景
      如果 （bg ） {
        web_bg 。风格。背景 =  bg ;
        web_bg 。setAttribute （“ data-type” ， type ）;
        如果 （动画） {
          web_bg 。风格。动画 = 动画;
        }
      }
      xkTool 。setColor （content_inner ， opacity ）;
      返回 这个;
    } ，
    / **
     *随机背景
     * @date 2020年7月6日
     * @param { any } startUrl开始的网址
     * @param { any } endUrl结束的URL
     * @param { any } startNum开始的数字
     * @param { any } endNum结束的数字
     * @returns {任意}
     * /
    randomBg：函数 （startUrl ， endUrl ， startNum ， endNum ） {
      var  num ;
      如果 （参数。长度 <  4 ） {
        var  imgLength  =  this 。imgList 。长度;
        num  =  xkTool 。randomNum （0 ， imgLength ）;
        xkTool 。SETBG （此。imgList [ NUM ] ）;
      } 其他 {
        num  =  xkTool 。randomNum （startNum ， endNum  +  1 ）;
        xkTool 。setBg （startUrl  +  num  +  endUrl ）;
      }
      返回 xkTool ;
    } ，
  } ）;
  //元素相关
  xkTool 。原型。扩展（{
    / **
     *插入svg社交图标
     * @date二○二○年六月三十〇日
     * @param { object } obj插入对象，键为图标id，转换为点击后替换的地址
     * @returns {任意}
     * /
    appendSocial：函数 （obj ） {
      为 （VAR  svgId 在 OBJ ） {
        $ （“ .card-info-social-icons” ）。追加（
          '<a class =“ social-icon” href =“'  +
            obj [ svgId ]  +
            '“ target =” _ blank“> <svg class =” icon“ aria-hidden =” true“ style =” width：1em; height：1em; vertical-align：-0.15em; fill：currentColor; overflow：hidden;“ > <使用xlink：href =“＃'  +
            svgId  +
            '“> </ use> </ svg> </a>'
        ）;
      }
    } ，
    / **
     *离开时切换标题
     * @date 2020年7月3日
     * @param { string }离开标题离开时显示的标题
     * @param { string } backTitle回来时显示的标题
     * @param { string } LeaveIcon离开时显示的图标
     * @param { string } backIcon回来时显示的图标
     * @returns { xkTool }这
     * /
    cheatTitle：函数 （leavesTitle ， backTitle ， leavesIcon ， backIcon ） {
      var  OriginTitle  =  document 。标题;
      var  titleTime ;
      文件。addEventListener （“ visibilitychange” ， function  （） {
        如果 （文件。隐藏） {
          $ （'[rel =“ icon”]' ）。attr （
            “ href” ，
            离开图标
              ？离开图标
              ：“ https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico”
          ）;
          文件。title  = 标题？标题：“ ！！这里这里◕” 。
          clearTimeout （titleTime ）;
        } 其他 {
          $ （'[rel =“ icon”]' ）。attr （
            “ href” ，
            backIcon
              ？backIcon
              ：“ https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@v3.2.7.1/butterfly/img/favicon.ico”
          ）;
          文件。标题 =  backTitle
            ？backTitle
            ：“（ฅ>ω<*ฅ）欢迎回来哦！爱你哟〜”  +  OriginTitle ;
          titleTime  =  setTimeout （function  （） {
            文件。标题 =  OriginTitle ;
          } ， 2000年）；
        }
      } ）;
      返回 这个;
    } ，
    / **
     *魔幻圆圈
     * @date 2020年7月3日
     * @param { any } radius圆圈数量
     * @param {任何} densityy密度
     * @param { any } color颜色，随机为随机
     * @param { any } clearOffset消失重新排列
     * @returns {任意}
     * /
    magicCirle：函数 （半径， 密度， 颜色， clearOffset ） {
      $ （“ .scroll-down” ）。之后（
        '<canvas id =“ canvas” width =“ 1700px” height =“ 470”> </ canvas>'
      ）;
      $ （“” ）;
      $ 。FN 。circleMagic  = 函数 （选项） {
        让 宽度，
          高度，
          largeContainer ，
          帆布，
          CTX ，
          目标，
          animateHeader  =  true ；
        让 圈子 =  [ ] ;
        //对象合并
        让 设置 =  $ 。延伸（
          {
            elem：“ .header” ，
            颜色：“ rgba（255,225,225，.4）” ，
            半径：20 ，
            密度：0.3 ，
            clearOffset：0.2 ，
          } ，
          选项
        ）;

        initContainer （）;
        addListeners （）;

        函数 initContainer （） {
          宽度 =  $ （窗口）。宽度（）;
          高度 =  $ （窗口）。高度（）;
          目标 =  {  x：0 ， y：高度 } ;
          largeContainer  = 文档。querySelector （设置。ELEM ）;
          largeContainer 。风格。高度 = 高度 +  “ px” ；
          initCanvas （）;
          canvas  = 文档。getElementById （“ canvas” ）;
          帆布。宽度 = 宽度;
          帆布。身高 = 身高;
          ctx  =  canvas 。getContext （“ 2d” ）;
          对于 （让 X  =  0 ;  X  < 宽度*设置。densety ;  X ++ ） {
            令 c  =  new  Circle （）;
            圈子。推（c ）;
          }
          动画（）;
        }

        函数 initCanvas （） {
          让 canvasElement  =  document 。createElement （“ canvas” ）;
          canvasElement 。id  =  “画布” ;
          largeContainer 。append （canvasElement ）;
        }

        函数 addListeners （） {
          窗口。addEventListener （“ scroll” ， scrollCheck ）;
          窗口。addEventListener （“ resize” ， resize ）;
        }

        函数 scrollCheck （） {
          如果 （文件。体。scrollTop的 > 高度） animateHeader  = 假;
          否则 animateHeader  =  true ;
        }

        函数 调整大小（） {
          宽度 = 窗口。innerWidth ;
          高度 = 窗口。innerHeight ;
          largeContainer 。风格。高度 = 高度 +  “ px” ；
          帆布。宽度 = 宽度;
          帆布。身高 = 身高;
        }

        函数 动画（） {
          如果 （animateHeader ） {
            ctx 。clearRect （0 ， 0 ， 宽度， 高度）;
            对于 （让 我 在 圆圈） {
              圈子[我] 。画（）;
            }
          }
          requestAnimationFrame （animate ）;
        }

        函数 randomColor （） {
          令 r  =  Math 。地板（数学。随机（） * 255 ）;
          令 g  =  Math 。地板（数学。随机（） * 255 ）;
          令 b  =  Math 。地板（数学。随机（） * 255 ）;
          让 alpha  =  Math 。随机（）。至精度（2 ）;
          令 rgba  =  `rgba（$ { r }，$ { g }，$ { b }，$ { alpha }）` ;
          返回 rgba ;
        }

        函数 Circle （） {
          让 自我 = 这个;
          （函数 （） {
            自我。pos  =  { } ;
            初始化（）;
          } ）（）;
          函数 init （） {
            自我。pos 。x  = 数学。随机（） *宽度;
            自我。pos 。y  = 高度 + 数学。随机（） * 100 ;
            自我。alpha  =  0.1  + 数学。随机（） *设置。clearOffset ;
            自我。比例 =  0.1  +  Math 。随机（） * 0.3 ;
            自我。速度 = 数学。随机（）;
            如果 （设置。颜色 ===  “随机” ） {
              自我。颜色 =  randomColor （）;
            } 其他 {
              自我。颜色 = 设置。颜色;
            }
          }
          这个。画 = 功能 （） {
            如果 （自我。阿尔法<= 0 ） {
              初始化（）;
            }
            自我。pos 。y-  = 自我。速度;
            自我。alpha-  =  0.0005 ;
            ctx 。beginPath （）;
            ctx 。弧（
              自我。pos 。X ，
              自我。pos 。ÿ ，
              自我。比例*设置。半径，
              0 ，
              2 *数学。PI ，
              假
            ）;
            ctx 。fillStyle  = 自我。颜色;
            ctx 。填充（）;
            ctx 。closePath （）;
          } ;
        }
      } ;
      $ （“ .full_page” ）
        。CSS （{
          溢出：“隐藏” ，
        } ）
        。circleMagic （{
          元素：“ .full_page” ，
          半径：半径？半径：18 ，
          密度：密度？密度：0.1 ，
          颜色：颜色？颜色：“随机” ，
          //颜色：“ rgba（255,105,180，.7）”，
          clearOffset：clearOffset？clearOffset：0.3 ，
        } ）;
      返回 这个;
    } ，
    / **
     *页脚养鱼
     * @date 2020年7月16日
     * @returns {任意}
     * /
    footFish：函数 （） {
      $ （“＃footer-wrap” ）。CSS （{
        位置：“绝对” ，
        “ text-align”：“ center” ，
        顶部：0 ，
        右：0 ，
        左：0 ，
        底部：0 ，
        “ z-index”：99 ，
      } ）;
      $ （“页脚” ）。追加（
        `<div class =“ container” id =“ jsi-flying-fish-container”> </ div>`
      ）;
      $ （“ body” ）。追加（
        '<脚本src =“ https://cdn.jsdelivr.net/gh/sviptzk/StaticFile_HEXO@master/lib/js/fish.js”> </ script>'
      ）;
      返回 这个;
    } ，
    / **
     *添加aplayer播放器
     * @date 2020年7月7日
     * @param { any } obj aplayer的对象
     * @returns {任意}
     * /
    aplayer：函数 （obj ） {
      $ （“头” ）。追加（
        '<link rel =“ stylesheet” href =“ https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css” class =“ aplayer-style-标记“>'
      ）;

      $ 。getScript （
        “ https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js” ，
        函数 （） {
          $ （“ body” ）。前置（'<div id =“ xiaokang-aplayer”> </ div>' ）;
          aplayerObj  =  {
            容器：文件。getElementById （“ xiaokang-aplayer” ），
          } ;
          为 （VAR 键 在 OBJ ） {
            if  （键！= “容器” ） aplayerObj [键]  =  obj [键] ;
          }
          const  ap  =  new  APlayer （aplayerObj ）;
          控制台。日志（aplayerObj ）;
          返回 ap ;
        }
      ）;
    } ，
    / **
     *添加录音播放器
     * @date 2020年7月7日
     * @param { any } id id
     * @param {任何}服务器服务商
     * @param { any } type类型
     * @returns {任意}
     * /
    会议：功能 （ID ， 服务器， 类型） {
      $ （“头” ）。追加（
        '<link rel =“ stylesheet” href =“ https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/css/APlayer.min.css” class =“ aplayer-style-标记“>'
      ）;
      令 APlayerJs  =  $ 。getScript （
        “ https://cdn.jsdelivr.net/gh/sviptzk/HexoStaticFile@v0.1/Hexo/assets/js/APlayer.min.js”
      ）;
      让 MetingJS  =  $ 。getScript （
        “ https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js”
      ）;
      让 pAll  =  Promise 。全部（[ APlayerJs ， MetingJS ] ）;
      全部。然后（（） =>  {
        $ （“ body” ）。追加（
          `<meting-js id = $ { id }服务器= $ {服务器} type = $ { type } fixed =“ true” mini =“ true”> </ meting-js>`
        ）;
      } ）;
    } ，
  } ）;
  xkTool 。原型。初始化。原型 =  xkTool 。原型;

  窗口。xkTool  =  xkTool ;
} ）（窗口）;
xiaokang.cheatTitle（[leaveTitle，backTitle，leaveIcon，backIcon]）;