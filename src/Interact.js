// Default map controls.
/* global po */
po.interact = function () {
    "use strict";
    var interact = {},
        drag = new po.drag(),
        wheel = new po.wheel(),
        dblclick = new po.dblclick(),
        touch = new po.touch(),
        arrow = new po.arrow();

    interact.map = function (x) {
        drag.map(x);
        wheel.map(x);
        dblclick.map(x);
        touch.map(x);
        arrow.map(x);
        return interact;
    };

    return interact;
};
