var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivitySingleRchgItemSkin = (function (_super) {
            __extends(ActivitySingleRchgItemSkin, _super);
            function ActivitySingleRchgItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 384;
                this.elementsContent = [this.__12_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivitySingleRchgItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivitySingleRchgItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 36]);
                t.layout = this.__10_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [384, 0, 0]);
                t.elementsContent = [this.ico_bg_i(), this.__8_i(), this.__11_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_congzidadao", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yunbaoyishang", 48, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [3, "middle"]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [25, 142, 0]);
                t.layout = this.__6_i();
                t.elementsContent = [this.label_desc_i(), this.__5_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [5, 2]);
                t.elementsContent = [this.__4_i(), this.__7_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "verticalGap"], [15, 4, 6]);
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["bottom", "left", "minHeight", "right", "source", "top"], [0, 0, 30, 0, "panel_dibaodl", 0]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_desc = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "10000", 0, 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "verticalCenter", "width"], [0, skins.game.BaseItemCellSkin, 0, 350]);
                t.layout = this.__9_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.paddingBottom = 6;
                return t;
            };
            ActivitySingleRchgItemSkin._skinParts = ["ico_bg", "label_desc", "list_items"];
            return ActivitySingleRchgItemSkin;
        })(egret.gui.Skin);
        game.ActivitySingleRchgItemSkin = ActivitySingleRchgItemSkin;
        egret.registerClass(ActivitySingleRchgItemSkin,"skins.game.ActivitySingleRchgItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
