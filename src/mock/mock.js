import Mock from 'mockjs';

Mock.setup({
    timeout: 500, // 设置延迟响应，模拟向后端请求数据
});
//推荐->轮播图
Mock.mock('/slideImg', 'get', (data) => {
    return  [
            {
                id: 23690,
                linkUrl: "https://y.qq.com/apg/urban/city/index.html?apgid=1139&ADTAG=logobanner&openinqqmusic=1",
                picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1793113.jpg",
            },
            {
                id: 23685,
                linkUrl: "https://y.qq.com/msa/270/0_8635.html?openinqqmusic=1&ADTAG=app",
                picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1791566.jpg",
            },
            {
                id: 23663,
                linkUrl: "https://y.qq.com/m/act/kjgw2019/index.html?openinqqmusic=1&ADTAG=jiaodiantu",
                picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1794231.jpg",
            },
            {
                id: 23658,
                linkUrl: "https://y.qq.com/m/act/ylhhr/index.html?openinqqmusic=1&ADTAG=jiaodiantu",
                picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1794335.jpg",
            },
            {
                id: 23698,
                linkUrl: "http://y.qq.com/w/album.html?albummid=0009li6g1nmB7y",
                picUrl: "http://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/1792397.jpg",
            },
        ]
})
//推荐歌单推荐,前端page===后端每条数据的type，就返回该数据,懒加载，总共20条数据
Mock.mock(RegExp('/recomList' + ".*"), 'get', (options) => {
    var params = getparams(options.url);
    var datas = {
        code: 0,
        data: [
            {
                "creator": {
                    "avatarUrl": "",
                    "name": "叶洛洛",
                },
                "dissid": "6984407606",
                "dissname": "虐心网络曲：爱过你，却终究错过",
                "imgurl": "http://p.qpic.cn/music_cover/NaYDCjF6oFDyCBFMbYpoKxDU4HDtTEic0F28fg4Beqj5xvghia0xrhIw/600?n=1",
                "listennum": 21304558,
                "type":1,
            },
            {
                "creator": {
                    "avatarUrl": "",
                    "name": "winner",
                },
                "dissid": "7265786919",
                "dissname": "来自FABTONE的Jazz HipHop",
                "imgurl": "http://p.qpic.cn/music_cover/rTTmm5kYwyYzDb9vVF6KsVB0kDjq2MHnfaN47oYtwfzMY5a18GvYfQ/600?n=1",
                "listennum": 32815,
                "type":1,
            },
            {
                "creator": {
                    "name": "Etc in the great",
                },
                "dissid": "7052228038",
                "dissname": "Synthwave · 复古爱好者的音乐",
                "imgurl": "http://p.qpic.cn/music_cover/drZnBOxDNzaK3s5ZzZNDxeicqdEvKcDGAJKYZLJfL9HeShxyriaZW7Hw/600?n=1",
                "listennum": 20698,
                "type":1,
            },
            {
                "creator": {
                    "name": "尐尐",
                },
                "dissid": "7123186196",
                "dissname": "极致舒缓 • 欧美致郁男嗓",
                "imgurl": "http://p.qpic.cn/music_cover/z6iaBQ7jDmibXhEAlvTSQvnyPdCQofcnuNKJRBPusmyCFVJX3icPykXSw/600?n=1",
                "listennum": 39701,
                "type":1,
            },
            {
                "creator": {
                    "name": "鹿仁",
                },
                "dissid": "7256965401",
                "dissname": "蜜瓜味情歌 · 糖度适中",
                "imgurl": "http://p.qpic.cn/music_cover/AhbCa0vazSRDjEJhYwthgr4J9aCDx7fpAF0N8xds4fTekw2lWjVtrQ/600?n=1",
                "listennum": 61384,
                "type":1,
            },
            {
                "creator": {
                    "name": "QQ音乐VIP",
                },
                "dissid": "7260376206",
                "dissname": "独处时光：萦绕耳边的韩式旋律",
                "imgurl": "http://p.qpic.cn/music_cover/KetjXWSVppvyrVJfzfdpibicIiapI2YDTPgVfUAic9pbibicediaWyxmeNHRg/600?n=1",
                "listennum": 37139,
                "type":1,
            },
            {
                "creator": {
                    "name": "小众又怎样",
                },
                "dissid": "7232280687",
                "dissname": "国风韵：我今生有何求，唯你",
                "imgurl": "http://p.qpic.cn/music_cover/8eiaDBJ27yYicpMibYZmmEdNEPOTSqwhACUvtEnD6KMr17iauSH0IQBibPQ/600?n=1",
                "listennum": 179813,
                "type":1,
            },
            {
                "creator": {
                    "name": "小沐沐",
                },
                "dissid": "1138343644",
                "dissname": "李安导演电影原声巡礼",
                "imgurl": "http://p.qpic.cn/music_cover/ibKU7nvtiaIKKV07hcbURdFJConV9PUrKKr7n5cdeuKKOeGEwdYwWWTw/600?n=1",
                "listennum": 3767640,
                "type":1,
            },
            {
                "creator": {
                    "name": "木焓",
                },
                "dissid": "7190150630",
                "dissname": "人生不容易，快乐靠自己",
                "imgurl": "http://p.qpic.cn/music_cover/Gh1XgWazibYlbuPicu2mQqzEcXiaGHss37nXeWfCjlaMfFrtpP8rTjYSQ/600?n=1",
                "listennum": 49737,
                "type":1,
            },
            {
                "creator": {
                    "name": "鹿仁",
                },
                "dissid": "7100139967",
                "dissname": "古风小曲 · 一帘疏雨细于尘",
                "imgurl": "http://p.qpic.cn/music_cover/AhbCa0vazSRDjEJhYwthgjj2UjEGpR8hlbGaD5ib3Pms7CB1nSNglDw/600?n=1",
                "listennum": 85817,
                "type":1,
            },
            {
                "creator": {
                    "name": "小攀哟",
                },
                "dissid": "7217122000",
                "dissname": "温柔民谣：直抵内心柔软处",
                "imgurl": "http://p.qpic.cn/music_cover/amD8XDvFG8ClIJ5Hib0U0jUByD2iccbgiah7uZzC9y1ExIz8VcBA6pImA/600?n=1",
                "listennum": 277696,
                "type":2,
            },
            {
                "creator": {
                    "name": "呢喃 *",
                },
                "dissid": "7113730664",
                "dissname": "甜蜜时间 | 小猪佩奇你配我",
                "imgurl": "http://p.qpic.cn/music_cover/yaAoR5gcqYJQAXtyFibrhPQZ7rU9kcmgx61YNAa1gd25PXqUspxvZuw/600?n=1",
                "listennum": 197714,
                "type":2,
            },
            {
                "creator": {
                    "name": "小众又怎样",
                },
                "dissid": "7246873120",
                "dissname": "学会放手，该走的怎么也留不住",
                "imgurl": "http://p.qpic.cn/music_cover/8eiaDBJ27yYicpMibYZmmEdNEPOTSqwhACUBwbPGUW9GDr0iarXDqvKo7g/600?n=1",
                "listennum": 234733,
                "type":2,
            },
            {
                "creator": {
                    "name": "星辰俱乐部",
                },
                "dissid": "7159994910",
                "dissname": "独立流行：旋律中的柔和声线",
                "imgurl": "http://p.qpic.cn/music_cover/O9FbmkBn7CWyTWMfweTS56KicuVAFtrgg1wPWWecTn73ZvQrL8LibVdg/600?n=1",
                "listennum": 36667,
                "type":2,
            },
            {
                "creator": {
                    "name": "摇滚就完事了",
                },
                "dissid": "7100443600",
                "dissname": "念念有词，说出来的国产摇滚",
                "imgurl": "http://p.qpic.cn/music_cover/6weBgTxicwyiapvS0k8CTRNX6knWhfjwUhjTsYjVAra4jmC3xRqicAsrg/600?n=1",
                "listennum": 20461,
                "type":2,
            },
            {
                "creator": {
                    "name": "SaKu白水",
                },
                "dissid": "7174499004",
                "dissname": "轻和日系：缓解你的小压力",
                "imgurl": "http://p.qpic.cn/music_cover/bof4MDsSxjG6Va3xXJrNAEbjRtY86QboyibfdKl8js71Z2y2vMdzpSw/600?n=1",
                "listennum": 107429,
                "type":2,
            },
            {
                "creator": {
                    "name": "呢喃 *",
                },
                "dissid": "7101639060",
                "dissname": "小食光 ∙ 今日份开胃健脾丸",
                "imgurl": "http://p.qpic.cn/music_cover/yaAoR5gcqYJQAXtyFibrhPWlnwUkBAcIP6MH97oCjOdF4rnPUqo6WNQ/600?n=1",
                "listennum": 77770,
                "type":2,
            },
            {
                "creator": {
                    "name": "QQ音乐VIP",
                },
                "dissid": "7193047024",
                "dissname": "Indie Pop，独立于世的青年之声",
                "imgurl": "http://p.qpic.cn/music_cover/KetjXWSVppvyrVJfzfdpib3xZNWroU3koRoicCWNLJyqFnZXCaNXDIgw/600?n=1",
                "listennum": 80009,
                "type":2,
            },
            {
                "creator": {
                    "name": "鹿仁",
                },
                "dissid": "7120635814",
                "dissname": "中国风女声 · 倾慕韶华红颜",
                "imgurl": "http://p.qpic.cn/music_cover/AhbCa0vazSRDjEJhYwthgoxuDAGq1YzVEn28glx4EdSehmJ9ePSyCg/600?n=1",
                "listennum": 123407,
                "type":2,
            },
            {
                "creator": {
                    "name": "薄荷凉",
                },
                "dissid": "7181647475",
                "dissname": "情感共鸣！影视中的角色人物曲",
                "imgurl": "http://p.qpic.cn/music_cover/Ye8xJJLS3zf0lX5xTNk0TIAib3sA6USdLlj1uyusJMHDc96mBN9AjjA/600?n=1",
                "listennum": 55422,
                "type":2,
            },
            {
                "creator": {
                    "name": "梦里着迷",
                },
                "dissid": "7142966602",
                "dissname": "我会关注你的一切，假装在你身边",
                "imgurl": "http://p.qpic.cn/music_cover/2BoMq9QFI0489p1qIiaDYek4UlGibZ8yztm3XH9LapLYHwWldaTOYt1g/600?n=1",
                "listennum": 152266,
                "type":2,
            }
            
        ],
    }
    var result = [];
    datas.data.map((val,idx)=>{
        if(val.type==params.page){
            result.push(val);
        }
    })
    return result;
})

