//客户端模板数据配置列表
exports.xlsxList = [
    {input:"c_game(游戏配置)",out:"c_game", idKeyName : "key", transer : "Game"},
    {
        input: "c_lvl(等级相关)",
        out: "c_lvl",
        idName: "lvl",
        valHandler: {strToArr: ["ennobleCon"], strToArrInArr: ["upGradeProp", "propertys"]}
    },
    {input : "c_formula(公式)",out:"c_formula", idName : "name"},
    {input : "c_prop(常量)",out:"c_prop", idName : "type", transer : "Prop"},
    {input : "c_msgCode(消息码)",out:"c_msgCode", idKeyName : "code", ignores : ["id", "code", "remark", "range"]},
    {input : "c_open(等级开启)",out:"c_open", idKeyName : "key"},
    {input:"c_guide(引导)", out:"c_guide", valHandler:{strToObj:["option"]}},
    {input:"c_guildLvl(公会等级属性表)", out:"c_guildLvl", valHandler:{strToArrInArr:["ennobleCount","props"]}},

    {input:"c_payInfo(支付)",out:"c_payInfo", valHandler:{strToArr:["99999", "20001", "10001", "10002", "10004"]}, ignores : ["name"]},


    {input : "c_arenaRankReward(竞技场排名奖励)",out:"c_arenaRankReward"},
    {input : "t_itemBreak(戒指)",out:"t_itemBreak",valHandler:{strToArrInArr:["props"]}, ignores : ["name"]},
    {input : "c_gem(宝石)",out:"c_gem"},
    {input : "c_compound(合成)",out:"c_compound"},
    {input : "c_exchange(兑换)",out:"c_exchange"},
    {input : "c_mail(邮件)",out:"c_mail"},
    {input : "c_task(任务成就)",out:"c_task", valHandler:{strToArr:["uiLink"]}},
    {input : "c_nameData(名字库)",out:"c_nameData"},
    {input : "c_pvpRankReward(PVP排行奖励)",out:"c_pvpRankReward", valHandler:{strToArrInArr:["items"]}},
    {input : "c_realm(境界属性表)",out:"c_realm",valHandler:{strToArr:["reqItems"],strToArrInArr:["propertys"]}},
    {input : "c_recharge(充值)",out:"c_recharge"},
    {input : "c_reward(奖励)",out:"c_reward", valHandler:{strToObj:["rewardItems"]}},
    {input : "c_vip(vip)",out:"c_vip"},
    {input : "t_buff(战斗buff)",out:"t_buff"},
    {input : "t_copy(关卡副本表)",out:"t_copy",valHandler:{strToArr:["randMonsters"],strToArrInArr:["cond"]}},
    {input : "t_copyLoot(掉落表)",out:"t_copyLoot",valHandler:{strToArrInArr:["lootChildIds","randCounts","exItems"],strToArr:["showItems"]}},
    {input : "t_copyLootChild(掉落子表)",out:"t_copyLootChild",valHandler:{strToArrInArr:["items"],strToArr:["items2"]}},
    {input : "t_item(物品表)",out:"t_item",valHandler:{strToArrInArr:["dropId"]}},
    {input : "t_itemLogic(物品宝箱开启)",out:"t_itemLogic",valHandler:{strToArrInArr:["create","create2"],strToArr:["needItems"]},ignores : ["type"]},
    {input : "t_itemEquip(装备属性表)",out:"t_itemEquip",valHandler:{strToArrInArr:["propertys","randomPro", "fixProp"]}, ignores : ["name"]},
    {input : "t_itemRealm(物品境界属性)",out:"t_itemRealm",valHandler:{strToArrInArr:["propertys"]}, ignores : ["name"]},
    {input : "t_monster(怪物表)",out:"t_monster",valHandler:{strToArr:["skillIds","immunity"]}},
    {input : "t_wing(翅膀属性)",out:"t_wing"},
    {input : "t_wingStrength(翅膀强化)",out:"t_wingStrength"},
    {input : "t_skill(技能)",out:"t_skill"},
    {input : "t_hero(英雄)",out:"t_hero",valHandler:{strToArr:["skillIds"]}},
    {input : "c_shop(商店表)",out:"c_shop"},
    {input : "c_help(帮助)",out:"c_help"},
    {input : "c_chatSys(系统通知表)",out:"c_chatSys",valHandler:{strToArr:["arg"]}},
    {input : "c_guildFuncCfg(公会职能表)",out:"c_guildFuncCfg"},
    {input : "c_guildAct(公会贡献)",out:"c_guildAct",valHandler:{strToArr:["uiLink"]}},
    {input : "c_guildEnnoble(公会爵位表)",out:"c_guildEnnoble"},
    {input : "c_mysterShop(神秘商店)",out:"c_mysterShop",valHandler:{strToArr:["giftBag1","giftBag2","picture"],strToArrInArr:["integralItem1","integralItem2","integralItem3"]}},
    {input : "t_inheritedEquip(传承装备)", out:"t_inheritedEquip", valHandler:{strToArrInArr:["property"]}},
    {input : "c_bossParameter(BOSS参数表)",out:"c_bossParameter",valHandler:{
        strToArrInArr:["rankAward1","rankAward2","rankAward3","rankAward4","summonAward","guildAward","lastShotAward"],
        strToArr:["summonCost"]}},
    {input : "t_otherBuff(增益buff)",out:"t_otherBuff"},
    {input : "c_bossHurtRate(boss伤害奖励倍率表)",out:"c_bossHurtRate"},
    {input: "c_challengeCupRankReward(守擂排行奖励)", out:"c_challengeCupRankReward",valHandler:{strToArrInArr:["reward"]}},
    {input: "t_rebirth(转生表)", out:"t_rebirth"},
    {input: "c_customParameter(定制参数表)", out:"c_customParameter", valHandler:{strToArr:["equip_lvl_range"]}},
    {input : "c_luckyTalos(幸运塔罗牌)",out:"c_luckyTalos",valHandler:{strToArr:["subTypeDivide"]}},
    {input : "c_everydayCharge(天天充值)",out:"c_everydayCharge",valHandler:{strToArrInArr:["awardId"]}},
    {input : "t_medal(勋章属性)",out:"t_medal", valHandler:{strToArrInArr:["propertys"], strToArr:["lootArg"]}},
    {input : "t_medalLvl(勋章强化)",out:"t_medalLvl", valHandler:{strToArrInArr:["reqItems"]}},
    {input : "t_strengthRefine(强化精炼)",out:"t_strengthRefine", idName : "lvl"},
    {input : "c_demonLotus(妖莲进阶宝物)",out:"c_demonLotus", idName : "lvl",valHandler:{strToArrInArr:["treaPropertys"]}},
    {input : "c_genuineQi(真气)",out:"c_genuineQi", idName : "lvl"},
    {input : "c_heartStunt(心法表)",out:"c_heartStunt"},
    {input : "c_heartStuntLvl(心法等级表)",out:"c_heartStuntLvl", idName : "lvl", valHandler:{strToArr:["addProperty"]}},
    {input : "c_bossWorld(世界BOSS)",out:"c_bossWorld",valHandler:{
        strToArrInArr:["rankAward1","rankAward2","rankAward3","rankAward4","rankAward5","rankAward6","rankAward7","lastShotAward","failAward1","failAward2","failAward3","failAward4","failAward5","failAward6","failAward7"],
        strToArr:["startTime","endTime","treasureAward","treasurePercentAward"]}},
    {input : "c_bossRes(BOSS资源找回)",out:"c_bossRes",valHandler:{
        strToArrInArr:[
            "winRes1", "winRes2", "winRes3", "winRes4", "winRes5", "winRes6", "winRes7", "winRes8", "winRes9", "winRes10",
            "failRes1", "failRes2", "failRes3", "failRes4", "failRes5", "failRes6", "failRes7", "failRes8", "failRes9", "failRes10"
        ],strToArr:[
            "winCond1", "winCond2", "winCond3", "winCond4", "winCond5", "winCond6", "winCond7", "winCond8", "winCond9", "winCond10",
            "failCond1", "failCond2", "failCond3", "failCond4", "failCond5", "failCond6", "failCond7", "failCond8", "failCond9", "failCond10"
        ]
    }},
    {input : "c_vipCopy(VIP副本)",out:"c_vipCopy", idName : "vipLvl", valHandler:{strToArr:["copyIds"]}},
    {input: "c_giftPack(各种礼包)",out:"c_giftPack", valHandler:{strToArrInArr:["content"]}},
    {input : "t_guildCopy(公会副本章节)",out:"t_guildCopy", valHandler:{strToArrInArr:["award"],strToArr:["section"]}},
    {input : "t_guildCopyBoss(公会副本BOSS)",out:"t_guildCopyBoss", idName : "bossId", valHandler:{strToArrInArr:[
        "award", "lastShotAward"
    ]}},
    {input: "t_sellItem(物品出售表)",out:"t_sellItem",valHandler:{strToArrInArr:["items","sells"]},ignores : ["name", "note"]},
    {input:"t_treasure(秘宝抢夺)", out:"t_treasure",valHandler:{strToArrInArr:["items"]}},
    {input : "c_guildWarReward(公会跨服排名奖励)",out:"c_guildWarReward", idName : "id", valHandler:{strToArrInArr:["diamond","diamondSp","diamondUser","wgold","wgoldSp","wgoldUser","hgold","hgoldSp","hgoldUser","silver","silverSp","silverUser","copper","copperSp","copperUser"]}},
    {input : "t_paTaTreasury(爬塔宝库)",out:"t_paTaTreasury", idName : "copyId",valHandler:{strToArrInArr:["award","treasury","troHorLamp","exData"]}},
    {input : "t_talisman(法宝)",out:"t_talisman",valHandler:{strToArr:["resonance"]}},
    {input : "t_talismanCom(法宝合成)",out:"t_talismanCom"},
    {input : "t_talismanLvl(法宝等级)",out:"t_talismanLvl",valHandler:{strToArrInArr:["propertys","needItems"]}},
    {input : "t_talismanRes(法宝共鸣)",out:"t_talismanRes",valHandler:{strToArrInArr:["extraPro"],strToArr:["resonance"]}},
    {input : "t_talismanSkill(法宝技能)",out:"t_talismanSkill",valHandler:{strToArrInArr:["effect"]}},
    {input : "t_talismanStar(法宝星级)",out:"t_talismanStar",valHandler:{strToArrInArr:["needItems"]}},
    {input : "c_luckyMajong(幸运麻将牌)",out:"c_luckyMajong",valHandler:{strToArr:["subTypeDivide"]}},
    {input : "c_userSurvey(用户调研)",out:"c_userSurvey",valHandler:{strToArr:["optionContent"]}}
];

//动画前缀映射
exports.preNameMap = {
    event : "event",
    role : "role",
    hero : "role",
    monster : "role",

    effect : "effect",
    ui : "ui",
    fight : "fight",
    map : "map",
    skill : "skill",
    task : "task",
    item : "item",
    vip : "vip",
    death : "death",
    buff : "buff",
    icon:"icon",
    head:'head',
    wing:'wing',
    recharge:'recharge',
    ui_weapon:'ui_weapon',
    ui_wing:'ui_wing',
    ui_clothes:'ui_clothes',
    ui_gboss: 'ui_gboss',
    medal: "medal",
    title: "title",
    ui_heart: 'ui_heart',
    gift: 'gift',
    gift_skill: 'gift_skill',
    gift_img: 'gift_img'
};

exports.armModuleScaleMap = {
};

exports.pngquantIgnores = [
    //ui相关
    "ui_common.png",
    "ui_equipment.png",
    "ui_event.png",
    "ui_lottery.png",
    "ui_mt.png",

    "bg_midlight.png"
];