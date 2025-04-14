

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
];
