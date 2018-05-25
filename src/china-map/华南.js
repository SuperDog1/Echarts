(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports', 'echarts'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !==
    'string') {
    // CommonJS
    factory(exports, require('echarts'));
  } else {
    // Browser globals
    factory({}, root.echarts);
  }
}(this, function(exports, echarts) {
  var log = function(msg) {
    if (typeof console !== 'undefined') {
      console && console.error && console.error(msg);
    }
  }
  if (!echarts) {
    log('ECharts is not Loaded');
    return;
  }
  if (!echarts.registerMap) {
    log('ECharts Map is not loaded')
    return;
  }
  echarts.registerMap('china', {
    "type": "FeatureCollection",
    "features": [{
      "id": "440000",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@QdAua"],
          ["@@lxDLo"],
          ["@@sbhNLo"],
          ["@@Ă ā"],
          ["@@WltO[["],
          ["@@Kr]S"],
          ["@@eI]y"],
          ["@@I|Mym"],
          ["@@Û³LS¼Y"],
          ["@@nvºBëui©`¾"],
          ["@@zdÛJw®"],
          ["@@°¯"],
          ["@@a yAª¸ËJIxØ@ĀHAmÃV¡ofuo"],
          ["@@sŗÃÔėAƁZÄ ~°ČPäh"],
          ["@@¶ÝÌvmĞh­ıQ"],
          ["@@HdSjĒ¢D}waru«ZqadYM"],
          ["@@el\\LqqU"],
          ["@@~rMo\\"],
          ["@@f^C"],
          ["@@øPªoj÷ÍÝħXČx°Q¨ıXNv"],
          ["@@gÇƳo[~tly"],
          ["@@EÆC¿"],
          ["@@OP"],
          [
            "@@wđógĝ[³¡VÙæÅöMÌ³¹pÁaËýý©D©ÜJŹƕģGą¤{ÙūÇO²«BƱéAÒĥ¡«BhlmtÃPµyU¯ucd·w_bŝcīímGO|KPȏŹãŝIŕŭŕ@Óoo¿ē±ß}ŭĲWÈCőâUâǙIğŉ©IĳE×Á³AówXJþ±ÌÜÓĨ£L]ĈÙƺZǾĆĖMĸĤfÎĵlŨnÈĐtFFĤêk¶^k°f¶g}®Faf`vXŲxl¦ÔÁ²¬Ð¦pqÊÌ²iXØRDÎ}Ä@ZĠsx®AR~®ETtĄZƈfŠŠHâÒÐAµ\\S¸^wĖkRzalŜ|E¨ÈNĀňZTpBh£\\ĎƀuXĖtKL¶G|»ĺEļĞ~ÜĢÛĊrOÙîvd]n¬VÊĜ°RÖpMƂªFbwEÀ©\\¤]ŸI®¥D³|Ë]CöAŤ¦æ´¥¸Lv¼¢ĽBaôF~®²GÌÒEYzk¤°ahlVÕI^CxĈPsBƒºV¸@¾ªR²ĨN]´_eavSivc}p}Đ¼ƌkJÚe th_¸ ºx±ò_xNË²@ă¡ßH©Ùñ}wkNÕ¹ÇO½¿£ĕ]ly_WìIÇª`uTÅxYĒÖ¼kÖµMjJÚwn\\hĒv]îh|ÈƄøèg¸Ķß ĉĈWb¹ƀdéĘNTtP[öSvrCZaGubo´ŖÒÇĐ~¡zCIözx¢PnÈñ @ĥÒ¦]ƞV}³ăĔñiiÄÓVépKG½ÄÓávYoC·sitiaÀyŧÎ¡ÈYDÑům}ý|m[węõĉZÅxUO}÷N¹³ĉo_qtăqwµŁYÙǝŕ¹tïÛUÃ¯mRCºĭ|µÕÊK½Rē ó]GªęAx»HO£|ām¡diď×YïYWªŉOeÚtĐ«zđ¹TāúEá²\\ķÍ}jYàÙÆſ¿Çdğ·ùTßÇţʄ¡XgWÀǇğ·¿ÃOj YÇ÷Qěi"
          ]
        ],
        "encodeOffsets": [
          [
            [117381, 22988]
          ],
          [
            [116552, 22934]
          ],
          [
            [116790, 22617]
          ],
          [
            [116973, 22545]
          ],
          [
            [116444, 22536]
          ],
          [
            [116931, 22515]
          ],
          [
            [116496, 22490]
          ],
          [
            [116453, 22449]
          ],
          [
            [113301, 21439]
          ],
          [
            [118726, 21604]
          ],
          [
            [118709, 21486]
          ],
          [
            [113210, 20816]
          ],
          [
            [115482, 22082]
          ],
          [
            [113171, 21585]
          ],
          [
            [113199, 21590]
          ],
          [
            [115232, 22102]
          ],
          [
            [115739, 22373]
          ],
          [
            [115134, 22184]
          ],
          [
            [113056, 21175]
          ],
          [
            [119573, 21271]
          ],
          [
            [119957, 24020]
          ],
          [
            [115859, 22356]
          ],
          [
            [116561, 22649]
          ],
          [
            [116285, 22746]
          ]
        ]
      },
      "properties": {
        "cp": [113.280637, 23.125178],
        "name": "广东",
        "childNum": 24
      }
    }, {
      "id": "450000",
      "type": "Feature",
      "geometry": {
        "type": "MultiPolygon",
        "coordinates": [
          ["@@H TQ§A"],
          [
            "@@ĨÊªLƊDÎĹĐCǦė¸zÚGn£¾rªŀÜt¬@ÖÚSx~øOŒŶÐÂæȠ\\ÈÜObĖw^oÞLf¬°bI lTØBÌF£Ć¹gñĤaYt¿¤VSñK¸¤nM¼JE±½¸ñoÜCƆæĪ^ĚQÖ¦^f´QüÜÊz¯lzUĺš@ìp¶n]sxtx¶@~ÒĂJb©gk{°~c°`Ô¬rV\\la¼¤ôá`¯¹LCÆbxEræOv[H­[~|aB£ÖsºdAĐzNÂðsÞÆĤªbab`ho¡³F«èVlo¤ÔRzpp®SĪº¨ÖºNĳd`a¦¤F³ºDÎńĀìCĜº¦Ċ~nS|gźvZkCÆj°zVÈÁƔ]LÊFZgčP­kini«qÇczÍY®¬Ů»qR×ō©DÕ§ƙǃŵTÉĩ±ıdÑnYYĲvNĆĆØÜ Öp}e³¦m©iÓ|¹ħņ|ª¦QF¢Â¬ʖovg¿em^ucà÷gÕuíÙćĝ}FĻ¼Ĺ{µHKsLSđƃrč¤[AgoSŇYMÿ§Ç{FśbkylQxĕ]T·¶[BÑÏGáşşƇeăYSs­FQ}­BwtYğÃ@~CÍQ ×WjË±rÉ¥oÏ ±«ÓÂ¥kwWűmcih³K~µh¯e]lµélEģEďsmÇŧē`ãògK_ÛsUʝćğ¶höO¤Ǜn³c`¡y¦CezYwa[ďĵűMę§]XÎ_íÛ]éÛUćİÕBƣ±dy¹T^dûÅÑŦ·PĻþÙ`K¦¢ÍeĥR¿³£[~äu¼dltW¸oRM¢ď\\z}Æzdvň{ÎXF¶°Â_ÒÂÏL©ÖTmu¼ãlīkiqéfA·Êµ\\őDc¥ÝFyÔćcűH_hLÜêĺĐ¨c}rn`½Ì@¸¶ªVLhŒ\\Ţĺk~Ġið°|gtTĭĸ^xvKVGréAébUuMJVÃO¡qĂXËSģãlýà_juYÛÒBG^éÖ¶§EGÅzěƯ¤EkN[kdåucé¬dnYpAyČ{`]þ¯TbÜÈk¡ĠvàhÂƄ¢Jî¶²"
          ]
        ],
        "encodeOffsets": [
          [
            [111707, 21520]
          ],
          [
            [107619, 25527]
          ]
        ]
      },
      "properties": {
        "cp": [108.320004, 22.82402],
        "name": "广西",
        "childNum": 2
      }
    }, {
      "id": "460000",
      "type": "Feature",
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          "@@¦Ŝil¢XƦƞòïè§ŞCêɕrŧůÇąĻõ·ĉ³œ̅kÇm@ċȧŧĥĽʉ­ƅſȓÒË¦ŝE}ºƑ[ÍĜȋ gÎfǐÏĤ¨êƺ\\Ɔ¸ĠĎvʄȀÐ¾jNðĀÒRZǆzÐŘÎ°H¨Ƣb²_Ġ "
        ],
        "encodeOffsets": [
          [112750, 20508]
        ]
      },
      "properties": {
        "cp": [110.33119, 20.031971],
        "name": "海南",
        "childNum": 1
      }
    }],
    "UTF8Encoding": true
  });
}));