//推荐歌单推荐,前端page===后端每条数据的type，就返回该数据,懒加载，总共20条数据
Mock.mock('/singerList', 'get', (options) => {
   return [
       {
            singer_id: 4558,
            singer_mid: "0025NhlN2yWrP4",
            singer_name: "周杰伦",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M0000025NhlN2yWrP4.webp",
            singer_firstName:'z'
        },
        {
            singer_id: 13948,
            singer_mid: "001fNHEf1SFEFN",
            singer_name: "G.E.M. 邓紫棋",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000001fNHEf1SFEFN.webp",
            singer_firstName:'d'
        },
        {
            singer_id: 5062,
            singer_mid: "002J4UUk29y8BY",
            singer_name: "薛之谦",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000002J4UUk29y8BY.webp",
            singer_firstName:'x',
        },
        {
            singer_id: 7221,
            singer_mid: "000CK5xN3yZDJt",
            singer_name: "许嵩",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000000CK5xN3yZDJt.webp",
            singer_firstName:'x'
        },
        {
            singer_id: 1288409,
            singer_mid: "002vALgR3hRRlv",
            singer_name: "音阙诗听",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000002vALgR3hRRlv.webp",
            singer_firstName:'y'
        },
        {
            singer_id: 4286,
            singer_mid: "001BLpXF2DyJe2",
            singer_name: "林俊杰",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000001BLpXF2DyJe2.webp",
            singer_firstName:'l',
        },
        {
            singer_id: 1473880,
            singer_mid: "004V53Ga0bV65j",
            singer_name: "陈雪凝",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000004V53Ga0bV65j.webp",
            singer_firstName:'c',
        },
        {
            singer_id: 60505,
            singer_mid: "000aHmbL2aPXWH",
            singer_name: "李荣浩",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000000aHmbL2aPXWH.webp",
            singer_firstName:'l',
        },
        {
            singer_id: 944940,
            singer_mid: "0020PeOh4ZaCw1",
            singer_name: "Alan Walker (艾兰·沃克)",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M0000020PeOh4ZaCw1.webp",
            singer_firstName:'a'
        },
        {
            singer_id: 265,
            singer_mid: "001JDzPT3JdvqK",
            singer_name: "王力宏",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000001JDzPT3JdvqK.webp",
            singer_firstName:'w'
        },
        {
            singer_id: 143,
            singer_mid: "003Nz2So3XXYek",
            singer_name: "陈奕迅",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.webp",
            singer_firstName:'c'
        },
        {
            singer_id: 3954,
            singer_mid: "001z2JmX09LLgL",
            singer_name: "汪苏泷",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000001z2JmX09LLgL.webp",
            singer_firstName:'w',
        },
        {
            singer_id: 89698,
            singer_mid: "003Cn3Yh16q1MO",
            singer_name: "庄心妍",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000003Cn3Yh16q1MO.webp",
            singer_firstName:'z',
        },
        {
            singer_id: 112,
            singer_mid: "000hNnWC3kko2c",
            singer_name: "蔡健雅",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000000hNnWC3kko2c.webp",
            singer_firstName:'c',
        },
        {
            singer_id: 1507534,
            singer_mid: "001BHDR33FZVZ0",
            singer_name: "毛不易",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000001BHDR33FZVZ0.webp",
            singer_firstName:'m',
        },
        {
            singer_id: 19851,
            singer_mid: "000t2qd13dLpae",
            singer_name: "G-DRAGON (权志龙)",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000000t2qd13dLpae.webp",
            singer_firstName:'g',
        },
        {
            singer_id: 2,
            singer_mid: "002pUZT93gF4Cu",
            singer_name: "BEYOND",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000002pUZT93gF4Cu.webp",
            singer_firstName:'b',
        },
        {
            singer_id: 11733,
            singer_mid: "004AlfUb0cVkN1",
            singer_name: "BIGBANG (빅뱅)",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000004AlfUb0cVkN1.webp",
            singer_firstName:'b',
        },
        {
            singer_id: 940748,
            singer_mid: "004WgCsE3KBddt",
            singer_name: "陈粒",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000004WgCsE3KBddt.webp",
            singer_firstName:'c',
        },
        {
            singer_id: 39657,
            singer_mid: "000LsFo136kIv4",
            singer_name: "魏新雨",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000000LsFo136kIv4.webp",
            singer_firstName:'w',
        },
        {
            singer_id: 4365,
            singer_mid: "004NMZuf2BLjg8",
            singer_name: "周传雄",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000004NMZuf2BLjg8.webp",
            singer_firstName:'z',
        },
        {
            singer_id: 198135,
            singer_mid: "001IoTZp19YMDG",
            singer_name: "易烊千玺",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000001IoTZp19YMDG.webp",
            singer_firstName:'y',
        },
        {
            singer_id: 4715,
            singer_mid: "001e4pOU25pgzC",
            singer_name: "郑源",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000001e4pOU25pgzC.webp",
            singer_firstName:'z',
        },
        {
            singer_id: 4615,
            singer_mid: "002ZOuVm3Qn20Y",
            singer_name: "李宇春",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000002ZOuVm3Qn20Y.webp",
            singer_firstName:'l',
        },
        {
            singer_id: 199509,
            singer_mid: "003fA5G40k6hKc",
            singer_name: "周深",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000003fA5G40k6hKc.webp",
            singer_firstName:'z',
        },
        {
            singer_id: 67008,
            singer_mid: "000poF8D027tPr",
            singer_name: "于文文",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000000poF8D027tPr.webp",
            singer_firstName:'y',
        },
        {
            singer_id: 11608,
            singer_mid: "003tMm0y0TuewY",
            singer_name: "杨宗纬",
            singer_pic: "http://y.gtimg.cn/music/photo_new/T001R150x150M000003tMm0y0TuewY.webp",
            singer_firstName:'y',
        },
    ]
})
// 返回歌手详情
Mock.mock(RegExp('/singerMsg' + ".*"), 'get', (options) => {
    var data = [
        {
            songList: [
                {
                    title:'绿色',
                    collect:'陈雪凝-绿色',
                    musicUrl:'https://m10.music.126.net/20191107002508/51c16569b626688116943b9866a09542/ymusic/76b4/dcbb/0a65/9198b18815ee8ce42ae368ae29276f78.mp3',
                    imgUrl:'https://p1.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg?param=34y34',
                },
                {
                    title:'你的酒馆对我打了烊',
                    collect:'陈雪凝-你的酒馆对我打了烊',
                    musicUrl:'https://m10.music.126.net/20191107002622/4d822c23c13e69f11c4a47913218a7a1/ymusic/8282/098a/d744/be1e1d3c2a46b4cbd259aca7ff050cd3.mp3',
                    imgUrl:'https://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=34y34',
                },
                {
                    title:'假装',
                    collect:"陈雪凝-拾陆",
                    musicUrl:'https://m801.music.126.net/20191107002709/cb14de00b8fa9ef047dfd68ef2133aae/jdyyaac/530c/5552/025d/df2a228f53b8a829452057d07e1c0946.m4a',
                    imgUrl:'https://p1.music.126.net/LLI28TeCfNBo6DK1Ct1k4Q==/109951163249809425.jpg?param=34y34',
                },
                {
                    title:'没有人心疼我',
                    collect:"陈雪凝-没有人心疼我",
                    musicUrl:'https://m801.music.126.net/20191107002735/ced86ef397f5c73843fa9ca10fafd97f/jdyyaac/0108/0f5b/515a/6b00f40393816c177216f06acf7fd7bb.m4a',
                    imgUrl:'https://p1.music.126.net/K7Bmtm6YZ6U0YKWd66fk1A==/109951163339830733.jpg?param=34y34',
                },
                {
                    title:'我唯一青春里的路人',
                    coolect:"陈雪凝-拾陆",
                    musicUrl:'https://m801.music.126.net/20191107002810/8b10adc667a253ee919484bc47e5992c/jdyyaac/0e5b/050f/070b/918fdd11f12ef085a5fd0a79e63c5041.m4a',
                    imgUrl:'https://p1.music.126.net/LLI28TeCfNBo6DK1Ct1k4Q==/109951163249809425.jpg?param=34y34',
                },
                {
                    title:'别再靠近我',
                    collect:"陈雪凝-拾陆",
                    musicUrl:'https://m10.music.126.net/20191107002845/e56880fe843bf7e60026ee3d9c30123b/yyaac/025e/0f0c/5159/5408978bb78f6fb031d9f33eb0430aad.m4a',
                    imgUrl:'https://p1.music.126.net/duFcrobtoaiM_9X0iOBGLw==/109951164200935058.jpg?param=34y34',
                },
            ],
            singerId:1473880,
            name:'陈雪凝',
            headerImg:'http://p1.music.126.net/UheOVkTuZEGnT1GarIj4Pw==/109951163985034688.jpg?param=640y300'
        },
        {
            songList: [
                {
                    title:'富士山下',
                    collect:"陈奕迅-What's Going On…?",
                    musicUrl:'https://m801.music.126.net/20191201185720/0cd2af6f263d05e1acaec69e7457a5ea/jdyyaac/0353/055e/565e/4910a621a524e5158013a4ccdad535d9.m4a',
                    //专辑图片
                    imgUrl:'http://p2.music.126.net/PcJq6i7zMcPgudejdn1yeg==/109951163256302356.jpg?param=130y130',
                },
                {
                    title:'好久不见',
                    collect:"陈奕迅-认了吧",
                    musicUrl:'https://m801.music.126.net/20191201185738/f60d428b2ef954a49dfe3e35ea79105b/jdyyaac/060f/0e52/0f5f/1e6b639292982da2982285c8fd925a9d.m4a',
                    imgUrl:'http://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=130y130',
                },
                {
                    title:'我们',
                    collect:"陈奕迅-我们",
                    musicUrl:'https://m801.music.126.net/20191201182528/9ed6a84922299d2a782e61fd62a43bff/jdyyaac/565d/0108/060c/a70d7e94de6be8ed67881f66c972ad97.m4a',
                    imgUrl:'http://p1.music.126.net/Ng7OR-bdgrHQKXzLyj2mGg==/109951163240732641.jpg?param=130y130',
                },
                {
                    title:'淘汰',
                    collect:"陈奕迅-认了吧",
                    musicUrl:'https://m801.music.126.net/20191201001414/6b7cd4ccc5b9fa3bfc9ad292105e271e/jdyyaac/005d/0752/0509/779e0c46b4088f86c7d02c0ba5ea053c.m4a',
                    imgUrl:'http://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=130y130',
                },
                {
                    title:'阴天快乐',
                    collect:"陈奕迅-rice & shine",
                    musicUrl:'https://m701.music.126.net/20191107122003/2df88b5874fad9477d54c37f11794478/jdyyaac/565b/515b/0109/a1aa02bb57f1bdf722e06c29a5be07d5.m4a',
                    imgUrl:'http://p1.music.126.net/EES1U3UVWUdt_tHyiY8XAw==/5962651557619306.jpg?param=130y130',
                },
                {
                    title:'红玫瑰',
                    collect:"陈奕迅-认了吧",
                    musicUrl:'https://m801.music.126.net/20191107122055/1b678aae7f720e8bd518f49f44c87c5a/jdyyaac/535b/0f52/030e/d1ac2bd7d788e8e8d68c4d4a3eed928d.m4a',
                    imgUrl:'http://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=130y130',
                },
                {
                    title:"爱情呼叫转移",
                    collect:"陈奕迅-认了吧",
                    musicUrl:'https://m701.music.126.net/20191107122124/e4db5be516d0c2748529c1b76ecc776d/jdyyaac/010c/530f/0f5e/6f5ad8416fdeba9f078d84c18ce3208e.m4a',
                    imgUrl:'http://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=130y130',
                },
                {
                    title:'浮夸',
                    collect:"陈奕迅-浮夸",
                    musicUrl:'https://m701.music.126.net/20191107122200/08e4fae19263283dc7d7a9ce980ecf34/jdyyaac/075a/0453/050b/00b5bd3c4a39540c300f2ab9f25601a2.m4a',
                    imgUrl:'http://p1.music.126.net/Bl1hEdJbMSj5YJsTqUjr-w==/109951163520311175.jpg?param=130y130',
                },
                {
                    title:'一丝不挂',
                    collect:"陈奕迅-Time Files",
                    musicUrl:'https://m801.music.126.net/20191107122225/c643481a0eab64c888c8a6a5ae154aef/jdyyaac/0553/020e/515d/29513ea82c5d42b48c4df74cee0cf286.m4a',
                    imgUrl:'http://p2.music.126.net/qE_9M-Ge5qwuk55IfkNO2g==/109951163200234557.jpg?param=130y130',
                },
                {
                    title:'孤独患者',
                    collect:"陈奕迅-孤独患者",
                    musicUrl:'https://m801.music.126.net/20191107122258/cfa8a6098815a4b5656d597b79b932c1/jdyyaac/0509/000e/040b/2caff247dc7d6a0cbf4f3a1edc5fb600.m4a',
                    imgUrl:'http://p2.music.126.net/Po0tJTtv4aBaYozWlnojHg==/18546562139313276.jpg?param=130y130',
                },
                {
                    title:'单车',
                    collect:"陈奕迅-单车",
                    musicUrl:'https://m801.music.126.net/20191108232824/319dbfd0235be2179f9b60f7bc9a10a5/jdyyaac/010f/515e/045c/6ec46871ecf436f5b9423681c0134140.m4a',
                    imgUrl:'http://p2.music.126.net/qE_9M-Ge5qwuk55IfkNO2g==/109951163200234557.jpg?param=130y130',
                },
                {
                    title:'明年今日',
                    collect:"陈奕迅-Eason Moving on Stage",
                    musicUrl:'https://m801.music.126.net/20191108232913/6a2aa4fb28eb209ae539673994b38e8e/jdyyaac/0453/0652/515f/3960a4516718373c38f9f59814050912.m4a',
                    imgUrl:'http://p2.music.126.net/flGSrlC-Jh5XM2IVD1YTxw==/109951163432563109.jpg?param=130y130',
                },
                {
                    title:'可以了',
                    collect:"陈奕迅-rice & shine",
                    musicUrl:'https://m701.music.126.net/20191108233017/85906fda6f8554e199891598c84df00f/jdyyaac/520b/055e/540b/ea655dede324ae2b9678caf3268954af.m4a',
                    imgUrl:'http://p1.music.126.net/EES1U3UVWUdt_tHyiY8XAw==/5962651557619306.jpg?param=130y130',
                },
                {
                    title:"苦瓜",
                    collect:"陈奕迅-Stranger Under My Skin",
                    musicUrl:'https://m801.music.126.net/20191108233116/12b93814a12582f2c77d1517cd2a952d/jdyyaac/0359/0052/055b/438b95b410788eda943321eea45ef51a.m4a',
                    imgUrl:'http://p2.music.126.net/GGYQjJ-zDEivv9l6QgJUFg==/109951163020567917.jpg?param=130y130',
                },
                {
                    title:"葡萄成熟时",
                    collect:"陈奕迅- U-87",
                    musicUrl:'https://m701.music.126.net/20191108233228/8bc92dba673707674c6fa7a0346e041a/jdyyaac/520b/050c/555a/ea11fb64892fd26050b7b01168450f12.m4a',
                    imgUrl:'http://p2.music.126.net/Bl1hEdJbMSj5YJsTqUjr-w==/109951163520311175.jpg?param=130y130',
                },
                {
                    title:"人来人往",
                    collect:"陈奕迅-Get A Life 演唱会",
                    musicUrl:'https://m701.music.126.net/20191108233311/3d179fdca124a76a01480c6576f32328/jdyyaac/520f/555c/060e/eef14f20ceb69a0e7ed01dca54f6a61d.m4a',
                    imgUrl:'http://p2.music.126.net/LE6HV_Y5-HXFfdXKGhJ94Q==/109951163104933982.jpg?param=130y130',
                },
                {
                    title:"因为爱情",
                    collect:"陈奕迅/王菲-Stranger Under My Skin",
                    musicUrl:'https://m701.music.126.net/20191108233430/9666aff45226c2fd62df3d1a87482989/jdyyaac/0153/005b/555d/69c27747007157be70dcb72cf1d25f43.m4a',
                    imgUrl:'http://p2.music.126.net/GGYQjJ-zDEivv9l6QgJUFg==/109951163020567917.jpg?param=130y130',
                },
                {
                    title:"落花流水",
                    collect:"陈奕迅-Solidays 新曲+精选",
                    musicUrl:'https://m801.music.126.net/20191108233610/4b2423738fc5e6a43f33e972386e6430/jdyyaac/545d/025c/035e/c741aff84356b012fa9b4471dba4f4f5.m4a',
                    imgUrl:'http://p1.music.126.net/q4MZj15xz1usJq0dIu-LRg==/109951163381539466.jpg?param=130y130',
                },
                {
                    title:"倾城",
                    collect:"陈奕迅-倾城",
                    musicUrl:'https://m701.music.126.net/20191108233708/f40cbf4e18338d1b14a1603187d8186d/jdyyaac/5259/555e/005c/e3cc321ffcb4f84ef92d76ba11eaf9d8.m4a',
                    imgUrl:'https://p2.music.126.net/o_OjL_NZNoeog9fIjBXAyw==/18782957139233959.jpg?param=34y34',
                },
                {
                    title:"稳稳的幸福",
                    collect:"陈奕迅-2015江苏卫视新年演唱会",
                    musicUrl:'https://m701.music.126.net/20191108233751/61935142aad463c1d8b7a5fd7b5b25b9/jdyyaac/0208/5408/065d/5b9ecf950fcb0ddb6260175f3fb75458.m4a',
                    imgUrl:'http://p2.music.126.net/GGYQjJ-zDEivv9l6QgJUFg==/109951163020567917.jpg?param=130y130',
                },
            ],
            singerId:143,
            name:'陈奕迅',
            headerImg:'http://p1.music.126.net/nILBk4DaE3yV__25uq-5GQ==/18641120139241412.jpg?param=640y300'
        },
    ]
    var params = getparams(options.url);
    return data[1];//只返回陈奕迅
    // return data.filter(val=>val.singerId==params.singerId)[0]; //filter返回数组，只要第一项就行
})
/*re,comList?page=0&type=1"转化成
var optionObj = {
    page:0,
    type:1
}
*/
function getparams(para){
    if(typeof para==='string'){
        var str = para.split(/[?|&]/);
        var arr = str.slice(1,str.length);
        var obj = {};
        arr.map((val,idx)=>{
            var temp = val.split("=");
            obj[temp[0]] = temp[1];
        })
        return obj;
    }
}

export default Mock;