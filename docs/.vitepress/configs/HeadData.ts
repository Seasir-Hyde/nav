// 导出head.ts
export const HeadData = [
  // 插入外部 JavaScript 链接
  [
    'script',
    { src: 'https://assets.salesmartly.com/js/project_23232_24033_1691733753.js', async: 'true' },
  ],
  // [
  //   'script',
  //   {
  //     src: 'https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js',
  //     defer: 'true',
  //   },
  // ],
  // 插入内联 CSS 让看板娘在最顶层
  // 插入内联 CSS 调整看板娘的位置和层级
  [
    'style',
    {},
    `
  #waifu {
    z-index: -1;  /* 确保元素在其他元素下方 */
    pointer-events: none; /* 禁止元素捕获点击事件 */
    right: 98px;
  }

  #live2d {
      position: fixed;
      right: -1500px;      /* 固定在页面右边 */
      bottom: 100px;     /* 保持在页面底部 */
      z-index: 9999;    /* 确保在最顶层 */
    }

  #waifu-tips {
      position: fixed;
      right: 40px;     /* 将提示框固定到页面右侧，距离右边 20px */
      bottom: 400px;   /* 距离底部 200px，避免覆盖看板娘 */
      z-index: 10001;  /* 确保提示框在页面最顶层 */
      max-width: 250px; /* 控制提示框的最大宽度 */
    }
  #waifu-tool{
    margin-top: -70px; /* 右侧面板配置距离页面底部 */
  }
  `,
  ],
  [
    'script',
    {},
    `
      var t = null;
  t = setTimeout(time, 1000); //開始运行
  function time() {
      clearTimeout(t); //清除定时器
      dt = new Date();
      var y = dt.getFullYear();
      var mt = dt.getMonth() + 1;
      var day = dt.getDate();
      var h = dt.getHours(); //获取时
      var m = dt.getMinutes(); //获取分
      var s = dt.getSeconds(); //获取秒
      document.querySelector(".showTime").innerHTML =
          "当前时间是" +
          y +
          "年" +
          mt +
          "月" +
          day +
          "-" +
          h +
          "时" +
          m +
          "分" +
          s +
          "秒";
      t = setTimeout(time, 1000); //设定定时器，循环运行
  }
      `,
  ],
  [
    'script',
    {},
    `
    function runtime(){
    // 初始时间，日/月/年 时:分:秒
    const X = new Date("3/10/2022 15:32:00");
    const Y = new Date();
    const T = (Y.getTime()-X.getTime());
    const M = 24*60*60*1000;
    const a = T/M;
    const A = Math.floor(a);
    const b = (a-A)*24;
    const B = Math.floor(b);
    const c = (b-B)*60;
    const C = Math.floor((b-B)*60);
    const D = Math.floor((c-C)*60);

    // 信息写入到 DIV 中
    const runtimeElement = document.getElementById("runtime");
    if (runtimeElement) {
        runtimeElement.innerHTML = "本站已艰难的运行了 " + "<font style='color:#FFA500;font-weight:bold'>" + A + "</font>" + "天" + "<font style='color:#8A2BE2;font-weight:bold'>" + B + "</font>" + "小时<font style='color:#1DBF97;font-weight:bold'>" + C + "</font>分<font style='color:#5da8ff;font-weight:bold'>" + D + "</font>秒  (●'◡'●)";
      }
    }

    // 每秒运行一次
    setInterval(runtime,1000);

    `,
  ],
  // 鼠标爆炸效果
  // [
  //   'script',
  //   {
  //     type: 'text/javascript',
  //     src: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/animejs/3.2.1/anime.min.js', //字节cdn
  //     id: 'anime.min.js-js',
  //     defer: 'defer',
  //   },
  // ],
  // [
  //   'script',
  //   {
  //     // src: "https://cpython666.github.io/js/clickjs/fireworks.js",
  //     src: 'https://live2d-hyde.netlify.app/Clickfireworks.js',
  //     defer: 'defer',
  //   },
  // ],

  [
    'script',
    {
      src: 'https://busuanzi.9420.ltd/js',
      defer: 'defer',
    },
  ],
]
