jQuery(document).ready(function() {
    new jBox.plugin("Image", {
        src: "href",
        gallery: "data-jbox-image",
        imageLabel: "title",
        imageFade: 360,
        imageSize: "contain",
        imageCounter: !1,
        imageCounterSeparator: "/",
        target: window,
        attach: "[data-jbox-image]",
        fixed: !0,
        blockScroll: !0,
        closeOnEsc: !0,
        closeOnClick: "button",
        closeButton: !0,
        overlay: !0,
        animation: "zoomIn",
        preventDefault: !0,
        width: "100%",
        height: "100%",
        adjustDistance: { top: 80, right: 5, bottom: 0, left: 5 },
        _onInit: function() {
            this.images = this.currentImage = {}, this.imageZIndex = 1, this.attachedElements && jQuery.each(this.attachedElements, function(e, i) { if (i = jQuery(i), !i.data("jBox-image-gallery")) { var a = i.attr(this.options.gallery) || "default";!this.images[a] && (this.images[a] = []), this.images[a].push({ src: i.attr(this.options.src), label: i.attr(this.options.imageLabel) || "" }), "title" == this.options.imageLabel && i.removeAttr("title"), i.data("jBox-image-gallery", a), i.data("jBox-image-id", this.images[a].length - 1) } }.bind(this));
            var e = function(e, i, a, t, n) {
                    if (!jQuery("#jBox-image-" + e + "-" + i).length) {
                        var o = jQuery("<div/>", { id: "jBox-image-" + e + "-" + i, class: "jBox-image-container" + (n ? " jBox-image-not-found" : "") + (t || a ? "" : " jBox-image-" + e + "-current") }).css({ backgroundImage: n ? "" : 'url("' + this.images[e][i].src + '")', backgroundSize: this.options.imageSize, opacity: t ? 1 : 0, zIndex: a ? 0 : this.imageZIndex++ }).appendTo(this.content);
                        jQuery("<div/>", { id: "jBox-image-label-" + e + "-" + i, class: "jBox-image-label" + (t ? " active" : "") }).html(this.images[e][i].label).click(function() { $(this).toggleClass("expanded") }).appendTo(this.imageLabel), !t && !a && o.animate({ opacity: 1 }, this.options.imageFade)
                    }
                }.bind(this),
                i = function(e, i) { jQuery(".jBox-image-label.active").removeClass("active expanded"), jQuery("#jBox-image-label-" + e + "-" + i).addClass("active") };
            this.showImage = function(a) {
                if ("open" != a) {
                    var t = this.currentImage.gallery,
                        n = this.currentImage.id + (1 * ("prev" == a) ? -1 : 1);
                    n = n > this.images[t].length - 1 ? 0 : n < 0 ? this.images[t].length - 1 : n
                } else {
                    var t = this.source.data("jBox-image-gallery"),
                        n = this.source.data("jBox-image-id");
                    jQuery(".jBox-image-pointer-prev, .jBox-image-pointer-next").css({ display: this.images[t].length > 1 ? "block" : "none" })
                }
                jQuery(".jBox-image-" + t + "-current").length && jQuery(".jBox-image-" + t + "-current").removeClass("jBox-image-" + t + "-current").animate({ opacity: 0 }, "open" == a ? 0 : this.options.imageFade), this.currentImage = { gallery: t, id: n }, jQuery("#jBox-image-" + t + "-" + n).length ? (jQuery("#jBox-image-" + t + "-" + n).addClass("jBox-image-" + t + "-current").css({ zIndex: this.imageZIndex++, opacity: 0 }).animate({ opacity: 1 }, "open" == a ? 0 : this.options.imageFade), i(t, n)) : (this.wrapper.addClass("jBox-image-loading"), jQuery('<img src="' + this.images[t][n].src + '"/>').each(function() {
                    var a = new Image;
                    a.onload = function() { e(t, n, !1), i(t, n), this.wrapper.removeClass("jBox-image-loading") }.bind(this), a.onerror = function() { e(t, n, !1, null, !0), i(t, n), this.wrapper.removeClass("jBox-image-loading") }.bind(this), a.src = this.images[t][n].src
                }.bind(this))), this.imageCounter && (this.images[t].length > 1 ? (this.wrapper.addClass("jBox-image-has-counter"), this.imageCounter.find(".jBox-image-counter-all").html(this.images[t].length), this.imageCounter.find(".jBox-image-counter-current").html(n + 1)) : this.wrapper.removeClass("jBox-image-has-counter"));
                var o = n + 1;
                o = o > this.images[t].length - 1 ? 0 : o < 0 ? this.images[t].length - 1 : o, !jQuery("#jBox-image-" + t + "-" + o).length && jQuery('<img src="' + this.images[t][o].src + '"/>').each(function() {
                    var i = new Image;
                    i.onload = function() { e(t, o, !0) }.bind(this), i.onerror = function() { e(t, o, !0, null, !0) }.bind(this), i.src = this.images[t][o].src
                }.bind(this))
            }
        },
        _onCreated: function() { this.imageLabel = jQuery("<div/>", { class: "jBox-image-label-container" }).prependTo(this.wrapper), this.imageLabel.append(jQuery("<div/>", { class: "jBox-image-pointer-prev", click: function() { this.showImage("prev") }.bind(this) })).append(jQuery("<div/>", { class: "jBox-image-pointer-next", click: function() { this.showImage("next") }.bind(this) })), this.options.imageCounter && (this.imageCounter = jQuery("<div/>", { class: "jBox-image-counter-container" }).appendTo(this.wrapper), this.imageCounter.append(jQuery("<span/>", { class: "jBox-image-counter-current" })).append(jQuery("<span/>").html(this.options.imageCounterSeparator)).append(jQuery("<span/>", { class: "jBox-image-counter-all" }))) },
        _onOpen: function() { jQuery(document).on("keyup.jBox-Image-" + this.id, function(e) { 37 == e.keyCode && this.showImage("prev"), 39 == e.keyCode && this.showImage("next") }.bind(this)), this.showImage("open") },
        _onClose: function() { jQuery(document).off("keyup.jBox-Image-" + this.id) },
        _onCloseComplete: function() { this.wrapper.find(".jBox-image-container").css("opacity", 0) }
    })
});