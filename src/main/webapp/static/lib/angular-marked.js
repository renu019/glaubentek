(function(f) {
	if (typeof exports === "object" && typeof module !== "undefined") {
		module.exports = f()
	} else if (typeof define === "function" && define.amd) {
		define([], f)
	} else {
		var g;
		if (typeof window !== "undefined") {
			g = window
		} else if (typeof global !== "undefined") {
			g = global
		} else if (typeof self !== "undefined") {
			g = self
		} else {
			g = this
		}
		g.angularMarked = f()
	}
})
		(function() {
			var define, module, exports;
			return function e(t, n, r) {
				function s(o, u) {
					if (!n[o]) {
						if (!t[o]) {
							var a = typeof require == "function" && require;
							if (!u && a)
								return a(o, !0);
							if (i)
								return i(o, !0);
							var f = new Error("Cannot find module '" + o + "'");
							throw f.code = "MODULE_NOT_FOUND", f
						}
						var l = n[o] = {
							exports : {}
						};
						t[o][0].call(l.exports, function(e) {
							var n = t[o][1][e];
							return s(n ? n : e)
						}, l, l.exports, e, t, n, r)
					}
					return n[o].exports
				}
				var i = typeof require == "function" && require;
				for (var o = 0; o < r.length; o++)
					s(r[o]);
				return s
			}
					(
							{
								1 : [
										function(require, module, exports) {
											"use strict";
											var unindent = require("./strip-indent");
											function markedProvider() {
												var self = this;
												self.setRenderer = function(
														opts) {
													this.renderer = opts
												};
												self.setOptions = function(opts) {
													this.defaults = opts
												};
												self.$get = [
														"$log",
														"$window",
														function($log, $window) {
															var m;
															try {
																m = require("marked")
															} catch (err) {
																m = $window.marked
																		|| marked
															}
															if (angular
																	.isUndefined(m)) {
																$log
																		.error("angular-marked Error: marked not loaded.  See installation instructions.");
																return
															}
															var r = new m.Renderer;
															if (self.renderer) {
																var o = Object
																		.keys(self.renderer);
																var l = o.length;
																while (l--) {
																	r[o[l]] = self.renderer[o[l]]
																}
															}
															function wrapNonBindable(
																	string) {
																return "<span ng-non-bindable>"
																		+ string
																		+ "</span>"
															}
															var renderCode = r.code
																	.bind(r);
															r.code = function(
																	code, lang,
																	escaped) {
																return wrapNonBindable(renderCode(
																		code,
																		lang,
																		escaped))
															};
															var renderCodespan = r.codespan
																	.bind(r);
															r.codespan = function(
																	code) {
																return wrapNonBindable(renderCodespan(code))
															};
															self.defaults = self.defaults
																	|| {};
															self.defaults.renderer = r;
															m
																	.setOptions(self.defaults);
															return m
														} ]
											}
											markedDirective.$inject = [
													"marked",
													"$templateRequest",
													"$compile" ];
											function markedDirective(marked,
													$templateRequest, $compile) {
												return {
													restrict : "AE",
													replace : true,
													scope : {
														opts : "=",
														marked : "=",
														compile : "@",
														src : "="
													},
													link : function(scope,
															element, attrs) {
														if (attrs.marked) {
															set(scope.marked);
															scope.$watch(
																	"marked",
																	set)
														} else if (attrs.src) {
															scope
																	.$watch(
																			"src",
																			function(
																					src) {
																				$templateRequest(
																						src,
																						true)
																						.then(
																								function(
																										response) {
																									set(response)
																								},
																								function() {
																									set("");
																									scope
																											.$emit(
																													"$markedIncludeError",
																													attrs.src)
																								})
																			})
														} else {
															set(element.text())
														}
														function set(text) {
															text = unindent(String(text
																	|| ""));
															element
																	.html(marked(
																			text,
																			scope.opts
																					|| null));
															if (scope
																	.$eval(attrs.compile)) {
																$compile(
																		element
																				.contents())
																		(
																				scope.$parent)
															}
														}
													}
												}
											}
											module.exports = angular.module(
													"hc.marked", []).directive(
													"marked", markedDirective)
													.provider("marked",
															markedProvider).name
										}, {
											"./strip-indent" : 2,
											marked : "marked"
										} ],
								2 : [
										function(require, module, exports) {
											module.exports = function unindent(
													text) {
												if (!text) {
													return text
												}
												var lines = text.replace(/\t/g,
														"  ").split(/\r?\n/);
												var min = null;
												var len = lines.length;
												var i;
												for (i = 0; i < len; i++) {
													var line = lines[i];
													var l = line
															.match(/^(\s*)/)[0].length;
													if (l === line.length) {
														continue
													}
													min = l < min
															|| min === null ? l
															: min
												}
												if (min !== null && min > 0) {
													for (i = 0; i < len; i++) {
														lines[i] = lines[i]
																.substr(min)
													}
												}
												return lines.join("\n")
											}
										}, {} ]
							}, {}, [ 1 ])(1)
		});