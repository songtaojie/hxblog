import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
  base: '/hxblog/',
  lang: 'zh-CN',
  title: 'DotNet编程之路',
  description: 'DOTNET编程之路博客文章',
  theme:defaultTheme({
    colorMode:'dark',
    navbar: [
        { text: '首页', link: '/' },
        { text: '面试', link: '/interview/summarize' },
        { 
            text: 'DotNet编程之路博客', 
            children: [
                { text: 'Github', link: 'https://github.com/songtaojie' },
                { text: 'Gitee', link: 'https://gitee.com/songtaojie' }
            ]
        }
    ],
    sidebar: {
      '/': [
        {
          text: '欢迎学习',
          collapsible:false,
          children: [{
            text:'指导',
            link:'/guide/README.md',
          }, {
            text:'开始',
            link:'/guide/getting-started.md'
          }],
        },
      ],
      '/interview/': [
        {
          text: '面试经验',
          collapsible:false,
          children:[{
            text: '.Net面试经验总结(.Net/C#)',
            collapsible:true,
            link:'/interview/summarize.md',
          }]
        },
      ],
      '/reference/': [
        {
          text: 'Reference',
          link:'reference',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
    },
  // // 所有页面会使用相同的侧边栏
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'github',
    //         link: 'https://github.com',
    //         children: [],
    //       },
    //       // 字符串 - 页面文件路径
    //       '/foo/bar.md',
    //     ],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md',
    // ],
  }),
  head:[
      [
          'script',{},`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?80c0d8ed5b44aaa8c223c23ba6ac30fd";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `
      ]
  ]
})