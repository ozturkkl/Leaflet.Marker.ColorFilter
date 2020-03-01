(function () {

    var protoUpdate = L.Marker.prototype.update;

    L.Marker.addInitHook(function () {

        this.options.filter = this.options.filter || {};
        this.options.filter.blur = this.options.filter.blur || "0px";
        this.options.filter.brightness = this.options.filter.brightness || "100%";
        this.options.filter.contrast = this.options.filter.contrast || "100%";
        this.options.filter.dropShadow = this.options.filter.dropShadow || "0 0 0 black";
        this.options.filter.grayscale = this.options.filter.grayscale || "0%";
        this.options.filter.hueRotate = this.options.filter.hueRotate || "0deg";
        this.options.filter.invert = this.options.filter.invert || "0%";
        this.options.filter.opacity = this.options.filter.opacity || "100%";
        this.options.filter.saturate = this.options.filter.saturate || "100%";
        this.options.filter.sepia = this.options.filter.sepia || "0%";

    });

    L.Marker.include({

        update: function () {
            this._applyFilter();
            protoUpdate.call(this);
        },

        _applyFilter: function () {

            if (this.options.filter && this._icon) {
                let filter = "";

                filter += "blur(" + this.options.filter.blur + ") ";
                filter += "brightness(" + this.options.filter.brightness + ") ";
                filter += "contrast(" + this.options.filter.contrast + ") ";
                filter += "drop-shadow(" + this.options.filter.dropShadow + ") ";
                filter += "grayscale(" + this.options.filter.grayscale + ") ";
                filter += "hue-rotate(" + this.options.filter.hueRotate + ") ";
                filter += "invert(" + this.options.filter.invert + ") ";
                filter += "opacity(" + this.options.filter.opacity + ") ";
                filter += "saturate(" + this.options.filter.saturate + ") ";
                filter += "sepia(" + this.options.filter.sepia + ") ";

                this._icon.style.filter = filter;
            }
        },

        setFilter: function (filter) {
            this.options.filter.blur = filter.blur || this.options.filter.blur;
            this.options.filter.brightness = filter.brightness || this.options.filter.brightness;
            this.options.filter.contrast = filter.contrast || this.options.filter.contrast;
            this.options.filter.dropShadow = filter.dropShadow || this.options.filter.dropShadow;
            this.options.filter.grayscale = filter.grayscale || this.options.filter.grayscale;
            this.options.filter.hueRotate = filter.hueRotate || this.options.filter.hueRotate;
            this.options.filter.invert = filter.invert || this.options.filter.invert;
            this.options.filter.opacity = filter.opacity || this.options.filter.opacity;
            this.options.filter.saturate = filter.saturate || this.options.filter.saturate;
            this.options.filter.sepia = filter.sepia || this.options.filter.sepia;
            this.update();
            return this;
        },
        getFilter: function () {
            return this.options.filter
        },
        resetFilter: function () {
            this.options.filter.blur = "0px";
            this.options.filter.brightness = "100%";
            this.options.filter.contrast = "100%";
            this.options.filter.dropShadow = "0 0 0 black";
            this.options.filter.grayscale = "0%";
            this.options.filter.hueRotate = "0deg";
            this.options.filter.invert = "0%";
            this.options.filter.opacity = "100%";
            this.options.filter.saturate = "100%";
            this.options.filter.sepia = "0%";
            this.update();
            return this;
        }
    });
})();
