module.exports = {
    base: '/hxblog/',
    title: 'DotNet编程之路',
    description: 'DOTNET编程之路博客文章',
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        subSidebar: 'auto',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: 'DotNet编程之路博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/songtaojie' },
                    { text: 'Gitee', link: 'https://gitee.com/songtaojie' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}