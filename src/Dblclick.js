/* global po */
(function (po) {
    "use strict";
    po.dblclick = function () {
        var dblclick = {},
            zoom = "mouse",
            map,
            container;

        function handle(e) {
            var z = map.zoom();
            if (e.shiftKey) {
                z = Math.ceil(z) - z - 1;
            } else {
                z = 1 - z + Math.floor(z);
            }
            if (zoom === "mouse") {
                map.zoomBy(z, map.mouse(e));
            } else {
                map.zoomBy(z);
            }
        }

        dblclick.zoom = function (x) {
            if (!arguments.length) {
                return zoom;
            }
            zoom = x;
            return dblclick;
        };

        dblclick.map = function (x) {
            if (!arguments.length) {
                return map;
            }
            if (map) {
                container.removeEventListener("dblclick", handle, false);
                container = null;
            }

            map = x;

            if (x) {
                container = map.container();
                container.addEventListener("dblclick", handle, false);
            }
            return dblclick;
        };

        return dblclick;
    };

}(po));