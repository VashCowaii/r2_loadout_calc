//date values need to be stored as YYYY MM DD
//content types are either "Build" or "Guide"
//"topic" is the display name

//yt vids only need the last of the link so if it is https://youtu.be/7fWFPwAflMI then the embed for a yt entry is just 7fWFPwAflMI

let contentGuides = [
    // {"author": "Vash","topic": "","isYTVid": true,"date": 20240000,"embedLink": "","contentType": "Build","isOutdated": false,"entityArray": [],"pinnedCommentFlag": false},

    {"author": "Vash","topic": "Sharen Build Guide","isYTVid": true,"date": 20241209,"embedLink": "m2hcB56e4e0","contentType": "Build","isOutdated": false,"entityArray": ["Sharen"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Luna Team Guide","isYTVid": true,"date": 20241116,"embedLink": "MLO6rvdcV3Q","contentType": "Build","isOutdated": false,"entityArray": ["Luna","Lepic","Freyna","Kyle"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "The Real DEF Formula","isYTVid": true,"date": 20241109,"embedLink": "7fWFPwAflMI","contentType": "Guide","isOutdated": false,"entityArray": [],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Viessa is Bait","isYTVid": true,"date": 20241031,"embedLink": "L4qpU8ThiXg","contentType": "Build","isOutdated": false,"entityArray": ["Viessa"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Lepic - Crit vs NonCrit","isYTVid": true,"date": 20241023,"embedLink": "RhEg_zfxN3Y","contentType": "Build","isOutdated": false,"entityArray": ["Lepic"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Jayber is the Worst","isYTVid": true,"date": 20241020,"embedLink": "f5OAjoNjTS4","contentType": "Build","isOutdated": false,"entityArray": ["Jayber"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "New Stalker & Gluttony Stats","isYTVid": true,"date": 20241014,"embedLink": "QRGURpDOX2c","contentType": "Guide","isOutdated": false,"entityArray": [],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Kyle & Esiemo (0-crit meta)","isYTVid": true,"date": 20241013,"embedLink": "UDE7f7820VM","contentType": "Build","isOutdated": false,"entityArray": ["Kyle","Esiemo"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Bunny (0-crit meta)","isYTVid": true,"date": 20241011,"embedLink": "VK9q_EZYHZ8","contentType": "Build","isOutdated": false,"entityArray": ["Bunny"],"pinnedCommentFlag": true},
    {"author": "Vash","topic": "Freyna (0-crit meta)","isYTVid": true,"date": 20241011,"embedLink": "4FfKQ3SZ3xs","contentType": "Build","isOutdated": false,"entityArray": ["Freyna"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "DEF and Boss DR","isYTVid": true,"date": 20241003,"embedLink": "dBIHLVqBO04","contentType": "Guide","isOutdated": true,"entityArray": [],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Kyle Buffs","isYTVid": true,"date": 20240926,"embedLink": "ZAPIqHyd0vA","contentType": "Build","isOutdated": true,"entityArray": ["Kyle"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Esiemo Buffs","isYTVid": true,"date": 20240926,"embedLink": "ZAPIqHyd0vA","contentType": "Build","isOutdated": true,"entityArray": ["Esiemo"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Esiemo Build","isYTVid": true,"date": 20240924,"embedLink": "XpwnXdYrtts","contentType": "Build","isOutdated": true,"entityArray": ["Esiemo"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Weapon Damage Calculations","isYTVid": true,"date": 20240917,"embedLink": "QD_tw5tEqNM","contentType": "Guide","isOutdated": false,"entityArray": [],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Enemy Crit Resistance","isYTVid": true,"date": 20240914,"embedLink": "_5A4JVKAPq0","contentType": "Guide","isOutdated": false,"entityArray": [],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Hailey Build","isYTVid": true,"date": 20240912,"embedLink": "dqcUa0yoI4Q","contentType": "Build","isOutdated": false,"entityArray": ["Hailey"],"pinnedCommentFlag": true},
    {"author": "Vash","topic": "Reactors & Skill Damage","isYTVid": true,"date": 20240908,"embedLink": "N-_HxNbSE3E","contentType": "Guide","isOutdated": false,"entityArray": [],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Kyle is Bugged","isYTVid": true,"date": 20240906,"embedLink": "57KSJPbHWYQ","contentType": "Build","isOutdated": true,"entityArray": ["Kyle"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Bunny","isYTVid": true,"date": 20240829,"embedLink": "cGW48h6vi4Q","contentType": "Build","isOutdated": true,"entityArray": ["Bunny"],"pinnedCommentFlag": false},
    {"author": "Vash","topic": "Lepic","isYTVid": true,"date": 20240824,"embedLink": "3bW3M2Z7jPs","contentType": "Build","isOutdated": true,"entityArray": ["Lepic"],"pinnedCommentFlag": false},


    {"author": "Lian","topic": "Python","isYTVid": false,"date": 20241115,"embedLink": "1857433761870168080","contentType": "Build","isOutdated": false,"entityArray": ["Gley","Python"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Gley","isYTVid": false,"date": 20241115,"embedLink": "1857433511566721268","contentType": "Build","isOutdated": false,"entityArray": ["Gley"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Piercing Light","isYTVid": false,"date": 20241019,"embedLink": "1847720906686419093","contentType": "Build","isOutdated": false,"entityArray": ["Piercing Light","Hailey"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Enzo","isYTVid": false,"date": 20241018,"embedLink": "1847309661331918967","contentType": "Build","isOutdated": false,"entityArray": ["Enzo"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Bunny","isYTVid": false,"date": 20241013,"embedLink": "1845455130981736711","contentType": "Build","isOutdated": false,"entityArray": ["Bunny"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Secret Garden","isYTVid": false,"date": 20240919,"embedLink": "1825486108022415737","contentType": "Build","isOutdated": false,"entityArray": ["Secret Garden"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Wave of Light","isYTVid": false,"date": 20240916,"embedLink": "1835905458441179629","contentType": "Build","isOutdated": false,"entityArray": ["Wave of Light"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Executor","isYTVid": false,"date": 20240914,"embedLink": "1834857681351217248","contentType": "Build","isOutdated": false,"entityArray": ["Executor","Gley"],"pinnedCommentFlag": false},
    {"author": "Lian","topic": "Enduring Legacy","isYTVid": false,"date": 20240822,"embedLink": "1826724587645833563","contentType": "Build","isOutdated": false,"entityArray": ["Enduring Legacy"],"pinnedCommentFlag": false},
]


contentGuides.sort((a, b) => b.date - a.date);