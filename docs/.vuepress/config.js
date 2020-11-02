let sidebar={
    '/note/':[
        {
            title: 'JAVA',
            collapsable: true,
            children: [
                'java/JAVA'
            ]
        },
        {
            title: 'VUE',
            collapsable: true,
            children: [
                'vue/Vue'
            ]
        },
    ]
};
module.exports = {
    title: '最上川',
    description: '最上川的博客',
    theme:'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        lastUpdated: '最后一次更新',
        sidebarDepth: 1,
        sidebar: sidebar,
        subSidebar: 'auto',
        nextLinks: true,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: true,
        valineConfig: {
            appId: 'ndNAO7aWWYpaOU91rV7tQXro-gzGzoHsz',// your appId
            appKey: 'fMzCDGnz7jGfYP4GR0VTKk18' // your appKey
        },
        type: 'blog',
        nav: [
            { text: '时间线', link: '/timeline/', icon: 'reco-date' },
            { text: '留言板', link: '/MessageBoard.html', icon: 'reco-suggestion' }
        ],
        // keyPage: {
        //     keys: ['25d55ad283aa400af464c76d713c07ad'], // 1.3.0 版本后需要设置为密文
        //     color: '#42b983', // 登录页动画球的颜色
        //     lineColor: '#42b983' // 登录页动画线的颜色
        // },
        author: '最上川',
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        }
    },
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    plugins: ["@vuepress-reco/vuepress-plugin-kan-ban-niang","@vuepress-reco/vuepress-plugin-screenfull","@vuepress-reco/vuepress-plugin-extract-code"]
}