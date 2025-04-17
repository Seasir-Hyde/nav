import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'
import { AnnouncementPlugin } from 'vitepress-plugin-announcement'
import { generateSidebar } from 'vitepress-sidebar' // 导入生成侧边栏插件

import { nav } from './configs'
import type { HeadConfig } from 'vitepress' // 在文件顶部添加类型导入
import { HeadData } from './configs/HeadData' // 导入 HeadData 导入和类型断言
import { SocialLinks } from './configs/SocialLinks' // 导入SocialDate社交信息模块
// import MiniSearch from 'minisearch';

// // 定义 MiniSearch 实例
// const search = new MiniSearch({
//   fields: ['title', 'content'],
//   storeFields: ['title'],
// });

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  // 网站标题
  title: '内部导航',
  // 网站描述
  description: 'SaleSmartly技术支持内部导航网站，由VitePress搭建，并使用Vue3作为开发框架。',
  head: HeadData as HeadConfig[], // HeadData

  // 表示是否更新成功
  lastUpdated: true,
  // 表示是否清理URL
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  /* 主题配置 */
  themeConfig: {
    // 是否开启国际化路由（生产环境关闭）
    i18nRouting: false,

    //  内部导航左侧logo
    logo: '/zuocelogo.png',

    // 导航配置
    nav,
    // 侧边栏配置

    sidebar: generateSidebar({
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: 'title', // 用于从frontmatter中获取标题的字段名
      sortMenusByName: false, // 是否按名称对菜单进行排序
      documentRootPath: '/docs',
      collapsed: true,
      removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
      prefixSeparator: '.', //删除前缀的符号
      useFolderLinkFromIndexFile: true, //指定一个指向文件夹的链接，以便您可以导航到当前文件夹中的index.md文件。如果index.md文件不存在，则不会创建链接。
      manualSortFileNameByPriority: [
        'SaleSmartly',
        'FaceBook',
        '模板消息',
        'WhatsApp',
        'Line',
        'Code proxy IP',
        '网站导航',
      ], //按文件名（包括扩展名）阵列的顺序排序
      excludePattern: ['test.md', '桌面客户端'], //排除文件和文件名模式
    }),

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },
    // aside: "left", // 设置右侧侧边栏在左侧显示

    // 社交链接，包含一个对象，包含icon和link属性
    socialLinks: SocialLinks, //社交链接

    // 页脚配置
    footer: {
      message: `本站收录内容源自互联网，不对其网站内容或交易负责&ensp;|&ensp;如有内容侵犯权益，请联系站长删除相关内容！`,
      copyright: `Copyright © 2024-2025 SeasirHyde 到达胜利之前无法回头！ <img src="" alt="">桂ICP备2021009994号 &ensp;| 甘公网安备62102702000211号
      <p>本文总阅读量 <span id="busuanzi_page_pv"></span> 次&ensp;|
      本文总访客量 <span id="busuanzi_page_uv"></span> 人&ensp;|
      本站总访问量 <span id="busuanzi_site_pv"></span> 次&ensp;|
      本站总访客数 <span id="busuanzi_site_uv"></span> 人</p>
      <span class="showTime"></span>
      <span id="runtime"></span>
      <a href="https://busuanzi.9420.ltd/" target="_blank" style="display:flex;align-items:center;justify-content:center;text-decoration: none; color: #5da8ff;">本网站由不蒜子API提供数据统计接口服务
      </a>
      <p>人心中的成见是一座大山~</p>`,
    },

    // 声明一个lastUpdated变量，它是一个对象，包含文本（text）和格式选项（formatOptions）
    lastUpdated: {
      // 文本是中文，表示最后更新于
      text: '最后更新于',
      // 格式选项包含日期样式（dateStyle）和时间样式（timeStyle）
      formatOptions: {
        // 日期样式为短格式
        dateStyle: 'short',
        // 时间样式为中格式
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题切换',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    langMenuLabel: 'Change language', // 语言切换菜单的文本

    /*** 自定义配置 ***/
    visitor: {
      // 访问量统计
      badgeId: 'maomao1996.vitepress-nav-template',
    },

    //  giscus 评论配置
    // comment: {
    //   repo: 'maomao1996/vitepress-nav-template',
    //   repoId: 'R_kgDOJC09Jg',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOJC09Js4Cekn0',
    // },

    // 设置搜索框的样式
    // search: {
    //   provider: 'local',
    //   options: {

    //     translations: {
    //       button: {
    //         buttonText: '搜索',
    //         buttonAriaLabel: '搜索文档',
    //       },
    //       modal: {
    //         noResultsText: '无法找到相关结果',
    //         resetButtonTitle: '清除查询条件',
    //         footer: {
    //           selectText: '选择',
    //           navigateText: '切换',
    //           closeText: '关闭',
    //         },
    //         }
    //     },
    //   },
    // }
  },

  vite: {
    plugins: [
      MarkdownPreview(),
      AnnouncementPlugin({
        title: '公告',
        body: [
          { type: 'text', content: '⚠️ 免责声明 ⚠️' },
          { type: 'text', content: ' 本"内部导航网"仅作为公司内部资源和常用网站的导航工具使用。' },
          { type: 'text', content: '⚠️ 请勿将网站外泄⚠️' },
        ],
        footer: [
          {
            type: 'button',
            content: '详细了解',
            link: 'https://ssnav.netlify.app/nav/#%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E',
          },
          {
            type: 'button',
            content: '版权所有',
            link: 'https://sugarat.top/technology/works/vitepress-plugin-announcement.html',
          },
        ],
      }),
    ],
  },
})
