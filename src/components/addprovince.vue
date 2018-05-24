//将巴南区、江北区、渝北区、璧山区、北碚区、九龙坡区、沙坪坝区、大渡口区、南岸区、渝中区  
//等区域的coordinates和encodeOffsets放在统一的模块就能被当作是一个区域,然后删除原模块数据  
{  
    'type': 'Feature',  
    'id': '500103',  
    'properties': {  
        'name': '主城区',//自定义名称   
        'cp': [  
            106.574269,29.571625  
        ],  
        'childNum': 10  
    },  
    'geometry': {  
        'type': 'Polygon',  
        'coordinates': [  
            '@@nxnVlJlUXLu0083¦@x@Vl@nKVVX@V_V@@KlVXUu0084@lKlxXIl@ÈĊ@Vl@n_VJlu008Enu0090Vlnbu0084²VVVJVu0081VmUUkĕUamçUu008F@»W@@ĉnu0099V@XwVU@UUJWUXUW@UKm@UVUIVaUu0099UVmLUVu0083UUu0084UWWXUakVmUkbW@UVku0083UL@VW@kUWu0083u0081@mJUXVVUu0084@lmV@zklVVkLUl@¦u009BI',  
            '@@nLVU@wV@lVu0084@Xllu0084ÈKlU@Lu0084@@bVKnx@I@JVaV@u0084x@Il@@Un@laVVn@mu008Fku008DUIm`k@WXu0081Jmk¯mkxWIkxWJk_UmVUUKu0083@UUu0099@u0083u0084@l',  
            '@@@bVVXLu0082a@lnbWn@Lu0084@XVlK@VVLUVlbkLUKVVVL@Vu009AnXu0082VL@VV@UbVb@x@¦UxVb@bUJu0083L@Lu0084VVxlK@u0099nk@U@Wu0084UVLlKXVu0084@VblU@UUKVU@wn@VJVanLlkX@VaVKu0099¯@a@U@U@u0083VaUKu0084kUUu0083±maUkm@UUkbm@@Vk@@Ju0083wU@Ub@I@JmwUL@au0083@@KkVÇLku0083Wku0083@kUU@@xUVmKUnllUb',  
            '@@XzVlVVkbVL@JVĀXu008Eu0082¼Vu0084u0084u0084XbW`Xu009CWVÈu008Eu0084u0084VVu009Au008EVkV@@UXa@alK@Iu0083u0083U@UKWu0081UyUI@wVUUWVak@VUku0083W¹@WXI@yVIUK@kWwkÑ¯±W@u0099kUb@KkVVVmXu0083J',  
            '@@Xu0082VLV@u0084u0084@JkL@bWb@VU@UlÆu009CVyu0084a@nV@nn@KUu008F@IVJU_lJXu0090V@VlVIV`nIn°@bu0082lUbu009Au0084u0084KVI@aUaVw@¥@wUaVaU@@UUKWu0081u0099m@UUKUUVLlKkaVUUK@UkLWUu0083@@KXmma@ku0081bWKUU@aUamLnÞ@VWLk@@Wm@ULU@@Uu0099KUVWI',  
            '@@XKu0082L@Vu009A@XbV@lW@UV@@VXIV@Uu0099VKlL@Knu0090nJ@VV@VU@Iu0084@@mVUVWUUmL@V¯LUK@UV@UU@a@U@yU@WLUK@X@KUVmL@u0083@aXI@w@ammVk@WÛwm@UxVu0090u0081VVbVLUJVxVUu0084V@V@X@JUIVbm@@Vk@@VkL@lVLUJ@zWJ@X',  
            '@@Xºlu0084UVl@UbVXUV@xVJVzXJVUu009AL@VV@VKn@@Xl@XK@UmÝnKVbVakkVm@ku0084u0083UK@UmImu008F@LkKULVu009AU@WJ@UU@@VkXU@Wau0099@@Uu0081KWL',  
            '@@VVu0084JVL@bUVVnl`XIlwXJlw°nnlu0082IXW@UÇĉk@WJkwkLu0083@WVkU@LU@U`W@UXUV@n',  
            '@@k@@U@wu0084¥WKkVkImUmwu0081a@b@xWJ@b@u0084nKVU@L@WVLXKV@@z@V@bVVU@@VVL°K@U',  
            '@@VLu009A@VVu0084@VL@aUKu0083IUUu0083@@JUVU@'  
        ],  
        'encodeOffsets': [  
            [108990,30061],  
            [109013,30319],  
            [109013,30381],  
            [108585,30032],  
            [108855,30449],  
            [108799,30241],  
            [108799,30241],  
            [109092,30241],  
            [109080,30190],  
            [109036,30257]  
        ]  
    }  
}  




