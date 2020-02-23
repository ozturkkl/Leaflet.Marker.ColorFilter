(function () {

    var protoUpdate = L.Marker.prototype.update;

    L.Marker.addInitHook(function () {

        this.options.filter = this.options.filter || {};
        this.options.filter.blur = this.options.filter.blur || 0;
        this.options.filter.contrast = this.options.filter.contrast || 100;
        this.options.filter.grayscale = this.options.filter.grayscale || 0;
        this.options.filter.hueRotate = this.options.filter.hueRotate || 0;
        this.options.filter.brightness = this.options.filter.brightness || 100;
        this.options.filter.saturate = this.options.filter.saturate || 100;

    });

    L.Marker.include({

        update: function () {
            this._applyFilter();
            protoUpdate.call(this);
        },

        _applyFilter: function () {

            if (this.options.filter && this._icon) {
                let filter = "";

                filter += "blur(" + this.options.filter.blur + "px) ";
                filter += "contrast(" + this.options.filter.contrast + "%) ";
                filter += "grayscale(" + this.options.filter.grayscale + "%) ";
                filter += "hue-rotate(" + this.options.filter.hueRotate + "deg) ";
                filter += "brightness(" + this.options.filter.brightness + "%) ";
                filter += "saturate(" + this.options.filter.saturate + "%) ";

                this._icon.style.filter = filter;
            }
        },

        setFilter: function (filter) {
            this.options.filter.blur = filter.blur || this.options.filter.blur;
            this.options.filter.contrast = filter.contrast || this.options.filter.contrast;
            this.options.filter.grayscale = filter.grayscale || this.options.filter.grayscale;
            this.options.filter.hueRotate = filter.hueRotate || this.options.filter.hueRotate;
            this.options.filter.brightness = filter.brightness || this.options.filter.brightness;
            this.options.filter.saturate = filter.saturate || this.options.filter.saturate;
            this.update();
            return this;
        },
        getFilter: function () {
            return this.options.filter
        },
        resetFilter: function () {
            this.options.filter.blur = 0;
            this.options.filter.contrast = 100;
            this.options.filter.grayscale = 0;
            this.options.filter.hueRotate = 0;
            this.options.filter.brightness = 100;
            this.options.filter.saturate = 100;
            this.update();
            return this;
        }
    });
})();
