"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-stringify-position";
exports.ids = ["vendor-chunks/unist-util-stringify-position"];
exports.modules = {

/***/ "(ssr)/./node_modules/unist-util-stringify-position/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/unist-util-stringify-position/index.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\nvar own = {}.hasOwnProperty;\nmodule.exports = stringify;\nfunction stringify(value) {\n    // Nothing.\n    if (!value || typeof value !== \"object\") {\n        return \"\";\n    }\n    // Node.\n    if (own.call(value, \"position\") || own.call(value, \"type\")) {\n        return position(value.position);\n    }\n    // Position.\n    if (own.call(value, \"start\") || own.call(value, \"end\")) {\n        return position(value);\n    }\n    // Point.\n    if (own.call(value, \"line\") || own.call(value, \"column\")) {\n        return point(value);\n    }\n    // ?\n    return \"\";\n}\nfunction point(point) {\n    if (!point || typeof point !== \"object\") {\n        point = {};\n    }\n    return index(point.line) + \":\" + index(point.column);\n}\nfunction position(pos) {\n    if (!pos || typeof pos !== \"object\") {\n        pos = {};\n    }\n    return point(pos.start) + \"-\" + point(pos.end);\n}\nfunction index(value) {\n    return value && typeof value === \"number\" ? value : 1;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1zdHJpbmdpZnktcG9zaXRpb24vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSxNQUFNLENBQUMsRUFBRUMsY0FBYztBQUUzQkMsT0FBT0MsT0FBTyxHQUFHQztBQUVqQixTQUFTQSxVQUFVQyxLQUFLO0lBQ3RCLFdBQVc7SUFDWCxJQUFJLENBQUNBLFNBQVMsT0FBT0EsVUFBVSxVQUFVO1FBQ3ZDLE9BQU87SUFDVDtJQUVBLFFBQVE7SUFDUixJQUFJTCxJQUFJTSxJQUFJLENBQUNELE9BQU8sZUFBZUwsSUFBSU0sSUFBSSxDQUFDRCxPQUFPLFNBQVM7UUFDMUQsT0FBT0UsU0FBU0YsTUFBTUUsUUFBUTtJQUNoQztJQUVBLFlBQVk7SUFDWixJQUFJUCxJQUFJTSxJQUFJLENBQUNELE9BQU8sWUFBWUwsSUFBSU0sSUFBSSxDQUFDRCxPQUFPLFFBQVE7UUFDdEQsT0FBT0UsU0FBU0Y7SUFDbEI7SUFFQSxTQUFTO0lBQ1QsSUFBSUwsSUFBSU0sSUFBSSxDQUFDRCxPQUFPLFdBQVdMLElBQUlNLElBQUksQ0FBQ0QsT0FBTyxXQUFXO1FBQ3hELE9BQU9HLE1BQU1IO0lBQ2Y7SUFFQSxJQUFJO0lBQ0osT0FBTztBQUNUO0FBRUEsU0FBU0csTUFBTUEsS0FBSztJQUNsQixJQUFJLENBQUNBLFNBQVMsT0FBT0EsVUFBVSxVQUFVO1FBQ3ZDQSxRQUFRLENBQUM7SUFDWDtJQUVBLE9BQU9DLE1BQU1ELE1BQU1FLElBQUksSUFBSSxNQUFNRCxNQUFNRCxNQUFNRyxNQUFNO0FBQ3JEO0FBRUEsU0FBU0osU0FBU0ssR0FBRztJQUNuQixJQUFJLENBQUNBLE9BQU8sT0FBT0EsUUFBUSxVQUFVO1FBQ25DQSxNQUFNLENBQUM7SUFDVDtJQUVBLE9BQU9KLE1BQU1JLElBQUlDLEtBQUssSUFBSSxNQUFNTCxNQUFNSSxJQUFJRSxHQUFHO0FBQy9DO0FBRUEsU0FBU0wsTUFBTUosS0FBSztJQUNsQixPQUFPQSxTQUFTLE9BQU9BLFVBQVUsV0FBV0EsUUFBUTtBQUN0RCIsInNvdXJjZXMiOlsid2VicGFjazovL0BrZXlzdGF0aWMvdGVtcGxhdGVzLW5leHRqcy8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbi9pbmRleC5qcz9lOGVjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdpZnlcblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gIC8vIE5vdGhpbmcuXG4gIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgLy8gTm9kZS5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAncG9zaXRpb24nKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ3R5cGUnKSkge1xuICAgIHJldHVybiBwb3NpdGlvbih2YWx1ZS5wb3NpdGlvbilcbiAgfVxuXG4gIC8vIFBvc2l0aW9uLlxuICBpZiAob3duLmNhbGwodmFsdWUsICdzdGFydCcpIHx8IG93bi5jYWxsKHZhbHVlLCAnZW5kJykpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUpXG4gIH1cblxuICAvLyBQb2ludC5cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAnbGluZScpIHx8IG93bi5jYWxsKHZhbHVlLCAnY29sdW1uJykpIHtcbiAgICByZXR1cm4gcG9pbnQodmFsdWUpXG4gIH1cblxuICAvLyA/XG4gIHJldHVybiAnJ1xufVxuXG5mdW5jdGlvbiBwb2ludChwb2ludCkge1xuICBpZiAoIXBvaW50IHx8IHR5cGVvZiBwb2ludCAhPT0gJ29iamVjdCcpIHtcbiAgICBwb2ludCA9IHt9XG4gIH1cblxuICByZXR1cm4gaW5kZXgocG9pbnQubGluZSkgKyAnOicgKyBpbmRleChwb2ludC5jb2x1bW4pXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uKHBvcykge1xuICBpZiAoIXBvcyB8fCB0eXBlb2YgcG9zICE9PSAnb2JqZWN0Jykge1xuICAgIHBvcyA9IHt9XG4gIH1cblxuICByZXR1cm4gcG9pbnQocG9zLnN0YXJ0KSArICctJyArIHBvaW50KHBvcy5lbmQpXG59XG5cbmZ1bmN0aW9uIGluZGV4KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiAxXG59XG4iXSwibmFtZXMiOlsib3duIiwiaGFzT3duUHJvcGVydHkiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RyaW5naWZ5IiwidmFsdWUiLCJjYWxsIiwicG9zaXRpb24iLCJwb2ludCIsImluZGV4IiwibGluZSIsImNvbHVtbiIsInBvcyIsInN0YXJ0IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/unist-util-stringify-position/index.js\n");

/***/ })

};
;