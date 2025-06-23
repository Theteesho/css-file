function SCPSAPI$OverridePopupClose() {
    var _oldclose = SourceCode.Forms.Widget.PopupWindow.close;
    SourceCode.Forms.Widget.PopupWindow.close = function (options) {
        if (SCPSAPI$ShouldAnimatePanel(this)) {
            var _this = this;
            function transitionEnd() {
                console.log("transitionend");
                _this.controls.main.off("transitionend", transitionEnd);
                window.setTimeout(function () {
                    _oldclose.call(_this, options);
                    _this.controls.main.removeClass("animatedexit animatedintro");
                }, 250); // Match CSS transition timing
            }
            this.controls.main.on("transitionend", transitionEnd);
            this.controls.main.addClass("animatedexit");
        } else {
            var result = _oldclose.call(this, options); // <-- declare result
            return result;
        }
    };
}
