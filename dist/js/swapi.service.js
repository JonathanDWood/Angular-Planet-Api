"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Swapi=function(){function t(e){_classCallCheck(this,t),this.$http=e}return t.$inject=["$http"],_createClass(t,[{key:"get",value:function(t){return this.$http.get(t)}},{key:"getPlanets",value:function(t){var e=this,n=void 0;return this.get(t).then(function(t){n=t.data;for(var r=n.results,i=function(t){r[t].terrain=r[t].terrain.split(", ");for(var n=function(n){e.get(r[t].films[n]).then(function(e){r[t].films[n]=e.data.title})},i=0;i<r[t].films.length;i++)n(i);r[t].films.length>r[t].terrain.length?(r[t].biggest="films",r[t].smallest="terrain"):(r[t].biggest="terrain",r[t].smallest="films")},a=0;a<r.length;a++)i(a);return n})}}]),t}();exports.default=Swapi;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3YXBpLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiaSIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJwcm90b3R5cGUiLCJTd2FwaSIsIiRodHRwIiwidGhpcyIsInVybCIsImdldCIsIl90aGlzIiwiZGF0YSIsInRoZW4iLCJyZXMiLCJfbG9vcCIsInJlc3VsdHMiLCJ0ZXJyYWluIiwic3BsaXQiLCJfbG9vcDIiLCJqIiwiZmlsbXMiLCJ0aXRsZSIsImJpZ2dlc3QiLCJzbWFsbGVzdCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBLFlBUUEsU0FBU0EsaUJBQWdCQyxFQUFVQyxHQUFlLEtBQU1ELFlBQW9CQyxJQUFnQixLQUFNLElBQUlDLFdBQVUscUNBTmhIQyxPQUFPQyxlQUFlQyxRQUFTLGNBQzdCQyxPQUFPLEdBR1QsSUFBSUMsY0FBZSxXQUFjLFFBQVNDLEdBQWlCQyxFQUFRQyxHQUFTLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJRCxFQUFNRSxPQUFRRCxJQUFLLENBQUUsR0FBSUUsR0FBYUgsRUFBTUMsRUFBSUUsR0FBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsU0FBV0YsS0FBWUEsRUFBV0csVUFBVyxHQUFNYixPQUFPQyxlQUFlSyxFQUFRSSxFQUFXSSxJQUFLSixJQUFpQixNQUFPLFVBQVVaLEVBQWFpQixFQUFZQyxHQUFpSixNQUE5SEQsSUFBWVYsRUFBaUJQLEVBQVltQixVQUFXRixHQUFpQkMsR0FBYVgsRUFBaUJQLEVBQWFrQixHQUFxQmxCLE1BTDNnQm9CLE1BU1QsV0FQVixRQUFBQSxHQUFPQyxHQUFBdkIsZ0JBQUF3QixLQUFBRixHQUNIRSxLQUFLRCxNQUFRQSxFQTBEakIsMkJBNUNBZixhQUFhYyxJQUFiSixJQUFBLE1BQ0VYLE1BQUssU0FaSGtCLEdBQ04sTUFBU0QsTUFBQUQsTUFBQUcsSUFBZ0JELE1BZ0JyQlAsSUFEQyxhQUNEWCxNQUFLLFNBYklrQixHQUFLLEdBQUFFLEdBQUFILEtBQ1ZJLEVBQUFBLE1BVE4sT0FBQUosTUFBQUUsSUFBWUgsR0FBT00sS0FBQSxTQUFBQyxHQVliRixFQUFPRSxFQUFJRixJQUVYLEtBQUssR0FiRkwsR0FBUUEsRUFBQUEsUUFERVEsRUFBQSxTQWNKbkIsR0FDUG9CLEVBQVFwQixHQUFHcUIsUUFBVUQsRUFBUXBCLEdBQUdxQixRQUFRQyxNQUFNLEtBQXRELEtBQWEsR0FmTUMsR0FBQSxTQWVOQyxHQUNOVCxFQUFBRCxJQUFBTSxFQUFBcEIsR0FBQXlCLE1BQUFELElBQUFQLEtBQUEsU0FBQUMsR0FDRUUsRUFBU3BCLEdBYmRhLE1BQUtXLEdBQUFOLEVBQUFGLEtBQUFVLFNBV0lGLEVBQVEsRUFBQUEsRUFBQUosRUFBQXBCLEdBQUF5QixNQUFBeEIsT0FBQXVCLElBQUFELEVBQVJDLEVBS1ZKLEdBQUFwQixHQUFBeUIsTUFBQXhCLE9BQUFtQixFQUFBcEIsR0FBQXFCLFFBQUFwQixRQUNJbUIsRUFBQXBCLEdBQUEyQixRQUFBLFFBQ0VQLEVBQVNwQixHQUFBNEIsU0FkUGYsWUFpQkRPLEVBQVFwQixHQUFHMkIsUUFBVSxVQWhCekJYLEVBQUFBLEdBQUFBLFNBQUFBLFVBS1NoQixFQUFJLEVBQUdBLEVBQUlvQixFQUFRbkIsT0FBUUQsSUFBS21CLEVBQWhDbkIsRUFlWCxPQWhCUW9CLFNBOENMVixJQUdUaEIsU0FBUW1DLFFBaEVhbkIiLCJmaWxlIjoic3dhcGkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3dhcGkge1xuICAvKiBAbmdJbmplY3QgKi9cbiAgY29uc3RydWN0b3IoJGh0dHApIHtcbiAgICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgfVxuXG4gIGdldCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQodXJsKTtcbiAgfVxuXG4gIGdldFBsYW5ldHModXJsKSB7XG4gICAgbGV0IGRhdGE7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KHVybClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICBjb25zdCByZXN1bHRzID0gZGF0YS5yZXN1bHRzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICByZXN1bHRzW2ldLnRlcnJhaW4gPSByZXN1bHRzW2ldLnRlcnJhaW4uc3BsaXQoJywgJyk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHRzW2ldLmZpbG1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICB0aGlzLmdldChyZXN1bHRzW2ldLmZpbG1zW2pdKS50aGVuKChyZXMpID0+e1xuICAgICAgICAgICAgICByZXN1bHRzW2ldLmZpbG1zW2pdID0gcmVzLmRhdGEudGl0bGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdHNbaV0uZmlsbXMubGVuZ3RoID4gcmVzdWx0c1tpXS50ZXJyYWluLmxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0c1tpXS5iaWdnZXN0ID0gJ2ZpbG1zJztcbiAgICAgICAgICAgIHJlc3VsdHNbaV0uc21hbGxlc3QgPSAndGVycmFpbic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdHNbaV0uYmlnZ2VzdCA9ICd0ZXJyYWluJztcbiAgICAgICAgICAgIHJlc3VsdHNbaV0uc21hbGxlc3QgPSAnZmlsbXMnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9KTtcblxuICB9XG59XG4iXX0=