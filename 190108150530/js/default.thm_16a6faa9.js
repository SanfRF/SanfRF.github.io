window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","ImageTest":"resource/game/ImageTest.exml","MainSence":"resource/game/MainSence.exml","StartGameSence":"resource/game/StartGameSence.exml","GameSence":"resource/game/GameSence.exml","Victory":"resource/game/Victory.exml","Resurrection":"resource/game/Resurrection.exml","FruitShop":"resource/game/FruitShop.exml","FreeButton":"resource/game/FreeButton.exml","DiyButton":"resource/game/DiyButton.exml","Rank":"resource/game/Rank.exml","RankPart":"resource/game/RankPart.exml","Weapon":"resource/game/Weapon.exml","WeaponList":"resource/game/WeaponList.exml","WeaponGrid":"resource/game/WeaponGrid.exml","WeaponButton":"resource/game/WeaponButton.exml","WeaponGroup":"resource/game/WeaponGroup.exml","Fruit":"resource/game/Fruit.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game/DiyButton.exml'] = window.DiyButtonSkin = (function (_super) {
	__extends(DiyButtonSkin, _super);
	function DiyButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.currentState = "default";
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
		this._Label3_i();
		
		this.states = [
			new eui.State ("default",
				[
				])
			,
			new eui.State ("turntable",
				[
					new eui.AddItems("_Label3","",1,""),
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("_Label1","visible",false),
					new eui.SetProperty("_Label2","visible",false)
				])
		];
	}
	var _proto = DiyButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 1.2;
		t.source = "btn_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_jinbi3_png";
		t.verticalCenter = -5.5;
		t.x = 22;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.name = "price";
		t.text = "12000";
		t.verticalCenter = -5.5;
		t.x = 50;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.text = "随机获得";
		t.textColor = 0x9e0101;
		t.verticalCenter = -5.5;
		t.x = 140;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 40;
		t.text = "转盘获得";
		t.textColor = 0x000000;
		t.verticalCenter = -6.5;
		return t;
	};
	return DiyButtonSkin;
})(eui.Skin);generateEUI.paths['resource/game/FreeButton.exml'] = window.FreeButtonSkin = (function (_super) {
	__extends(FreeButtonSkin, _super);
	function FreeButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","labelDisplay_disabled","iconDisplay","iconDisplay_disabled"];
		
		this.currentState = "up";
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i()];
		this.labelDisplay_i();
		
		this.labelDisplay_disabled_i();
		
		this.iconDisplay_i();
		
		this.iconDisplay_disabled_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("labelDisplay","",1,""),
					new eui.AddItems("iconDisplay","",1,""),
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("labelDisplay","verticalCenter",-5),
					new eui.SetProperty("labelDisplay","horizontalCenter",22)
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("labelDisplay","",1,""),
					new eui.AddItems("iconDisplay","",1,""),
					new eui.SetProperty("_Image1","source","btn_lv012_png"),
					new eui.SetProperty("labelDisplay","percentWidth",90),
					new eui.SetProperty("labelDisplay","percentHeight",90),
					new eui.SetProperty("labelDisplay","size",35),
					new eui.SetProperty("labelDisplay","verticalCenter",-5),
					new eui.SetProperty("labelDisplay","horizontalCenter",22)
				])
			,
			new eui.State ("disabled",
				[
					new eui.AddItems("labelDisplay_disabled","",1,""),
					new eui.AddItems("iconDisplay_disabled","",1,""),
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = FreeButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "btn_lv012_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 21.5;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x384D03;
		t.text = "免费领取";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		return t;
	};
	_proto.labelDisplay_disabled_i = function () {
		var t = new eui.Label();
		this.labelDisplay_disabled = t;
		t.alpha = 0.5;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 22;
		t.size = 35;
		t.stroke = 2;
		t.strokeColor = 0x384d03;
		t.text = "免费领取";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -5;
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = -78;
		t.source = "icon_guanyingmianfei2_png";
		t.verticalCenter = 0.5;
		t.width = 43;
		return t;
	};
	_proto.iconDisplay_disabled_i = function () {
		var t = new eui.Image();
		this.iconDisplay_disabled = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.horizontalCenter = -78;
		t.source = "icon_guanyingmianfei2_png";
		t.verticalCenter = 0.5;
		t.width = 43;
		return t;
	};
	return FreeButtonSkin;
})(eui.Skin);generateEUI.paths['resource/game/Fruit.exml'] = window.FruitSkin = (function (_super) {
	__extends(FruitSkin, _super);
	function FruitSkin() {
		_super.call(this);
		this.skinParts = ["img"];
		
		this.elementsContent = [this.img_i()];
	}
	var _proto = FruitSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "cm_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return FruitSkin;
})(eui.Skin);generateEUI.paths['resource/game/FruitShop.exml'] = window.FruitShopSkin = (function (_super) {
	__extends(FruitShopSkin, _super);
	function FruitShopSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Group1_i(),this._Image9_i(),this._Image10_i(),this._Group2_i()];
	}
	var _proto = FruitShopSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ditu_png";
		t.top = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_tongyong_png";
		t.y = 291.79;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "banzi_title013_png";
		t.y = 114.7;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "guozhidiandikuang_png";
		t.y = 139.02;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "btn_close3_png";
		t.x = 591.5;
		t.y = 150.02;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 184;
		t.scale9Grid = new egret.Rectangle(33,32,41,56);
		t.source = "bg_neirong_png";
		t.width = 514;
		t.x = 118;
		t.y = 364.92;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "lixianshouyi_png";
		t.x = 294;
		t.y = 396.84;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 8;
		t.y = 455;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Label1_i(),this._Image8_i(),this._Label2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "当前离线收益";
		t.textColor = 0xb6270a;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "120/h";
		t.textAlign = "center";
		t.textColor = 0xB6270A;
		t.verticalAlign = "justify";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "taizi_png";
		t.y = 584.57;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(63,139,50,0);
		t.source = "btn_013_png";
		t.width = 400;
		t.y = 920;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 960;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Label3_i(),this._Image11_i(),this._Label4_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.stroke = 4;
		t.strokeColor = 0x9e0101;
		t.text = "点我翻倍";
		t.textColor = 0xffffff;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 36;
		t.text = "120/h";
		t.textAlign = "center";
		t.textColor = 0xB6270A;
		t.verticalAlign = "justify";
		return t;
	};
	return FruitShopSkin;
})(eui.Skin);generateEUI.paths['resource/game/GameSence.exml'] = window.GameSenceSkin = (function (_super) {
	__extends(GameSenceSkin, _super);
	var GameSenceSkin$Skin1 = 	(function (_super) {
		__extends(GameSenceSkin$Skin1, _super);
		function GameSenceSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","tulongbaodao_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSenceSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "tulongbaodao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSenceSkin$Skin1;
	})(eui.Skin);

	var GameSenceSkin$Skin2 = 	(function (_super) {
		__extends(GameSenceSkin$Skin2, _super);
		function GameSenceSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","threeDartBtn_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = GameSenceSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "threeDartBtn_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameSenceSkin$Skin2;
	})(eui.Skin);

	function GameSenceSkin() {
		_super.call(this);
		this.skinParts = ["progress","levelLabel","changeWeapon","tulongbaodao","threeWeapons","weapon","fruitsGroup","juiceGroup","juiceCup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Group1_i(),this.changeWeapon_i(),this.tulongbaodao_i(),this.threeWeapons_i(),this.weapon_i(),this.fruitsGroup_i(),this.juiceCup_i()];
	}
	var _proto = GameSenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "ditu_png";
		t.x = 2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		t.x = 20;
		t.y = 60;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "0";
		t.textColor = 0x108f79;
		t.x = 90;
		t.y = 75;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "jiangli_png";
		t.x = 6;
		t.y = 18;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 180;
		t.y = 30;
		t.elementsContent = [this._Image4_i(),this.progress_i(),this.levelLabel_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "jindutiao_png";
		t.visible = true;
		t.x = -4.02;
		t.y = -2.68;
		return t;
	};
	_proto.progress_i = function () {
		var t = new eui.Image();
		this.progress = t;
		t.anchorOffsetX = 0;
		t.height = 60;
		t.left = 0;
		t.scale9Grid = new egret.Rectangle(26,19,335,20);
		t.scaleX = 1;
		t.source = "jindutiaoBg_png";
		t.visible = true;
		t.width = 0;
		t.y = 0;
		return t;
	};
	_proto.levelLabel_i = function () {
		var t = new eui.Label();
		this.levelLabel = t;
		t.border = false;
		t.horizontalCenter = 0;
		t.size = 35;
		t.stroke = 4;
		t.strokeColor = 0x114454;
		t.text = "第3关";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.changeWeapon_i = function () {
		var t = new eui.Image();
		this.changeWeapon = t;
		t.source = "huanwuqi_png";
		t.x = 20;
		t.y = 730;
		return t;
	};
	_proto.tulongbaodao_i = function () {
		var t = new eui.Button();
		this.tulongbaodao = t;
		t.label = "";
		t.x = 570;
		t.y = 730;
		t.skinName = GameSenceSkin$Skin1;
		return t;
	};
	_proto.threeWeapons_i = function () {
		var t = new eui.Button();
		this.threeWeapons = t;
		t.label = "";
		t.x = 570;
		t.y = 900;
		t.skinName = GameSenceSkin$Skin2;
		return t;
	};
	_proto.weapon_i = function () {
		var t = new eui.Image();
		this.weapon = t;
		t.fillMode = "clip";
		t.horizontalCenter = 1;
		t.scaleX = 1.8;
		t.scaleY = 1.8;
		t.source = "A11_png";
		t.y = 990;
		return t;
	};
	_proto.fruitsGroup_i = function () {
		var t = new eui.Group();
		this.fruitsGroup = t;
		return t;
	};
	_proto.juiceCup_i = function () {
		var t = new eui.Group();
		this.juiceCup = t;
		t.x = 20;
		t.y = 930;
		t.elementsContent = [this._Image5_i(),this.juiceGroup_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "bz_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.juiceGroup_i = function () {
		var t = new eui.Group();
		this.juiceGroup = t;
		t.left = 37;
		t.verticalCenter = 26.5;
		return t;
	};
	return GameSenceSkin;
})(eui.Skin);generateEUI.paths['resource/game/Rank.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = ["backToStart","ranklist"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.backToStart_i(),this._Scroller1_i(),this._Group2_i()];
	}
	var _proto = RankSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ditu_png";
		t.top = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_tongyong4_png";
		t.y = 186.2;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "banzi_title013_png";
		t.y = 91.01;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "rank_png";
		t.y = 110.72;
		return t;
	};
	_proto.backToStart_i = function () {
		var t = new eui.Image();
		this.backToStart = t;
		t.source = "btn_close3_png";
		t.x = 619.86;
		t.y = 121.64;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 553.45;
		t.horizontalCenter = 0;
		t.width = 631.66;
		t.y = 315;
		t.viewport = this.ranklist_i();
		return t;
	};
	_proto.ranklist_i = function () {
		var t = new eui.Group();
		this.ranklist = t;
		t.anchorOffsetY = 0;
		t.x = -85.2;
		t.y = 3.03;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.paddingBottom = 5;
		t.paddingLeft = 5;
		t.paddingRight = 5;
		t.paddingTop = 5;
		t.verticalAlign = "contentJustify";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 40;
		t.y = 919.63;
		t.elementsContent = [this._Image5_i(),this._Label1_i(),this._Label2_i(),this._Group1_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(31,33,74,75);
		t.source = "myBg_png";
		t.width = 671;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "玩家644395";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.right = 57;
		t.size = 40;
		t.text = "第0关";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 73.88;
		t.y = 29.37;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "bg_touxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/game/RankPart.exml'] = window.RankPartSkin = (function (_super) {
	__extends(RankPartSkin, _super);
	function RankPartSkin() {
		_super.call(this);
		this.skinParts = ["rankimg","ranktext","profilePic","playername","level"];
		
		this.elementsContent = [this._Group2_i()];
	}
	var _proto = RankPartSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.rankimg_i(),this.ranktext_i(),this._Group1_i(),this.playername_i(),this.level_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(25,27,66,63);
		t.source = "bg_tiao_png";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rankimg_i = function () {
		var t = new eui.Image();
		this.rankimg = t;
		t.source = "icon_no1_png";
		t.verticalCenter = 0;
		t.x = 13.61;
		return t;
	};
	_proto.ranktext_i = function () {
		var t = new eui.Label();
		this.ranktext = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "4";
		t.textColor = 0x996423;
		t.verticalCenter = 8.5;
		t.visible = false;
		t.x = 40.21;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 98.8;
		t.y = 9.5;
		t.elementsContent = [this._Image2_i(),this.profilePic_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "bg_touxiang_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.profilePic_i = function () {
		var t = new eui.Image();
		this.profilePic = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.playername_i = function () {
		var t = new eui.Label();
		this.playername = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "球球GO";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		t.x = 214.8;
		return t;
	};
	_proto.level_i = function () {
		var t = new eui.Label();
		this.level = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.right = 22;
		t.size = 40;
		t.text = "第7关";
		t.textColor = 0x996423;
		t.verticalCenter = 0;
		return t;
	};
	return RankPartSkin;
})(eui.Skin);generateEUI.paths['resource/game/Resurrection.exml'] = window.ResurrectionSkin = (function (_super) {
	__extends(ResurrectionSkin, _super);
	var ResurrectionSkin$Skin3 = 	(function (_super) {
		__extends(ResurrectionSkin$Skin3, _super);
		function ResurrectionSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","bg_tiao_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ResurrectionSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bg_tiao_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResurrectionSkin$Skin3;
	})(eui.Skin);

	var ResurrectionSkin$Skin4 = 	(function (_super) {
		__extends(ResurrectionSkin$Skin4, _super);
		function ResurrectionSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_lv02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = ResurrectionSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_lv02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return ResurrectionSkin$Skin4;
	})(eui.Skin);

	function ResurrectionSkin() {
		_super.call(this);
		this.skinParts = ["count_bg","count_img","count_text","skip"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group1_i(),this._Button1_i(),this._Label1_i(),this._Image2_i(),this._Label2_i(),this._Button2_i(),this._Image3_i(),this._Label3_i(),this.skip_i()];
	}
	var _proto = ResurrectionSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_tongyong_png";
		t.verticalCenter = -93.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -2.5;
		t.top = 296;
		t.elementsContent = [this.count_bg_i(),this.count_img_i(),this.count_text_i()];
		return t;
	};
	_proto.count_bg_i = function () {
		var t = new eui.Image();
		this.count_bg = t;
		t.source = "daojish_png";
		return t;
	};
	_proto.count_img_i = function () {
		var t = new eui.Image();
		this.count_img = t;
		t.source = "daojishi2_png";
		return t;
	};
	_proto.count_text_i = function () {
		var t = new eui.Label();
		this.count_text = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 170;
		t.stroke = 3;
		t.strokeColor = 0x9e0101;
		t.text = "10";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 500;
		t.y = 697.4;
		t.skinName = ResurrectionSkin$Skin3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "是否复活 :";
		t.textColor = 0x996423;
		t.x = 189;
		t.y = 733.9;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "fuhuoka_icon_png";
		t.x = 375.5;
		t.y = 691.4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "x 2";
		t.textColor = 0x996423;
		t.x = 506;
		t.y = 733.9;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.width = 400;
		t.y = 860;
		t.skinName = ResurrectionSkin$Skin4;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_guanyingmianfei2_png";
		t.x = 224;
		t.y = 908;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.stroke = 3;
		t.strokeColor = 0x384d03;
		t.text = "获取复活卡";
		t.x = 294;
		t.y = 902;
		return t;
	};
	_proto.skip_i = function () {
		var t = new eui.Label();
		this.skip = t;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "跳过 》";
		t.x = 309.5;
		t.y = 1023.79;
		return t;
	};
	return ResurrectionSkin;
})(eui.Skin);generateEUI.paths['resource/game/StartGameSence.exml'] = window.StartGameSenceSkin = (function (_super) {
	__extends(StartGameSenceSkin, _super);
	var StartGameSenceSkin$Skin5 = 	(function (_super) {
		__extends(StartGameSenceSkin$Skin5, _super);
		function StartGameSenceSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","start_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSenceSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "start_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSenceSkin$Skin5;
	})(eui.Skin);

	var StartGameSenceSkin$Skin6 = 	(function (_super) {
		__extends(StartGameSenceSkin$Skin6, _super);
		function StartGameSenceSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","fank_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSenceSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "fank_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSenceSkin$Skin6;
	})(eui.Skin);

	var StartGameSenceSkin$Skin7 = 	(function (_super) {
		__extends(StartGameSenceSkin$Skin7, _super);
		function StartGameSenceSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","paihangbang_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSenceSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "paihangbang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSenceSkin$Skin7;
	})(eui.Skin);

	var StartGameSenceSkin$Skin8 = 	(function (_super) {
		__extends(StartGameSenceSkin$Skin8, _super);
		function StartGameSenceSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","shengyin_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","shengyin1_png")
					])
			];
		}
		var _proto = StartGameSenceSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "shengyin_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSenceSkin$Skin8;
	})(eui.Skin);

	var StartGameSenceSkin$Skin9 = 	(function (_super) {
		__extends(StartGameSenceSkin$Skin9, _super);
		function StartGameSenceSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","qiandaojiangli_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSenceSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "qiandaojiangli_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSenceSkin$Skin9;
	})(eui.Skin);

	var StartGameSenceSkin$Skin10 = 	(function (_super) {
		__extends(StartGameSenceSkin$Skin10, _super);
		function StartGameSenceSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","lingjinbi_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSenceSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "lingjinbi_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSenceSkin$Skin10;
	})(eui.Skin);

	var StartGameSenceSkin$Skin11 = 	(function (_super) {
		__extends(StartGameSenceSkin$Skin11, _super);
		function StartGameSenceSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","guozhidian_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartGameSenceSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "guozhidian_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartGameSenceSkin$Skin11;
	})(eui.Skin);

	function StartGameSenceSkin() {
		_super.call(this);
		this.skinParts = ["gift","startgame","changeWeapon","rankbtn","qiandao","getCoins","juiceShop","weapon"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.gift_i(),this.startgame_i(),this._Image3_i(),this._Label1_i(),this.changeWeapon_i(),this._Group1_i(),this.qiandao_i(),this.getCoins_i(),this.juiceShop_i(),this.weapon_i()];
	}
	var _proto = StartGameSenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ditu_png";
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "logo_png";
		t.y = 202;
		return t;
	};
	_proto.gift_i = function () {
		var t = new eui.Image();
		this.gift = t;
		t.anchorOffsetX = 40.5;
		t.source = "libao_png";
		t.x = 639.5;
		t.y = -26;
		return t;
	};
	_proto.startgame_i = function () {
		var t = new eui.Button();
		this.startgame = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.y = 678;
		t.skinName = StartGameSenceSkin$Skin5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi3_png";
		t.x = 24;
		t.y = 60;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 42;
		t.text = "0";
		t.textColor = 0x108f79;
		t.x = 88;
		t.y = 72;
		return t;
	};
	_proto.changeWeapon_i = function () {
		var t = new eui.Group();
		this.changeWeapon = t;
		t.x = 598;
		t.y = 643;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "huanwuqi_png";
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "xinwuqi_png";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 900;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Button1_i(),this.rankbtn_i(),this._Button2_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 60;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = StartGameSenceSkin$Skin6;
		return t;
	};
	_proto.rankbtn_i = function () {
		var t = new eui.Button();
		this.rankbtn = t;
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = StartGameSenceSkin$Skin7;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.label = "";
		t.x = 0;
		t.y = 0;
		t.skinName = StartGameSenceSkin$Skin8;
		return t;
	};
	_proto.qiandao_i = function () {
		var t = new eui.Button();
		this.qiandao = t;
		t.label = "";
		t.x = 614;
		t.y = 384;
		t.skinName = StartGameSenceSkin$Skin9;
		return t;
	};
	_proto.getCoins_i = function () {
		var t = new eui.Button();
		this.getCoins = t;
		t.label = "";
		t.x = 612;
		t.y = 516;
		t.skinName = StartGameSenceSkin$Skin10;
		return t;
	};
	_proto.juiceShop_i = function () {
		var t = new eui.Button();
		this.juiceShop = t;
		t.label = "";
		t.x = 31;
		t.y = 586;
		t.skinName = StartGameSenceSkin$Skin11;
		return t;
	};
	_proto.weapon_i = function () {
		var t = new eui.Image();
		this.weapon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 11;
		t.scaleX = 1.8;
		t.scaleY = 1.8;
		t.source = "A11_png";
		t.y = 550;
		return t;
	};
	return StartGameSenceSkin;
})(eui.Skin);generateEUI.paths['resource/game/Victory.exml'] = window.VictorySkin = (function (_super) {
	__extends(VictorySkin, _super);
	var VictorySkin$Skin12 = 	(function (_super) {
		__extends(VictorySkin$Skin12, _super);
		function VictorySkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","percentWidth",110),
						new eui.SetProperty("_Image1","percentHeight",110)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","zujiemian2_png"),
						new eui.SetProperty("_Image1","percentWidth",90),
						new eui.SetProperty("_Image1","percentHeight",90)
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VictorySkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.horizontalCenter = 0;
			t.source = "zujiemian2_png";
			t.verticalCenter = 0;
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VictorySkin$Skin12;
	})(eui.Skin);

	var VictorySkin$Skin13 = 	(function (_super) {
		__extends(VictorySkin$Skin13, _super);
		function VictorySkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_014_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = VictorySkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_014_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return VictorySkin$Skin13;
	})(eui.Skin);

	function VictorySkin() {
		_super.call(this);
		this.skinParts = ["btn_backtoStart","btn_nextLevel"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Group1_i(),this.btn_backtoStart_i(),this._Group6_i(),this._Image11_i(),this.btn_nextLevel_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Image12_i()];
	}
	var _proto = VictorySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "bg_tongyong6_png";
		t.verticalCenter = 60.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 14;
		t.y = 275;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "banzi_title014_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "victory_png";
		t.y = -149;
		return t;
	};
	_proto.btn_backtoStart_i = function () {
		var t = new eui.Button();
		this.btn_backtoStart = t;
		t.label = "";
		t.x = 18;
		t.y = 158;
		t.skinName = VictorySkin$Skin12;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = -49.5;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 17;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.horizontalCenter = 0;
		t.source = "kuang12_png";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_guozhi03_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.horizontalCenter = 0;
		t.source = "kuang12_png";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_guozhi02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.horizontalCenter = 0;
		t.source = "kuang12_png";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "icon_guozhi01_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image10_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 130;
		t.source = "kuang12_png";
		t.width = 130;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = -0.5;
		t.scale9Grid = new egret.Rectangle(23,25,73,66);
		t.scaleX = 1.16;
		t.source = "bg_tiao4_png";
		t.width = 400;
		t.y = 737.5;
		return t;
	};
	_proto.btn_nextLevel_i = function () {
		var t = new eui.Button();
		this.btn_nextLevel = t;
		t.anchorOffsetX = 0;
		t.enabled = true;
		t.label = "";
		t.width = 320;
		t.x = 215;
		t.y = 886;
		t.skinName = VictorySkin$Skin13;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.size = 48;
		t.stroke = 4;
		t.strokeColor = 0x9E0101;
		t.text = "下一关";
		t.touchEnabled = false;
		t.x = 303;
		t.y = 926;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "获取奖励:";
		t.textColor = 0x996423;
		t.x = 192;
		t.y = 774;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = false;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "+82";
		t.textColor = 0x996423;
		t.x = 436;
		t.y = 776;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "icon_jinbi_png";
		t.x = 375;
		t.y = 766;
		return t;
	};
	return VictorySkin;
})(eui.Skin);generateEUI.paths['resource/game/WeaponGrid.exml'] = window.DiyButtonSkin = (function (_super) {
	__extends(DiyButtonSkin, _super);
	function DiyButtonSkin() {
		_super.call(this);
		this.skinParts = ["notowned","owned","selected","img"];
		
		this.currentState = "notowned";
		this.elementsContent = [this.notowned_i(),this.owned_i(),this.selected_i(),this.img_i()];
		this.states = [
			new eui.State ("notowned",
				[
					new eui.SetProperty("owned","visible",false),
					new eui.SetProperty("selected","visible",false)
				])
			,
			new eui.State ("owned",
				[
					new eui.SetProperty("notowned","visible",false),
					new eui.SetProperty("selected","visible",false)
				])
			,
			new eui.State ("selected",
				[
					new eui.SetProperty("notowned","visible",false)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.name"],[0],this.img,"source");
	}
	var _proto = DiyButtonSkin.prototype;

	_proto.notowned_i = function () {
		var t = new eui.Image();
		this.notowned = t;
		t.horizontalCenter = 0;
		t.source = "kuang1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.owned_i = function () {
		var t = new eui.Image();
		this.owned = t;
		t.horizontalCenter = 0;
		t.source = "kuang0_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.selected_i = function () {
		var t = new eui.Image();
		this.selected = t;
		t.height = 145;
		t.horizontalCenter = 0;
		t.source = "kuang2_png";
		t.verticalCenter = 0;
		t.width = 144;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return DiyButtonSkin;
})(eui.Skin);generateEUI.paths['resource/game/WeaponGroup.exml'] = window.WeaponGroupSkin = (function (_super) {
	__extends(WeaponGroupSkin, _super);
	function WeaponGroupSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = WeaponGroupSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		return t;
	};
	return WeaponGroupSkin;
})(eui.Skin);generateEUI.paths['resource/game/WeaponList.exml'] = window.WeaponListSkin = (function (_super) {
	__extends(WeaponListSkin, _super);
	function WeaponListSkin() {
		_super.call(this);
		this.skinParts = ["weapongroups","page","currentpage","pricebtn","backTo","currentImg"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.weapongroups_i(),this.page_i(),this.currentpage_i(),this.pricebtn_i(),this.backTo_i(),this.currentImg_i(),this._Label1_i()];
	}
	var _proto = WeaponListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ditu_png";
		t.top = 0;
		return t;
	};
	_proto.weapongroups_i = function () {
		var t = new eui.Group();
		this.weapongroups = t;
		t.x = 78;
		t.y = 368;
		t.layout = this._HorizontalLayout1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 150;
		return t;
	};
	_proto.page_i = function () {
		var t = new eui.Group();
		this.page = t;
		t.horizontalCenter = 0;
		t.y = 1025;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "icon_dian01_png";
		t.visible = false;
		t.x = -2;
		t.y = 5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "icon_dian01_png";
		t.visible = false;
		t.x = 15;
		t.y = 8;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "icon_dian01_png";
		t.visible = false;
		t.x = 25;
		t.y = 18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "icon_dian01_png";
		t.visible = false;
		t.x = 35;
		t.y = 28;
		return t;
	};
	_proto.currentpage_i = function () {
		var t = new eui.Image();
		this.currentpage = t;
		t.source = "icon_dian02_png";
		t.visible = false;
		t.x = 310;
		t.y = 1025;
		return t;
	};
	_proto.pricebtn_i = function () {
		var t = new DiyButton();
		this.pricebtn = t;
		t.horizontalCenter = 0;
		t.y = 1150;
		return t;
	};
	_proto.backTo_i = function () {
		var t = new eui.Image();
		this.backTo = t;
		t.source = "zi_fanhui_png";
		t.x = 27.639;
		t.y = 166;
		return t;
	};
	_proto.currentImg_i = function () {
		var t = new eui.Image();
		this.currentImg = t;
		t.horizontalCenter = 0;
		t.y = 170;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.horizontalCenter = 0;
		t.size = 35;
		t.text = "当前武器";
		t.y = 310;
		return t;
	};
	return WeaponListSkin;
})(eui.Skin);