//提取成单独的区域  
{  
    'type': 'Feature',  
    'id': 'chong_qing_zcq_geo',  
    'properties': {  
        'name': '重庆主城区',  
        'cp': [  
            107.7539,  
            30.1904  
        ],  
        'childNum': 40  
    },  
    'geometry': {  
        'type': 'Polygon',  
        'coordinates': ['@@əȂòɜƨu0098ѺɛƦȁ̐@ƪu0097õŏφƥòȃƥ̍Ƨôυ̏ƧôñóóôɛŏƩôƧƥôƧóυƨu009C̒ѹôu009CƦȃ@փƥɛ̑@@ɜƧó@ɚƧ@ñφσõ@ŎɝôƧu0097@ʵѷóƧʵóu0098@ŎóŐó@ôȁƥu009Bó̒υôóʶəu0098ƧȄς̎ƧȂôƨƨƨφɛ̎Őƨʷɞ@ςu052EóŌôôφ@ɜu0588̎ƨ'],  
        'encodeOffsets': [[  
            111150,  
            32446  
        ]]  
    }  
}  
//为提取的区域添加数据链接指向  
'重庆主城区': {  
    getGeoJson: function (callback) {  
        require(['./geoJson/chong_qing_zcq_geo'], function (md) {  
            callback(decode(md));  
        });  
    }  
}  
//为提取的区域添加地图数据  
define('echarts/util/mapData/geoJson/chong_qing_zcq_geo', [], function () {  
    return {  
        'type': 'FeatureCollection',  
        'features': [  
            {  
                'type': 'Feature',  
                'id': '500113',  
                'properties': {  
                    'name': '巴南区',  
                    'cp': [  
                        106.7322,  
                        29.4214  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': [  
                        '@@nxnVlJlUXLu0083¦@x@Vl@nKVVX@V_V@@KlVXUu0084@lKlxXIl@ÈĊ@Vl@n_VJlu008Enu0090Vlnbu0084²VVVJVu0081VmUUkĕUamçUu008F@»W@@ĉnu0099V@XwVU@UUJWUXUW@UKm@UVUIVaUu0099UVmLUVu0083UUu0084UWWXUakVmUkbW@UVku0083UL@VW@kUWu0083u0081@mJUXVVUu0084@lmV@zklVVkLUl@¦u009BI'  
                    ],  
                    'encodeOffsets': [[  
                        108990,  
                        30061  
                    ]]  
                }  
            },  
            {  
                'type': 'Feature',  
                'id': '500105',  
                'properties': {  
                    'name': '江北区',  
                    'cp': [  
                        106.8311,  
                        29.6191  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@nLVU@wV@lVu0084@Xllu0084ÈKlU@Lu0084@@bVKnx@I@JVaV@u0084x@Il@@Un@laVVn@mu008Fku008DUIm`k@WXu0081Jmk¯mkxWIkxWJk_UmVUUKu0083@UUu0099@u0083u0084@l'],  
                    'encodeOffsets': [[  
                        109013,  
                        30319  
                    ]]  
                }  
            },  
            {  
                'type': 'Feature',  
                'id': '500112',  
                'properties': {  
                    'name': '渝北区',  
                    'cp': [  
                        106.7212,  
                        29.8499  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@@bVVXLu0082a@lnbWn@Lu0084@XVlK@VVLUVlbkLUKVVVL@Vu009AnXu0082VL@VV@UbVb@x@¦UxVb@bUJu0083L@Lu0084VVxlK@u0099nk@U@Wu0084UVLlKXVu0084@VblU@UUKVU@wn@VJVanLlkX@VaVKu0099¯@a@U@U@u0083VaUKu0084kUUu0083±maUkm@UUkbm@@Vk@@Ju0083wU@Ub@I@JmwUL@au0083@@KkVÇLku0083Wku0083@kUU@@xUVmKUnllUb'],  
                    'encodeOffsets': [[  
                        109013,  
                        30381  
                    ]]  
                }  
            },{  
                'type': 'Feature',  
                'id': '500227',  
                'properties': {  
                    'name': '璧山区',  
                    'cp': [  
                        106.2048,  
                        29.5807  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@XzVlVVkbVL@JVĀXu008Eu0082¼Vu0084u0084u0084XbW`Xu009CWVÈu008Eu0084u0084VVu009Au008EVkV@@UXa@alK@Iu0083u0083U@UKWu0081UyUI@wVUUWVak@VUku0083W¹@WXI@yVIUK@kWwkÑ¯±W@u0099kUb@KkVVVmXu0083J'],  
                    'encodeOffsets': [[  
                        108585,  
                        30032  
                    ]]  
                }  
            },{  
                'type': 'Feature',  
                'id': '500109',  
                'properties': {  
                    'name': '北碚区',  
                    'cp': [  
                        106.5674,  
                        29.8883  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@Xu0082VLV@u0084u0084@JkL@bWb@VU@UlÆu009CVyu0084a@nV@nn@KUu008F@IVJU_lJXu0090V@VlVIV`nIn°@bu0082lUbu009Au0084u0084KVI@aUaVw@¥@wUaVaU@@UUKWu0081u0099m@UUKUUVLlKkaVUUK@UkLWUu0083@@KXmma@ku0081bWKUU@aUamLnÞ@VWLk@@Wm@ULU@@Uu0099KUVWI'],  
                    'encodeOffsets': [[  
                        108855,  
                        30449  
                    ]]  
                }  
            },{  
                'type': 'Feature',  
                'id': '500107',  
                'properties': {  
                    'name': '九龙坡区',  
                    'cp': [  
                        106.3586,  
                        29.4049  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@XKu0082L@Vu009A@XbV@lW@UV@@VXIV@Uu0099VKlL@Knu0090nJ@VV@VU@Iu0084@@mVUVWUUmL@V¯LUK@UV@UU@a@U@yU@WLUK@X@KUVmL@u0083@aXI@w@ammVk@WÛwm@UxVu0090u0081VVbVLUJVxVUu0084V@V@X@JUIVbm@@Vk@@VkL@lVLUJ@zWJ@X'],  
                    'encodeOffsets': [[  
                        108799,  
                        30241  
                    ]]  
                }  
            },{  
                'type': 'Feature',  
                'id': '500106',  
                'properties': {  
                    'name': '沙坪坝区',  
                    'cp': [  
                        106.3696,  
                        29.6191  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@Xºlu0084UVl@UbVXUV@xVJVzXJVUu009AL@VV@VKn@@Xl@XK@UmÝnKVbVakkVm@ku0084u0083UK@UmImu008F@LkKULVu009AU@WJ@UU@@VkXU@Wau0099@@Uu0081KWL'],  
                    'encodeOffsets': [[  
                        108799,  
                        30241  
                    ]]  
                }  
            },  
            {  
                'type': 'Feature',  
                'id': '500108',  
                'properties': {  
                    'name': '南岸区',  
                    'cp': [  
                        106.6663,  
                        29.5367  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@VVu0084JVL@bUVVnl`XIlwXJlw°nnlu0082IXW@UÇĉk@WJkwkLu0083@WVkU@LU@U`W@UXUV@n'],  
                    'encodeOffsets': [[  
                        109092,  
                        30241  
                    ]]  
                }  
            },{  
                'type': 'Feature',  
                'id': '500104',  
                'properties': {  
                    'name': '大渡口区',  
                    'cp': [  
                        106.4905,  
                        29.4214  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@k@@U@wu0084¥WKkVkImUmwu0081a@b@xWJ@b@u0084nKVU@L@WVLXKV@@z@V@bVVU@@VVL°K@U'],  
                    'encodeOffsets': [[  
                        109080,  
                        30190  
                    ]]  
                }  
            },{  
                'type': 'Feature',  
                'id': '500103',  
                'properties': {  
                    'name': '渝中区',  
                    'cp': [  
                        106.5344,  
                        29.5477  
                    ],  
                    'childNum': 1  
                },  
                'geometry': {  
                    'type': 'Polygon',  
                    'coordinates': ['@@VLu009A@VVu0084@VL@aUKu0083IUUu0083@@JUVU@'],  
                    'encodeOffsets': [[  
                        109036,  
                        30257  
                    ]]  
                }  
            }  
        ],  
        'UTF8Encoding': true  
    }  
});  