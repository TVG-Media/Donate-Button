!(function (e) {
	function n(r) {
		if (t[r]) return t[r].exports;
		var o = (t[r] = {i: r, l: !1, exports: {}});
		return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
	}
	var t = {};
	(n.m = e),
		(n.c = t),
		(n.d = function (e, t, r) {
			n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r});
		}),
		(n.r = function (e) {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
				Object.defineProperty(e, '__esModule', {value: !0});
		}),
		(n.t = function (e, t) {
			if ((1 & t && (e = n(e)), 8 & t)) return e;
			if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
			var r = Object.create(null);
			if (
				(n.r(r),
				Object.defineProperty(r, 'default', {enumerable: !0, value: e}),
				2 & t && 'string' != typeof e)
			)
				for (var o in e)
					n.d(
						r,
						o,
						function (n) {
							return e[n];
						}.bind(null, o)
					);
			return r;
		}),
		(n.n = function (e) {
			var t =
				e && e.__esModule
					? function () {
							return e.default;
					  }
					: function () {
							return e;
					  };
			return n.d(t, 'a', t), t;
		}),
		(n.o = function (e, n) {
			return Object.prototype.hasOwnProperty.call(e, n);
		}),
		(n.p = 'https://assets.every.org/dist/donate-button/0.3/'),
		n((n.s = 'riXW'));
})({
	'/hs+': function (e, n, t) {
		'use strict';
		function r(e, n) {
			ee.i.__h && ee.i.__h(ie, e, pe || n), (pe = 0);
			var t = ie.__H || (ie.__H = {__: [], __h: []});
			return e >= t.__.length && t.__.push({}), t.__[e];
		}
		function o(e) {
			return (pe = 1), i(m, e);
		}
		function i(e, n, t) {
			var o = r(oe++, 2);
			return (
				(o.t = e),
				o.__c ||
					((o.__ = [
						t ? t(n) : m(void 0, n),
						function (e) {
							var n = o.t(o.__[0], e);
							o.__[0] !== n && ((o.__ = [n, o.__[1]]), o.__c.setState({}));
						}
					]),
					(o.__c = ie)),
				o.__
			);
		}
		function a(e, n) {
			var t = r(oe++, 3);
			!ee.i.__s && _(t.__H, n) && ((t.__ = e), (t.__H = n), ie.__H.__h.push(t));
		}
		function c(e, n) {
			var t = r(oe++, 4);
			!ee.i.__s && _(t.__H, n) && ((t.__ = e), (t.__H = n), ie.__h.push(t));
		}
		function l(e) {
			return (
				(pe = 5),
				u(function () {
					return {current: e};
				}, [])
			);
		}
		function u(e, n) {
			var t = r(oe++, 7);
			return _(t.__H, n) && ((t.__ = e()), (t.__H = n), (t.__h = e)), t.__;
		}
		function s(e) {
			var n = ie.context[e.__c],
				t = r(oe++, 9);
			return (
				(t.__c = e),
				n ? (null == t.__ && ((t.__ = !0), n.sub(ie)), n.props.value) : e.__
			);
		}
		function f() {
			de.forEach(function (e) {
				if (e.__P)
					try {
						e.__H.__h.forEach(p), e.__H.__h.forEach(d), (e.__H.__h = []);
					} catch (n) {
						(e.__H.__h = []), ee.i.__e(n, e.__v);
					}
			}),
				(de = []);
		}
		function p(e) {
			var n = ie;
			'function' == typeof e.__c && e.__c(), (ie = n);
		}
		function d(e) {
			var n = ie;
			(e.__c = e.__()), (ie = n);
		}
		function _(e, n) {
			return (
				!e ||
				e.length !== n.length ||
				n.some(function (n, t) {
					return n !== e[t];
				})
			);
		}
		function m(e, n) {
			return 'function' == typeof n ? n(e) : n;
		}
		function g() {
			return (g =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function h() {
			return (h =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function y() {
			return (y =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function b() {
			return (b =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function v() {
			return (v =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function O() {
			return (O =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function j() {
			return (j =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function w() {
			return (w =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function k(e, n) {
			for (var t in n) e[t] = n[t];
			return e;
		}
		function C(e, n) {
			for (var t in e) if ('__source' !== t && !(t in n)) return !0;
			for (var r in n) if ('__source' !== r && e[r] !== n[r]) return !0;
			return !1;
		}
		function S(e) {
			this.props = e;
		}
		function x(e) {
			function n(n, t) {
				var r = k({}, n);
				return (
					delete r.ref,
					e(
						r,
						(t = n.ref || t) && ('object' != typeof t || 'current' in t)
							? t
							: null
					)
				);
			}
			return (
				(n.$$typeof = $n),
				(n.render = n),
				(n.prototype.isReactComponent = n.__f = !0),
				(n.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
				n
			);
		}
		function N() {
			(this.__u = 0), (this.t = null), (this.__b = null);
		}
		function A(e) {
			var n = e.__.__c;
			return n && n.__e && n.__e(e);
		}
		function L() {
			(this.u = null), (this.o = null);
		}
		function D(e) {
			return (
				(this.getChildContext = function () {
					return e.context;
				}),
				e.children
			);
		}
		function P(e) {
			var n = this,
				t = e.i;
			(n.componentWillUnmount = function () {
				Object(ee.j)(null, n.l), (n.l = null), (n.i = null);
			}),
				n.i && n.i !== t && n.componentWillUnmount(),
				e.__v
					? (n.l ||
							((n.i = t),
							(n.l = {
								nodeType: 1,
								parentNode: t,
								childNodes: [],
								appendChild: function (e) {
									this.childNodes.push(e), n.i.appendChild(e);
								},
								insertBefore: function (e) {
									this.childNodes.push(e), n.i.appendChild(e);
								},
								removeChild: function (e) {
									this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
										n.i.removeChild(e);
								}
							})),
					  Object(ee.j)(Object(ee.e)(D, {context: n.context}, e.__v), n.l))
					: n.l && n.componentWillUnmount();
		}
		function T() {}
		function E() {
			return this.cancelBubble;
		}
		function R() {
			return this.defaultPrevented;
		}
		function M(e) {
			return !!e && e.$$typeof === Jn;
		}
		function I() {
			return (I =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function U(e, n, t, r, o, i, a) {
			try {
				var c = e[i](a),
					l = c.value;
			} catch (e) {
				return void t(e);
			}
			c.done ? n(l) : Promise.resolve(l).then(r, o);
		}
		function B() {
			return (B =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function q() {
			return (q =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function H() {
			return (H =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function W() {
			return (W =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function X() {
			return (X =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function F() {
			return (F =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function G(e, n, t, r, o, i, a) {
			try {
				var c = e[i](a),
					l = c.value;
			} catch (e) {
				return void t(e);
			}
			c.done ? n(l) : Promise.resolve(l).then(r, o);
		}
		function z() {
			return (z =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function $(e, n, t, r, o, i, a) {
			try {
				var c = e[i](a),
					l = c.value;
			} catch (e) {
				return void t(e);
			}
			c.done ? n(l) : Promise.resolve(l).then(r, o);
		}
		function V() {
			return (V =
				Object.assign ||
				function (e) {
					for (var n = 1; n < arguments.length; n++) {
						var t = arguments[n];
						for (var r in t)
							Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
					}
					return e;
				}).apply(this, arguments);
		}
		function Y(e, n) {
			var t;
			if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
				if (
					Array.isArray(e) ||
					(t = (function (e, n) {
						if (!e) return;
						if ('string' == typeof e) return K(e, n);
						var t = Object.prototype.toString.call(e).slice(8, -1);
						'Object' === t && e.constructor && (t = e.constructor.name);
						if ('Map' === t || 'Set' === t) return Array.from(e);
						if (
							'Arguments' === t ||
							/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
						)
							return K(e, n);
					})(e)) ||
					(n && e && 'number' == typeof e.length)
				) {
					t && (e = t);
					var r = 0;
					return function () {
						return r >= e.length ? {done: !0} : {done: !1, value: e[r++]};
					};
				}
				throw new TypeError(
					'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
				);
			}
			return (t = e[Symbol.iterator]()).next.bind(t);
		}
		function K(e, n) {
			(null == n || n > e.length) && (n = e.length);
			for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
			return r;
		}
		function Z() {
			for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++)
				t[r] = arguments[r];
			(e = console).info.apply(e, ['Every.org Donate Button:'].concat(t));
		}
		function J(e) {
			try {
				var n = new URL(e);
				if (!['www.every.org', 'every.org'].includes(n.host))
					return {errorType: yr.BAD_DOMAIN};
				var t = n.pathname.split('/').filter(Boolean);
				return t.length < 2 || 'donate' !== t[1]
					? {errorType: yr.NOT_DONATE_ROUTE}
					: {nonprofitSlug: t[0], crypto: 'crypto' === t[2]};
			} catch (e) {
				return {errorType: yr.OTHER, error: e};
			}
		}
		t.r(n);
		var Q,
			ee = t('NMMh'),
			ne = t('5zHJ'),
			te = t.n(ne);
		!(function (e) {
			e.BasisGrotesque =
				"'Basis Grotesque Pro', -apple-system, BlinkMacSystemFont,\n    'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Roboto,\n    sans-serif";
		})(Q || (Q = {}));
		var re = function (e) {
			var n = e.nonprofitSlug;
			return (
				'https://www.every.org/' +
				n +
				'/donate' +
				(e.crypto ? '/crypto' : '') +
				'?' +
				Object.entries({
					frequency: e.frequency,
					amount: e.amount,
					utm_campaign: 'donate-button',
					utm_source: n,
					utm_medium: 'donate-button-0.3',
					no_exit: 1
				})
					.filter(function (e) {
						return Boolean(e[1]);
					})
					.map(function (e) {
						return e
							.map(function (e) {
								return encodeURIComponent(e);
							})
							.join('=');
					})
					.join('&')
			);
		};
		te.a.prefix('edoBtn-');
		var oe,
			ie,
			ae,
			ce = te()({
				display: 'flex',
				alignItems: 'center',
				width: 'max-content',
				border: 'none',
				outline: 'none',
				fontFamily: Q.BasisGrotesque,
				fontWeight: 500,
				lineHeight: 1,
				cursor: 'pointer',
				textDecoration: 'none',
				backfaceVisibility: 'hidden',
				transition: 'background-color 0.25s',
				padding: '0.75rem 1.25rem',
				color: '#fff',
				backgroundColor: '#00a380',
				borderRadius: '100px',
				fontSize: '1rem',
				'&:hover': {backgroundColor: '#2F806D'}
			}),
			le = te()({
				width: '1rem',
				height: '1rem',
				fill: '#fff',
				marginRight: '0.5rem'
			}),
			ue = te()({transform: 'translateY(0.08em)'}),
			se = Object(ee.g)('path', {
				d:
					'M48.3746 20.9558C48.3746 9.03877 38.4374 0 25.6754 0C11.4001 0 0 12.0685 0 27.0153C0 43.1235 12.8125 56 30.0639 56C47.3153 56 62.7508 42.3156 63.9614 24.3895H56.0924C54.6295 37.8215 43.2799 48.1226 30.0639 48.1226C17.3523 48.1226 7.91952 38.7809 7.91952 27.0153C7.91952 16.4112 15.7886 7.87737 25.6754 7.87737C33.948 7.87737 40.4551 13.5329 40.4551 20.9558C40.4551 27.1163 36.0161 32.2669 30.1143 32.2669V40.1443C40.556 40.1443 48.3746 31.4085 48.3746 20.9558Z'
			}),
			fe = function (e) {
				var n = e.label,
					t = e.withLogo,
					r = void 0 === t || t,
					o = e.textColor,
					i = e.bgColor,
					a = e.borderRadius,
					c = e.fontSize,
					l = e.padding,
					u = e.className,
					s = e.onClick,
					f = e.target,
					p = void 0 === f ? '_blank' : f,
					d = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							n.indexOf((t = i[r])) >= 0 || (o[t] = e[t]);
						return o;
					})(e, [
						'label',
						'withLogo',
						'textColor',
						'bgColor',
						'borderRadius',
						'fontSize',
						'padding',
						'className',
						'onClick',
						'target'
					]),
					_ = re(d);
				return Object(ee.g)(
					'a',
					{
						href: _,
						style: {
							background: i,
							color: o,
							borderRadius: a,
							fontSize: c,
							padding: l
						},
						className: [ce, u].filter(Boolean).join(' '),
						target: p,
						onClick: s
							? function (e) {
									e.preventDefault(), s();
							  }
							: void 0
					},
					r &&
						Object(ee.g)(
							'svg',
							{
								className: le,
								style: {color: o, height: c, width: c},
								width: '64',
								height: '56',
								viewBox: '0 0 64 56',
								fill: 'none',
								xmlns: 'http://www.w3.org/2000/svg'
							},
							se
						),
					Object(ee.g)(
						'span',
						{className: ue},
						n || 'Donate' + (d.crypto ? ' Crypto' : '')
					)
				);
			},
			pe = 0,
			de = [],
			_e = ee.i.__b,
			me = ee.i.__r,
			ge = ee.i.diffed,
			he = ee.i.__c,
			ye = ee.i.unmount;
		(ee.i.__b = function (e) {
			(ie = null), _e && _e(e);
		}),
			(ee.i.__r = function (e) {
				me && me(e), (oe = 0);
				var n = (ie = e.__c).__H;
				n && (n.__h.forEach(p), n.__h.forEach(d), (n.__h = []));
			}),
			(ee.i.diffed = function (e) {
				ge && ge(e);
				var n = e.__c;
				n &&
					n.__H &&
					n.__H.__h.length &&
					((1 !== de.push(n) && ae === ee.i.requestAnimationFrame) ||
						(
							(ae = ee.i.requestAnimationFrame) ||
							function (e) {
								var n,
									t = function () {
										clearTimeout(r),
											ve && cancelAnimationFrame(n),
											setTimeout(e);
									},
									r = setTimeout(t, 100);
								ve && (n = requestAnimationFrame(t));
							}
						)(f)),
					(ie = void 0);
			}),
			(ee.i.__c = function (e, n) {
				n.some(function (e) {
					try {
						e.__h.forEach(p),
							(e.__h = e.__h.filter(function (e) {
								return !e.__ || d(e);
							}));
					} catch (t) {
						n.some(function (e) {
							e.__h && (e.__h = []);
						}),
							(n = []),
							ee.i.__e(t, e.__v);
					}
				}),
					he && he(e, n);
			}),
			(ee.i.unmount = function (e) {
				ye && ye(e);
				var n = e.__c;
				if (n && n.__H)
					try {
						n.__H.__.forEach(p);
					} catch (e) {
						ee.i.__e(e, n.__v);
					}
			});
		var be,
			ve = 'function' == typeof requestAnimationFrame,
			Oe = Object(ee.d)({}),
			je = function () {
				return s(Oe);
			};
		!(function (e) {
			(e.Empty = '0'),
				(e.XXS = '0.25rem'),
				(e.XS = '0.5rem'),
				(e.S = '0.75rem'),
				(e.M = '1rem'),
				(e.L = '1.25rem'),
				(e.XL = '1.5rem'),
				(e.XXL = '2rem'),
				(e.Stack_XXS = '0 0 0.25rem 0'),
				(e.Stack_XS = '0 0 0.5rem 0'),
				(e.Stack_S = '0 0 0.75rem 0'),
				(e.Stack_M = '0 0 1rem 0'),
				(e.Stack_L = '0 0 1.25rem 0'),
				(e.Stack_XL = '0 0 1.5rem 0'),
				(e.Stack_XXL = '0 0 2rem 0'),
				(e.Inset_XXS = '0.25rem 0.25rem 0.25rem 0.25rem'),
				(e.Inset_XS = '0.5rem 0.5rem 0.5rem 0.5rem'),
				(e.Inset_S = '0.75rem 0.75rem 0.75rem 0.75rem'),
				(e.Inset_M = '1rem 1rem 1rem 1rem'),
				(e.Inset_L = '1.25rem 1.25rem 1.25rem 1.25rem'),
				(e.Inset_XL = '1.5rem 1.5rem 1.5rem 1.5rem'),
				(e.Inset_XXL = '2rem 2rem 2rem 2rem'),
				(e.InsetSquish_XS = '0.5rem 1rem'),
				(e.InsetSquish_S = '0.75rem 1.5rem'),
				(e.InsetSquish_M = '1rem 2rem'),
				(e.InsetSquish_L = '1.25rem 2.5rem'),
				(e.InsetSquish_XL = '1.5rem 3rem'),
				(e.Inline_XS = '0 0.5rem 0 0'),
				(e.Inline_S = '0 0.75rem 0 0'),
				(e.Inline_M = '0 1rem 0 0'),
				(e.Inline_L = '0 1.25rem 0 0'),
				(e.Inline_XL = '0 1.5rem 0 0'),
				(e.Inline_XXL = '0 1.5rem 0 0');
		})(be || (be = {}));
		var we,
			ke = te()({padding: be.Inset_XS, cursor: 'pointer'}),
			Ce = function (e) {
				var n = e.positionCss,
					t = e.color,
					r = je().hideWidget,
					o = (function (e) {
						return te()({
							width: '1rem',
							height: '2px',
							background: e,
							transform: 'rotate(45deg)',
							position: 'relative',
							'&:after': {
								content: '""',
								position: 'absolute',
								left: 0,
								background: e,
								width: '1rem',
								height: '2px',
								transform: 'rotate(-90deg)'
							}
						});
					})(t);
				return Object(ee.g)(
					'div',
					{className: [ke].concat(n).join(' '), onClick: r},
					Object(ee.g)('div', {role: 'button', className: o})
				);
			},
			Se = t.p + '5b98a120aeec3f5a1aeb9c0a8c011cf8.svg',
			xe = t.p + '35dbacd736781608964ae37a3b390b48.svg',
			Ne = t.p + 'b1c93fbc87d276fdf189f29a276bfd1a.svg',
			Ae = t.p + 'ff9572e6d3b563fc377cf1bc5df7baf9.svg',
			Le = t.p + 'c95087e1a852cf730acc3defc2d52724.svg',
			De = Object(ee.d)({}),
			Pe = function () {
				return s(De);
			},
			Te = {
				fontSize: '0.875rem',
				lineHeight: '1.25rem',
				letterSpacing: '-0.05em'
			},
			Ee = {fontSize: '0.75rem', lineHeight: 1.5},
			Re = {fontSize: '1rem', lineHeight: 1},
			Me = {fontSize: '1rem', lineHeight: 1.5, letterSpacing: '-0.01em'},
			Ie = {fontSize: '1.75rem', lineHeight: '2rem', letterSpacing: '-0.015'},
			Ue = {fontSize: '1.5rem', lineHeight: '1.75rem', letterSpacing: '-0.015'},
			Be = {fontSize: '1.25rem', lineHeight: '1.5rem', letterSpacing: '-0.015'},
			qe = function (e) {
				return te()(
					g({}, Me, {
						lineHeight: 1.25,
						color: e,
						margin: be.Empty,
						transform: 'translateY(0.09em)'
					})
				);
			},
			He = te()({
				height: '1rem',
				width: '1rem',
				borderRadius: '100%',
				objectFit: 'cover',
				objectPosition: 'center',
				margin: be.Inline_XS
			}),
			We = {GB: xe, US: Le, HK: Ae, AU: Se, OTHER: Ne},
			Xe = function (e) {
				var n,
					t,
					r = e.country,
					o = Pe().primaryColor;
				return Object(ee.g)(
					ee.b,
					null,
					Object(ee.g)('img', {
						className: He,
						src:
							((n = null == r ? void 0 : r.countryCode),
							(t = We[n]),
							t || We.OTHER),
						alt: 'country flag'
					}),
					Object(ee.g)('p', {className: qe(o)}, null == r ? void 0 : r.name)
				);
			},
			Fe = function (e, n) {
				var t,
					r =
						n ||
						((t = window.navigator.language).includes('-')
							? t.split('-')[0]
							: t);
				return e[r] && 'en' !== r ? h({}, e.en, e[r]) : e.en;
			},
			Ge = function () {
				var e = Pe();
				return Fe(e.i18n, e.forceLanguage);
			},
			ze = function (e) {
				var n = e.color,
					t = e.className;
				return Object(ee.g)(
					'svg',
					{
						className: t,
						width: '10',
						height: '5',
						viewBox: '0 0 10 5',
						fill: 'none',
						xmlns: 'http://www.w3.org/2000/svg'
					},
					Object(ee.g)('path', {
						d: 'M1 0.5L5 4.5L9 0.5',
						stroke: n,
						strokeLinecap: 'round',
						strokeLinejoin: 'round'
					})
				);
			};
		!(function (e) {
			(e.Normal = '1px solid'), (e.Big = '4px solid');
		})(we || (we = {}));
		var $e,
			Ve,
			Ye,
			Ke = function (e, n) {
				return e + ' ' + n;
			};
		!(function (e) {
			(e.LightGray = '#EAEDED'),
				(e.Gray = '#f3f6f6'),
				(e.DarkGray = '#868A8A'),
				(e.Black = '#272727'),
				(e.Text = '#2E3434'),
				(e.TextGray = '#868383'),
				(e.TextOpaque = 'rgba(46, 52, 52, 0.6)'),
				(e.Error = '#D95C35'),
				(e.ErrorShadow = 'rgba(217, 92, 53, 0.2)'),
				(e.Transparent = 'transparent'),
				(e.White = '#fff');
		})($e || ($e = {})),
			(function (e) {
				(e.Small = '1px'),
					(e.Default = '8px'),
					(e.Medium = '24px'),
					(e.Big = '100px'),
					(e.Circle = '100%');
			})(Ve || (Ve = {})),
			(function (e) {
				(e.DonationForm = 'donation-form'),
					(e.SelectCountry = 'select-country');
			})(Ye || (Ye = {}));
		var Ze,
			Je,
			Qe,
			en = function (e, n) {
				return n.replace(/{{(\w*)}}/g, function (n, t) {
					return e[t] ? e[t] : '';
				});
			},
			nn = te()({
				display: 'flex',
				flexDirection: 'row',
				margin: be.Stack_S,
				alignItems: 'center',
				position: 'relative',
				cursor: 'pointer',
				justifyContent: 'space-between'
			}),
			tn = te()({display: 'flex', alignItems: 'center'}),
			rn = function (e) {
				return te()(y({}, Me, {color: e, lineHeight: 0}));
			},
			on = te()(y({}, Ee, {color: $e.TextOpaque, margin: 0})),
			an = t.p + '680d9f2b193ea08053d1cb70bf4ce365.png',
			cn = t.p + 'bebb1feb9ca67a6de7c666a817aec366.svg',
			ln = t.p + '3b4b3ff9d0419bf3e8be8d58954c5af3.svg',
			un = t.p + '26c3c8adcd2dc8d9467347f885cba3ba.svg',
			sn = t.p + 'b7b62c86aa26355e389020d45b1d16be.svg',
			fn = t.p + 'b796022bd67d65f87da7d5374091163f.png',
			pn = t.p + '2009ea7663beb0eb3bce4db05e6b9742.svg';
		((Je = Ze || (Ze = {})).Card = 'card'),
			(Je.ApplePay = 'applePay'),
			(Je.GooglePay = 'googlePay'),
			(Je.Bank = 'bank'),
			(Je.Paypal = 'paypal'),
			(Je.Crypto = 'crypto'),
			(Je.Stock = 'stock'),
			(Je.DAF = 'daf'),
			(Je.Wire = 'wire');
		var dn,
			_n,
			mn =
				(((Qe = {})[Ze.ApplePay] = {logo: an, label: 'Apple pay'}),
				(Qe[Ze.Bank] = {logo: cn, label: 'Bank'}),
				(Qe[Ze.Card] = {logo: ln, label: 'Card'}),
				(Qe[Ze.Crypto] = {logo: un, label: 'Crypto'}),
				(Qe[Ze.GooglePay] = {logo: fn, label: 'Google Pay'}),
				(Qe[Ze.Paypal] = {logo: pn, label: 'Paypal'}),
				(Qe[Ze.DAF] = {logo: sn, label: 'DAF'}),
				(Qe[Ze.Stock] = {logo: sn, label: 'Stock'}),
				(Qe[Ze.Wire] = {logo: sn, label: 'Wire'}),
				Qe),
			gn = te()({display: 'flex', alignItems: 'center'}),
			hn = te()({height: '0.75rem', width: 'auto', marginRight: '0.25rem'}),
			yn = te()(
				b({}, Ee, {
					color: $e.TextGray,
					transform: 'translateY(0.07em)',
					whiteSpace: 'nowrap'
				})
			),
			bn = function (e) {
				var n = mn[e.paymentMethod];
				return Object(ee.g)(
					'div',
					{className: gn},
					Object(ee.g)('img', {
						src: n.logo,
						alt: 'Payment method logo',
						className: hn
					}),
					Object(ee.g)('span', {className: yn}, n.label)
				);
			},
			vn = function (e) {
				var n = e.color,
					t = e.className;
				return Object(ee.g)(
					'svg',
					{
						className: t,
						width: '18',
						height: '18',
						viewBox: '0 0 18 18',
						fill: 'none',
						xmlns: 'http://www.w3.org/2000/svg'
					},
					Object(ee.g)('path', {
						d: 'M18 9H2M2 9L10 1M2 9L10 17',
						stroke: n,
						strokeWidth: '2'
					})
				);
			};
		!(function (e) {
			(e.PhoneOnly = '@media only screen and (max-width: 37.44em)'),
				(e.TabletUp = '@media only screen and (min-width: 37.5em)'),
				(e.TabletLandscapeUp = '@media only screen and (min-width: 56.25em)'),
				(e.DesktopUp = '@media only screen and (min-width: 75em)'),
				(e.BigDesktopUp = '@media only screen and (min-width: 112.5em)');
		})(dn || (dn = {}));
		var On,
			jn,
			wn = te()({
				display: 'flex',
				flexDirection: 'column',
				gridColumn: '1 / -1',
				gridRow: '1 / -1'
			}),
			kn = te()(
				(((_n = {
					display: 'flex',
					padding: be.Inset_XL,
					borderBottom: Ke(we.Normal, $e.LightGray),
					alignItems: 'center'
				})['' + dn.TabletLandscapeUp] = {border: 'none'}),
				_n)
			),
			Cn = te()({
				padding: be.Empty,
				margin: be.Inline_XXL,
				backgroundColor: $e.Transparent,
				border: 'none',
				outline: 'none',
				cursor: 'pointer'
			}),
			Sn = function (e) {
				return te()({
					overflow: 'auto',
					height: '100%',
					padding: be.Empty + ' ' + be.XL,
					'& > h1': v({}, Ie, {fontWeight: 'bold'}),
					'& > h2': v({}, Ue, {fontWeight: 'bold'}),
					'& > h3': v({}, Be, {fontWeight: 'bold'}),
					'& > p': v({}, Me),
					'& a': v({}, Re, {color: e, ':visited': {color: e}})
				});
			},
			xn = function (e) {
				var n = e.renderBody,
					t = e.renderHeader,
					r = Pe().primaryColor,
					o = je().setRoute;
				return Object(ee.g)(
					'div',
					{className: wn},
					Object(ee.g)(
						'div',
						{className: kn},
						Object(ee.g)(
							'button',
							{
								type: 'button',
								className: Cn,
								onClick: function () {
									o(Ye.DonationForm);
								}
							},
							Object(ee.g)(vn, {color: r})
						),
						t
					),
					Object(ee.g)('div', {className: Sn(r)}, n)
				);
			},
			Nn = te()(
				(((On = {
					display: 'flex',
					flexDirection: 'column',
					'& > *': {margin: be.Stack_M},
					marginTop: be.XL
				})['' + dn.TabletLandscapeUp] = {marginTop: be.Empty}),
				On)
			),
			An = te()({
				display: 'flex',
				flexDirection: 'column',
				border: Ke(we.Normal, $e.LightGray),
				padding: be.Inset_S,
				borderRadius: Ve.Default,
				cursor: 'pointer'
			}),
			Ln = te()({display: 'flex', alignItems: 'center', margin: be.Stack_XS}),
			Dn = te()(O({}, Me, {margin: be.Stack_M, color: $e.Text})),
			Pn = te()(O({}, Me)),
			Tn = te()({
				display: 'flex',
				flexWrap: 'wrap',
				'& > *:not(:last-child)': {marginRight: '0.875rem'}
			}),
			En = function (e) {
				var n = e.country,
					t = e.onClick,
					r = Pe().name,
					o = n.nameAndRegistration,
					i = Ge();
				return Object(ee.g)(
					'div',
					{
						className: An,
						onClick: function () {
							t(n);
						}
					},
					Object(ee.g)('div', {className: Ln}, Object(ee.g)(Xe, {country: n})),
					Object(ee.g)(
						'p',
						{className: Dn},
						en({projectName: r, nameAndRegistration: o}, i.countryDescription)
					),
					Object(ee.g)(
						'div',
						{className: Tn},
						null == n
							? void 0
							: n.paymentMethods.map(function (e) {
									return Object(ee.g)(bn, {key: e, paymentMethod: e});
							  })
					)
				);
			},
			Rn = te()(
				j(
					{},
					Te,
					(((jn = {
						padding: be.InsetSquish_S,
						borderTop: '1px solid',
						borderBottom: '1px solid',
						borderColor: $e.LightGray
					})[dn.TabletLandscapeUp] = {borderBottom: 'none'}),
					jn)
				)
			),
			Mn = function (e) {
				return te()(
					j({}, Te, {color: e, cursor: 'pointer', textDecoration: 'none'})
				);
			},
			In = function (e) {
				var n = e.classes,
					t = Pe(),
					r = t.primaryColor,
					o = re({nonprofitSlug: t.nonprofitSlug, crypto: !0});
				return Object(ee.g)(
					'div',
					{className: [Rn].concat(n).join(' ')},
					'Alternate methods:  ',
					Object(ee.g)('a', {className: Mn(r), href: o}, 'Crypto'),
					'  ',
					Object(ee.g)(
						'a',
						{className: Mn(r), href: 'https://www.every.org/donate-stock'},
						'Stock'
					),
					'  ',
					Object(ee.g)(
						'a',
						{
							className: Mn(r),
							href:
								'https://support.every.org/hc/en-us/articles/360059998953-How-can-I-donate-using-a-Donor-Advised-Fund-DAF-'
						},
						'DAF'
					)
				);
			},
			Un = te()(w({}, Me, {margin: be.Stack_XS, color: $e.Text})),
			Bn = function (e) {
				var n = e.label,
					t = e.children;
				return Object(ee.g)(
					'div',
					null,
					Object(ee.g)('p', {className: Un}, n),
					t
				);
			},
			qn = function (e) {
				var n = e.color,
					t = e.className;
				return Object(ee.g)(
					'svg',
					{
						className: t,
						width: '24',
						height: '24',
						viewBox: '0 0 24 24',
						fill: 'none',
						xmlns: 'http://www.w3.org/2000/svg'
					},
					Object(ee.g)('path', {
						d: 'M18 6L6 18',
						stroke: n,
						strokeWidth: '2',
						strokeLinecap: 'round',
						strokeLinejoin: 'round'
					}),
					Object(ee.g)('path', {
						d: 'M6 6L18 18',
						stroke: n,
						strokeWidth: '2',
						strokeLinecap: 'round',
						strokeLinejoin: 'round'
					})
				);
			},
			Hn = te()({
				display: 'flex',
				flexDirection: 'column',
				padding: be.Inset_M,
				zIndex: 1
			}),
			Wn = te()({display: 'flex', alignItems: 'flex-start'}),
			Xn = te()({flex: 1, margin: be.Inline_M}),
			Fn = te()({
				background: 'transparent',
				padding: be.Empty,
				margin: be.Empty,
				border: 'none',
				outline: 'none',
				cursor: 'pointer'
			}),
			Gn = function (e) {
				var n = e.onClose,
					t = Pe().primaryColor,
					r = Ge();
				return Object(ee.g)(
					'div',
					{className: Hn},
					Object(ee.g)(
						'div',
						{className: Wn},
						Object(ee.g)('p', {className: Xn}, r.frequencyPopover),
						Object(ee.g)(
							'button',
							{className: Fn, type: 'button', onClick: n},
							Object(ee.g)(qn, {color: t})
						)
					)
				);
			};
		((S.prototype = new ee.a()).isPureReactComponent = !0),
			(S.prototype.shouldComponentUpdate = function (e, n) {
				return C(this.props, e) || C(this.state, n);
			});
		var zn = ee.i.__b;
		ee.i.__b = function (e) {
			e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
				zn && zn(e);
		};
		var $n =
				('undefined' != typeof Symbol &&
					Symbol.for &&
					Symbol.for('react.forward_ref')) ||
				3911,
			Vn = function (e, n) {
				return null == e ? null : Object(ee.k)(Object(ee.k)(e).map(n));
			},
			Yn = {
				map: Vn,
				forEach: Vn,
				count: function (e) {
					return e ? Object(ee.k)(e).length : 0;
				},
				only: function (e) {
					var n = Object(ee.k)(e);
					if (1 !== n.length) throw 'Children.only';
					return n[0];
				},
				toArray: ee.k
			},
			Kn = ee.i.__e;
		(ee.i.__e = function (e, n, t) {
			if (e.then)
				for (var r, o = n; (o = o.__); )
					if ((r = o.__c) && r.__c)
						return (
							null == n.__e && ((n.__e = t.__e), (n.__k = t.__k)), r.__c(e, n)
						);
			Kn(e, n, t);
		}),
			((N.prototype = new ee.a()).__c = function (e, n) {
				var t = n.__c,
					r = this;
				null == r.t && (r.t = []), r.t.push(t);
				var o = A(r.__v),
					i = !1,
					a = function () {
						i || ((i = !0), (t.componentWillUnmount = t.__c), o ? o(c) : c());
					};
				(t.__c = t.componentWillUnmount),
					(t.componentWillUnmount = function () {
						a(), t.__c && t.__c();
					});
				var c = function () {
						if (!--r.__u) {
							if (r.state.__e) {
								var e = r.state.__e;
								r.__v.__k[0] = (function e(n, t, r) {
									return (
										n &&
											((n.__v = null),
											(n.__k =
												n.__k &&
												n.__k.map(function (n) {
													return e(n, t, r);
												})),
											n.__c &&
												n.__c.__P === t &&
												(n.__e && r.insertBefore(n.__e, n.__d),
												(n.__c.__e = !0),
												(n.__c.__P = r))),
										n
									);
								})(e, e.__c.__P, e.__c.__O);
							}
							var n;
							for (r.setState({__e: (r.__b = null)}); (n = r.t.pop()); )
								n.forceUpdate();
						}
					},
					l = !0 === n.__h;
				r.__u++ || l || r.setState({__e: (r.__b = r.__v.__k[0])}), e.then(a, a);
			}),
			(N.prototype.componentWillUnmount = function () {
				this.t = [];
			}),
			(N.prototype.render = function (e, n) {
				if (this.__b) {
					if (this.__v.__k) {
						var t = document.createElement('div'),
							r = this.__v.__k[0].__c;
						this.__v.__k[0] = (function e(n, t, r) {
							return (
								n &&
									(n.__c &&
										n.__c.__H &&
										(n.__c.__H.__.forEach(function (e) {
											'function' == typeof e.__c && e.__c();
										}),
										(n.__c.__H = null)),
									null != (n = k({}, n)).__c &&
										(n.__c.__P === r && (n.__c.__P = t), (n.__c = null)),
									(n.__k =
										n.__k &&
										n.__k.map(function (n) {
											return e(n, t, r);
										}))),
								n
							);
						})(this.__b, t, (r.__O = r.__P));
					}
					this.__b = null;
				}
				var o = n.__e && Object(ee.e)(ee.b, null, e.fallback);
				return (
					o && (o.__h = null),
					[Object(ee.e)(ee.b, null, n.__e ? null : e.children), o]
				);
			});
		var Zn = function (e, n, t) {
			if (
				(++t[1] === t[0] && e.o.delete(n),
				e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.o.size))
			)
				for (t = e.u; t; ) {
					for (; t.length > 3; ) t.pop()();
					if (t[1] < t[0]) break;
					e.u = t = t[2];
				}
		};
		((L.prototype = new ee.a()).__e = function (e) {
			var n = this,
				t = A(n.__v),
				r = n.o.get(e);
			return (
				r[0]++,
				function (o) {
					var i = function () {
						n.props.revealOrder ? (r.push(o), Zn(n, e, r)) : o();
					};
					t ? t(i) : i();
				}
			);
		}),
			(L.prototype.render = function (e) {
				(this.u = null), (this.o = new Map());
				var n = Object(ee.k)(e.children);
				e.revealOrder && 'b' === e.revealOrder[0] && n.reverse();
				for (var t = n.length; t--; )
					this.o.set(n[t], (this.u = [1, 0, this.u]));
				return e.children;
			}),
			(L.prototype.componentDidUpdate = L.prototype.componentDidMount = function () {
				var e = this;
				this.o.forEach(function (n, t) {
					Zn(e, t, n);
				});
			});
		var Jn =
				('undefined' != typeof Symbol &&
					Symbol.for &&
					Symbol.for('react.element')) ||
				60103,
			Qn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
			et = function (e) {
				return ('undefined' != typeof Symbol && 'symbol' == typeof Symbol()
					? /fil|che|rad/i
					: /fil|che|ra/i
				).test(e);
			};
		(ee.a.prototype.isReactComponent = {}),
			[
				'componentWillMount',
				'componentWillReceiveProps',
				'componentWillUpdate'
			].forEach(function (e) {
				Object.defineProperty(ee.a.prototype, e, {
					configurable: !0,
					get: function () {
						return this['UNSAFE_' + e];
					},
					set: function (n) {
						Object.defineProperty(this, e, {
							configurable: !0,
							writable: !0,
							value: n
						});
					}
				});
			});
		var nt = ee.i.event;
		ee.i.event = function (e) {
			return (
				nt && (e = nt(e)),
				(e.persist = T),
				(e.isPropagationStopped = E),
				(e.isDefaultPrevented = R),
				(e.nativeEvent = e)
			);
		};
		var tt,
			rt = {
				configurable: !0,
				get: function () {
					return this.class;
				}
			},
			ot = ee.i.vnode;
		ee.i.vnode = function (e) {
			var n = e.type,
				t = e.props,
				r = t;
			if ('string' == typeof n) {
				for (var o in ((r = {}), t)) {
					var i = t[o];
					('value' === o && 'defaultValue' in t && null == i) ||
						('defaultValue' === o && 'value' in t && null == t.value
							? (o = 'value')
							: 'download' === o && !0 === i
							? (i = '')
							: /ondoubleclick/i.test(o)
							? (o = 'ondblclick')
							: /^onchange(textarea|input)/i.test(o + n) && !et(t.type)
							? (o = 'oninput')
							: /^on(Ani|Tra|Tou|BeforeInp)/.test(o)
							? (o = o.toLowerCase())
							: Qn.test(o)
							? (o = o.replace(/[A-Z0-9]/, '-$&').toLowerCase())
							: null === i && (i = void 0),
						(r[o] = i));
				}
				'select' == n &&
					r.multiple &&
					Array.isArray(r.value) &&
					(r.value = Object(ee.k)(t.children).forEach(function (e) {
						e.props.selected = -1 != r.value.indexOf(e.props.value);
					})),
					'select' == n &&
						null != r.defaultValue &&
						(r.value = Object(ee.k)(t.children).forEach(function (e) {
							e.props.selected = r.multiple
								? -1 != r.defaultValue.indexOf(e.props.value)
								: r.defaultValue == e.props.value;
						})),
					(e.props = r);
			}
			n &&
				t.class != t.className &&
				((rt.enumerable = 'className' in t),
				null != t.className && (r.class = t.className),
				Object.defineProperty(r, 'className', rt)),
				(e.$$typeof = Jn),
				ot && ot(e);
		};
		var it = ee.i.__r;
		ee.i.__r = function (e) {
			it && it(e), (tt = e.__c);
		};
		var at,
			ct = {
				ReactCurrentDispatcher: {
					current: {
						readContext: function (e) {
							return tt.__n[e.__c].props.value;
						}
					}
				}
			},
			lt =
				('object' == typeof performance &&
					'function' == typeof performance.now &&
					performance.now.bind(performance),
				{
					useState: o,
					useReducer: i,
					useEffect: a,
					useLayoutEffect: c,
					useRef: l,
					useImperativeHandle: function (e, n, t) {
						(pe = 6),
							c(
								function () {
									'function' == typeof e ? e(n()) : e && (e.current = n());
								},
								null == t ? t : t.concat(e)
							);
					},
					useMemo: u,
					useCallback: function (e, n) {
						return (
							(pe = 8),
							u(function () {
								return e;
							}, n)
						);
					},
					useContext: s,
					useDebugValue: function (e, n) {
						ee.i.useDebugValue && ee.i.useDebugValue(n ? n(e) : e);
					},
					version: '16.8.0',
					Children: Yn,
					render: function (e, n, t) {
						return (
							null == n.__k && (n.textContent = ''),
							Object(ee.j)(e, n),
							'function' == typeof t && t(),
							e ? e.__c : null
						);
					},
					hydrate: function (e, n, t) {
						return (
							Object(ee.h)(e, n),
							'function' == typeof t && t(),
							e ? e.__c : null
						);
					},
					unmountComponentAtNode: function (e) {
						return !!e.__k && (Object(ee.j)(null, e), !0);
					},
					createPortal: function (e, n) {
						return Object(ee.e)(P, {__v: e, i: n});
					},
					createElement: ee.e,
					createContext: ee.d,
					createFactory: function (e) {
						return ee.e.bind(null, e);
					},
					cloneElement: function (e) {
						return M(e) ? ee.c.apply(null, arguments) : e;
					},
					createRef: ee.f,
					Fragment: ee.b,
					isValidElement: M,
					findDOMNode: function (e) {
						return (e && (e.base || (1 === e.nodeType && e))) || null;
					},
					Component: ee.a,
					PureComponent: S,
					memo: function (e, n) {
						function t(e) {
							var t = this.props.ref,
								r = t == e.ref;
							return (
								!r && t && (t.call ? t(null) : (t.current = null)),
								n ? !n(this.props, e) || !r : C(this.props, e)
							);
						}
						function r(n) {
							return (this.shouldComponentUpdate = t), Object(ee.e)(e, n);
						}
						return (
							(r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
							(r.prototype.isReactComponent = !0),
							(r.__f = !0),
							r
						);
					},
					forwardRef: x,
					unstable_batchedUpdates: function (e, n) {
						return e(n);
					},
					StrictMode: ee.b,
					Suspense: N,
					SuspenseList: L,
					lazy: function (e) {
						function n(n) {
							if (
								(t ||
									(t = e()).then(
										function (e) {
											r = e.default || e;
										},
										function (e) {
											o = e;
										}
									),
								o)
							)
								throw o;
							if (!r) throw t;
							return Object(ee.e)(r, n);
						}
						var t, r, o;
						return (n.displayName = 'Lazy'), (n.__f = !0), n;
					},
					__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ct
				}),
			ut = te()({
				position: 'absolute',
				borderRadius: Ve.Default,
				boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.05)',
				border: Ke(we.Normal, $e.LightGray),
				background: $e.White,
				display: 'flex',
				flexDirection: 'column',
				zIndex: 2,
				width: '100%'
			}),
			st = te()({
				width: '1rem',
				height: '1rem',
				borderRadius: Ve.Small,
				borderTop: Ke(we.Normal, $e.LightGray),
				borderLeft: Ke(we.Normal, $e.LightGray),
				transform: 'translate(-50%, -50%) rotate(45deg)',
				transformOrigin: 'center',
				position: 'absolute',
				top: 0,
				zIndex: 1,
				background: '#FFF'
			}),
			ft = function (e) {
				var n = e.left;
				return Object(ee.g)('div', {className: st, style: {left: n}});
			},
			pt = x(function (e, n) {
				var t = e.children,
					r = e.arrowPosition,
					i = void 0 === r ? '25%' : r,
					c = o('0'),
					l = c[0],
					u = c[1];
				return (
					a(
						function () {
							if (null != n && n.current) {
								n.current.style.position = 'relative';
								var e = n.current.getBoundingClientRect();
								u(e.height + 16 + 'px');
							}
						},
						[n]
					),
					Object(ee.g)(
						'div',
						{className: ut, style: {top: l}},
						Object(ee.g)(ft, {left: i}),
						t
					)
				);
			});
		!(function (e) {
			(e.Monthly = 'monthly'), (e.OneTime = 'once'), (e.Unselected = '');
		})(at || (at = {}));
		var dt,
			_t,
			mt,
			gt,
			ht,
			yt,
			bt,
			vt,
			Ot = function (e) {
				return te()({display: 'flex', color: e});
			},
			jt = te()(
				I({}, Me, {
					fontWeight: 400,
					padding: be.XS + ' ' + be.Empty,
					flex: 1,
					textAlign: 'center',
					border: Ke(we.Normal, $e.LightGray),
					transition: 'border .2s'
				})
			),
			wt = function (e) {
				return te()({
					border: Ke(we.Normal, e),
					backgroundColor: e,
					color: $e.White
				});
			},
			kt = function (e) {
				return te()({borderRightColor: e});
			},
			Ct = te()({borderRadius: '8px 0 0 8px'}),
			St = te()({borderRadius: '0 8px 8px 0', borderLeft: 'none!important'}),
			xt = te()({display: 'none'}),
			Nt = function (e) {
				var n = e.frequency,
					t = e.setFrequency,
					r = je(),
					o = r.showFrequencyPopover,
					i = r.dismissPopover,
					a = Pe().primaryColor,
					c = Ge(),
					u = l(null),
					s = n === at.Monthly || n === at.OneTime ? [kt(a)] : [],
					f = [jt, Ct].concat(n === at.Monthly ? [wt(a)] : []),
					p = [jt, St].concat(n === at.OneTime ? [wt(a)] : []);
				return Object(ee.g)(
					'div',
					{ref: u, className: Ot(a)},
					Object(ee.g)(
						'label',
						{
							className: f.concat(s).join(' '),
							htmlFor: 'monthly',
							onClick: function () {
								o && i(), t(at.Monthly);
							}
						},
						Object(ee.g)('input', {
							className: xt,
							type: 'radio',
							name: 'frequency',
							value: at.Monthly
						}),
						c.monthlyDonation
					),
					Object(ee.g)(
						'label',
						{
							className: p.join(' '),
							htmlFor: 'one-time',
							onClick: function () {
								o && i(), t(at.OneTime);
							}
						},
						Object(ee.g)('input', {
							className: xt,
							type: 'radio',
							name: 'frequency',
							value: at.OneTime
						}),
						c.oneTimeDonation
					),
					o ? Object(ee.g)(pt, {ref: u}, Object(ee.g)(Gn, {onClose: i})) : null
				);
			},
			At = function (e) {
				var n = e.html,
					t = new DOMParser().parseFromString(n, 'text/html').body.childNodes;
				return (function e(n) {
					return n.map(function (n) {
						var t = n.attributes,
							r = n.localName,
							o = n.childNodes,
							i = n.nodeValue,
							a = {};
						return (
							t &&
								Array.from(t).forEach(function (e) {
									a[e.name] = e.nodeValue;
								}),
							r
								? lt.createElement(
										r,
										a,
										o && Array.isArray(Array.from(o)) ? e(Array.from(o)) : []
								  )
								: i
						);
					});
				})(Array.from(t));
			},
			Lt = function (e) {
				var n = e.source,
					t = o(''),
					r = t[0],
					i = t[1];
				return (
					a(
						function () {
							(function () {
								var e = (function (e) {
									return function () {
										var n = this,
											t = arguments;
										return new Promise(function (r, o) {
											function i(e) {
												U(c, r, o, i, a, 'next', e);
											}
											function a(e) {
												U(c, r, o, i, a, 'throw', e);
											}
											var c = e.apply(n, t);
											i(void 0);
										});
									};
								})(function* () {
									var e = '';
									if (
										(function (e) {
											try {
												var n = new URL(e);
												return ['http:', 'https:'].includes(n.protocol);
											} catch (e) {
												return !1;
											}
										})(n)
									) {
										var t = yield fetch(n);
										e = yield t.text();
									} else e = n;
									i(
										(function (e) {
											var n = e;
											return (n = (n = (n = (n = (n = n
												.replace(/### (.+)/g, '<h3>$1</h3>')
												.replace(/## (.+)/g, '<h2>$1</h2>')
												.replace(/# (.+)/g, '<h1>$1</h1>')).replace(
												/\[([^\]]+)]\(([^)"]+)("(.+)")?\)/g,
												'<a href="$2">$1</a>'
											))
												.replace(
													/[*_]{2}([^*_]+)[*_]{2}/g,
													'<strong>$1</strong>'
												)
												.replace(/[*_]([^*_]+)[*_]/g, '<i>$1</i>')
												.replace(/~{2}([^~]+)~{2}/g, '<del>$1</del>'))
												.replace(/^\s*\n-/gm, '<ul>\n-')
												.replace(/^(-.+)\s*\n([^-])/gm, '$1\n</ul>\n\n$2')
												.replace(/^-(.+)/gm, '<li>$1</li>')).replace(
												/^\s*(\n)?(.+)/gm,
												function (e) {
													return /<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(
														e
													)
														? e
														: '<p>' + e + '</p>';
												}
											));
										})(e)
									);
								});
								return function () {
									return e.apply(this, arguments);
								};
							})()();
						},
						[n]
					),
					Object(ee.g)(At, {html: r})
				);
			},
			Dt = te()({
				display: 'flex',
				listStyleType: 'none',
				padding: be.Empty,
				margin: be.Empty,
				'& > *:not(:last-child)': {marginRight: be.XXL}
			}),
			Pt = function (e, n) {
				return te()({color: n ? $e.Black : e, cursor: 'pointer'});
			},
			Tt = function (e, n) {
				return e.find(function (e) {
					return e.key === n;
				});
			},
			Et = function (e) {
				return te()(B({}, Re, {color: e, cursor: 'pointer'}));
			},
			Rt = function (e) {
				var n = e.label,
					t = e.onClick,
					r = Pe().primaryColor;
				return Object(ee.g)('span', {className: Et(r), onClick: t}, n);
			},
			Mt = function (e) {
				'.' === e.key && e.preventDefault();
			},
			It = te()(
				q({}, Re, {
					position: 'relative',
					display: 'flex',
					flexDirection: 'row',
					borderRadius: Ve.Default,
					border: Ke(we.Normal, $e.LightGray),
					':focus': {outline: 'none'},
					color: $e.Text,
					fontWeight: 'bold'
				})
			),
			Ut = te()({
				border: Ke(we.Normal, $e.Error),
				boxShadow: '0px 0px 0px 2px ' + $e.ErrorShadow
			}),
			Bt = te()({
				fontSize: '1.5rem',
				border: 'none',
				margin: 0,
				fontFamily: 'inherit',
				borderRadius: Ve.Default,
				borderBottom: Ke(we.Normal, $e.Transparent),
				backgroundColor: $e.Gray,
				width: '100%',
				padding: '0.75rem 4.5rem 0.75rem 2.5rem',
				outline: 'none',
				'::placeholder': {opacity: '0.4', fontWeight: 500},
				'::-webkit-outer-spin-button': {
					'-webkit-appearance': 'none',
					margin: 0
				},
				'::-webkit-inner-spin-button': {
					'-webkit-appearance': 'none',
					margin: 0
				},
				'-moz-appearance': 'textfield'
			}),
			qt = te()({
				fontSize: '1.5rem',
				position: 'absolute',
				top: '50%',
				left: '0.75rem',
				opacity: '0.4',
				fontWeight: 500,
				transform: 'translateY(-50%)',
				lineHeight: 1,
				color: $e.TextGray
			}),
			Ht = function (e) {
				return te()({lineHeight: 1, color: e, margin: 0, fontWeight: 400});
			},
			Wt = function (e) {
				return te()({
					lineHeight: 1,
					color: e,
					appearance: 'none',
					'-webkit-appearance': 'none',
					'-moz-appearance': 'none',
					border: 'none',
					background: $e.Transparent,
					fontFamily: 'inherit',
					outline: 'none',
					':focus': {outline: 'none'},
					paddingRight: be.L
				});
			},
			Xt = te()({marginLeft: '-' + be.M, pointerEvents: 'none'}),
			Ft = te()({
				display: 'flex',
				marginTop: be.XS,
				'& > *:not(:last-child)': {marginRight: be.M}
			}),
			Gt = te()(
				q({}, Te, {
					lineHeight: 1,
					fontSize: '0.75rem',
					opacity: 0.8,
					color: $e.Error,
					marginTop: be.XS,
					marginBottom: 0
				})
			),
			zt = [50, 100, 200, 500],
			$t = function (e) {
				var n,
					t = e.value,
					r = e.setValue,
					o = e.error,
					i = e.setError,
					a = e.selectedCurrency,
					c = e.setCurrency,
					u = e.setCountry,
					s = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							n.indexOf((t = i[r])) >= 0 || (o[t] = e[t]);
						return o;
					})(e, [
						'value',
						'setValue',
						'error',
						'setError',
						'label',
						'selectedCurrency',
						'setCurrency',
						'setCountry'
					]),
					f = Pe(),
					p = f.primaryColor,
					d = f.currencies,
					_ = f.countries,
					m = l(null),
					g = [It].concat(o ? [Ut] : []),
					h = Ge(),
					y = [Bt];
				return Object(ee.g)(
					ee.b,
					null,
					Object(ee.g)(
						'div',
						{ref: m, className: g.join(' ')},
						Object(ee.g)(
							'span',
							{className: qt},
							null == a ? void 0 : a.symbol
						),
						Object(ee.g)(
							'input',
							q(
								{
									className: y.join(' '),
									placeholder: h.enterAnAmount,
									type: 'number',
									value: t,
									onKeyDown: Mt,
									onInput: function (e) {
										var n = Number.parseInt(e.currentTarget.value, 10);
										r(n), n >= 10 && i(null);
									}
								},
								s
							)
						),
						Object(ee.g)(
							'div',
							{
								className:
									((n = d.length > 1),
									te()({
										position: 'absolute',
										top: '50%',
										right: be.M,
										transform: 'translateY(-50%)',
										display: 'flex',
										alignItems: 'center',
										cursor: n ? 'pointer' : 'default'
									}))
							},
							d.length > 1
								? Object(ee.g)(
										ee.b,
										null,
										Object(ee.g)(
											'select',
											{
												className: Wt(p),
												onChange: function (e) {
													var n = d.find(function (n) {
														return n.name === e.currentTarget.value;
													});
													if (n) {
														var t = _.find(function (e) {
															return n.countryCodes.includes(e.countryCode);
														});
														t && u(t), c(n);
													}
												}
											},
											d.map(function (e) {
												return Object(ee.g)(
													'option',
													{
														key: e,
														value: e.name,
														selected: (null == a ? void 0 : a.name) === e.name
													},
													e.name
												);
											})
										),
										Object(ee.g)(ze, {className: Xt, color: p})
								  )
								: Object(ee.g)('p', {className: Ht(p)}, a.name)
						)
					),
					Object(ee.g)('p', {className: Gt}, o, ' '),
					Object(ee.g)(
						'div',
						{className: Ft},
						zt.map(function (e) {
							return Object(ee.g)(Rt, {
								key: e,
								label: '+' + e,
								onClick: function () {
									r(function (n) {
										return (null != n ? n : 0) + e;
									});
								}
							});
						})
					)
				);
			},
			Vt = te()(
				H({}, Ie, {
					position: 'absolute',
					bottom: be.M,
					left: '0',
					padding: 0,
					margin: be.Empty + ' ' + be.XL,
					fontWeight: 'bold',
					color: 'white'
				})
			),
			Yt = te()({
				borderRadius: Ve.Circle,
				border: '4px solid rgba(255,255,255,0.2)',
				width: '4rem',
				height: '4rem',
				position: 'absolute',
				top: be.XL,
				right: be.XL,
				overflow: 'hidden'
			}),
			Kt = te()({
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: be.M + ' ' + be.XL,
				background: 'white',
				position: 'sticky',
				top: 0,
				left: 0,
				zIndex: 10,
				'& > p': {margin: 0},
				borderBottom: '1px solid ' + $e.LightGray,
				transition: 'all .4s'
			}),
			Zt = te()({paddingRight: be.Empty}),
			Jt = x(function (e, n) {
				var t,
					r,
					o,
					i = e.classes,
					a = e.showScrolled,
					c = Pe(),
					l = c.name,
					u = c.primaryColor,
					s = c.logo,
					f = c.backgroundImage;
				return a
					? Object(ee.g)(
							'div',
							{className: [Kt].concat(i).join(' ')},
							Object(ee.g)(
								'p',
								null,
								'Donate to ',
								Object(ee.g)('strong', null, l)
							),
							Object(ee.g)(Ce, {positionCss: Zt, color: u})
					  )
					: Object(ee.g)(
							'div',
							{
								ref: n,
								className: [
									((r = f),
									te()(
										(((o = {
											minHeight: '190px',
											backgroundImage:
												'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(' +
												r +
												')',
											backgroundPosition: 'center',
											backgroundSize: 'cover',
											position: 'relative',
											borderTopRightRadius: 'none'
										})[dn.TabletLandscapeUp] = {
											borderTopRightRadius: Ve.Medium
										}),
										o)
									))
								]
									.concat(i)
									.join(' ')
							},
							Object(ee.g)('p', {className: Vt}, l),
							Object(ee.g)(
								'div',
								{className: Yt},
								Object(ee.g)('div', {
									alt: 'nonprofit logo',
									className:
										((t = s),
										te()({
											width: '100%',
											height: '100%',
											display: 'block',
											backgroundImage: 'url(' + t + ')',
											backgroundSize: 'contain'
										}))
								})
							)
					  );
			}),
			Qt = te()(
				W(
					{},
					Te,
					(((dt = {
						display: 'flex',
						flexDirection: 'column',
						overflow: 'initial',
						padding: be.InsetSquish_S,
						' > *:not(:last-child)': {marginBottom: be.S},
						color: $e.Text,
						' > p': {
							margin: be.Empty,
							padding: be.Empty,
							letterSpacing: '-0.005em'
						}
					})[dn.TabletLandscapeUp] = {overflow: 'auto'}),
					dt)
				)
			),
			er = te()({color: $e.TextOpaque, ' > p': {display: 'block', margin: 0}}),
			nr = function (e) {
				return te()({
					color: e,
					flex: 1,
					alignItems: 'flex-end',
					display: 'flex',
					'& > *:not(:last-child)': {marginRight: be.XL},
					' > p': {margin: 0, cursor: 'pointer'}
				});
			},
			tr = function (e) {
				var n = e.classes,
					t = je().setRoute,
					r = Pe(),
					o = r.infoPages,
					i = r.primaryColor,
					a = r.description,
					c = Ge().thanksDonation;
				return Object(ee.g)(
					'div',
					{className: [Qt].concat(n).join(' ')},
					Object(ee.g)(Lt, {source: a}),
					Object(ee.g)('div', {className: er}, Object(ee.g)(Lt, {source: c})),
					Object(ee.g)(
						'div',
						{className: nr(i)},
						null == o
							? void 0
							: o.map(function (e) {
									return Object(ee.g)(
										'p',
										{
											key: e.key,
											onClick: function () {
												t(e.key);
											}
										},
										e.name
									);
							  })
					)
				);
			},
			rr = te()(
				X({}, Te, {color: $e.TextOpaque, alignSelf: 'end', marginBottom: 0})
			),
			or = te()(
				F({}, Re, {
					border: Ke(we.Normal, $e.White),
					outline: 'none',
					width: '100%',
					fontFamily: 'inherit',
					fontWeight: 500,
					cursor: 'pointer',
					borderRadius: Ve.Big,
					color: $e.White,
					padding: be.L + ' ' + be.Empty,
					transition: 'opacity .2s',
					':hover': {opacity: '0.7'},
					':active': {opacity: '0.9'}
				})
			),
			ir = function (e) {
				return te()({backgroundColor: e});
			},
			ar = te()({
				backgroundColor: $e.DarkGray,
				':hover': {opacity: '1'},
				'& > span': {opacity: '0.6'}
			}),
			cr = function (e) {
				var n = e.handleClick,
					t = e.disabled,
					r = e.className,
					o = e.children,
					i = Pe().primaryColor;
				return Object(ee.g)(
					'button',
					{
						type: 'submit',
						className: [or]
							.concat(t ? [ar] : [ir(i)])
							.concat([r || ''])
							.join(' '),
						disabled: t,
						onClick: n
					},
					Object(ee.g)('span', null, o)
				);
			},
			lr = function (e) {
				return 'https://res.cloudinary.com/everydotorg/image/upload/' + e;
			},
			ur = [],
			sr = (function () {
				var e = (function (e) {
					return function () {
						var n = this,
							t = arguments;
						return new Promise(function (r, o) {
							function i(e) {
								G(c, r, o, i, a, 'next', e);
							}
							function a(e) {
								G(c, r, o, i, a, 'throw', e);
							}
							var c = e.apply(n, t);
							i(void 0);
						});
					};
				})(function* (e) {
					var n = yield fetch('https://partners.every.org/v0.2/nonprofit/' + e);
					return (function (e) {
						var n;
						return {
							name: e.name,
							description: e.description,
							logo: lr(e.logoCloudinaryId),
							backgroundImage: lr(e.coverImageCloudinaryId),
							countries:
								null != (n = e.eligibleDonationRecipientNonprofits) ? n : ur
						};
					})((yield n.json()).data.nonprofit);
				});
				return function (n) {
					return e.apply(this, arguments);
				};
			})(),
			fr = t('nr9d'),
			pr = t.n(fr),
			dr = {
				show: !1,
				name: 'Every Org',
				description: 'Donate today!',
				crypto: !1,
				forceLanguage: !1,
				countrySelection: !0,
				currencies: [
					{
						countryCodes: ['US', 'GLOBAL'],
						name: 'USD',
						symbol: '$',
						minimumAmount: 10
					},
					{
						countryCodes: ['HK', 'GLOBAL'],
						name: 'HKD',
						symbol: '$',
						minimumAmount: 10
					},
					{
						countryCodes: ['AU', 'GLOBAL'],
						name: 'AUD',
						symbol: '$',
						minimumAmount: 10
					}
				],
				defaultFrequency: at.Unselected,
				showInitialMessage: !0,
				primaryColor: '#00A37F',
				i18n: {
					en: {
						frequency: 'Frequency',
						monthly: 'Monthly',
						monthlyDonation: 'Monthly',
						oneTimeDonation: 'One time',
						amount: 'Amount',
						amountError: 'Enter an amount to donate',
						frequencySelect: 'Select frequency',
						frequencyPopover:
							'Monthly gifts help nonprofits focus on their mission and long-term impact',
						currencyPopover:
							'It’s recommended to donate {{suggestedCurrency}} if you are getting a {{country}} tax receipt, would you like to switch from <bold>{{fromCurrency}} to {{toCurrency}}</bold>?',
						switchCurrency: 'Change to {{suggestedCurrency}}',
						noThanks: 'No thanks',
						donateWithCrypto: 'Donate with Crypto, Stocks or DAF',
						countryTitle: 'Tax deductible in',
						countrySelection: 'Select your preferred jurisdiction',
						donate: 'Donate',
						countryDescription:
							'Support {{projectName}} with a donation to {{nameAndRegistration}}.',
						simpleRedirectNotice:
							'You will be redirected to Every.org to complete your donation.',
						donationRedirectNotice:
							'You will be redirected to Every.org to complete your {{currency}} donation to {{nameAndRegistration}}.',
						thanksDonation: '',
						minDonationAmount: 'The minimum donation amount is',
						chooseAnAmount: 'Choose an amount',
						enterAnAmount: 'Enter an amount'
					},
					es: {
						frequency: 'Frecuencia',
						monthly: 'Mensualmente',
						monthlyDonation: 'Donación mensual',
						oneTimeDonation: 'Donación única',
						amount: 'Monto',
						amountError: 'Ingrese un monto para donar',
						frequencySelect: 'Seleccione el tipo de donación',
						frequencyPopover:
							'Las donaciones mensuales nos ayudan en nuestra misión e impacto a largo plazo',
						currencyPopover:
							'Es recomendado donar en {{suggestedCurrency}} si tributas en {{country}}. ¿Te gustaría cambiar de {{fromCurrency}} a {{toCurrency}}?',
						switchCurrency: 'Cambiar a {{suggestedCurrency}}',
						noThanks: 'No, gracias',
						donateWithCrypto: 'Donar con Crypto, Stocks o DAF',
						countryTitle: 'País para deducción de impuestos',
						countrySelection: 'Selecciona tu país',
						donate: 'Donar',
						simpleRedirectNotice:
							'Vas a ser redireccionado a Every.org para completar tu donación.',
						donationRedirectNotice:
							'Vas a ser redireccionado a Every.org para completar tu donación de {{currency}} a una ONG registrada en {{country}}.',
						countryDescription:
							'Apoya a {{projectName}} con una donación a {{nameAndRegistration}}.',
						thanksDonation: '',
						minDonationAmount: 'El monto de donación mínimo es'
					}
				}
			},
			_r = {
				arrayMerge: function (e, n) {
					return n;
				}
			},
			mr = function (e) {
				return pr.a.all([dr, e], _r);
			};
		te.a.prefix('edoWidget-');
		var gr,
			hr,
			yr,
			br = te()({
				position: 'absolute',
				height: 'auto',
				width: '100vw',
				zIndex: 999,
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				display: 'flex',
				background: 'rgba(0, 0, 0, 0.5)',
				justifyContent: 'center',
				alignItems: 'center',
				fontFamily: Q.BasisGrotesque
			}),
			vr = te()(
				(((_t = {
					background: 'white',
					display: 'grid',
					gridTemplateRows: '1fr max-content',
					width: '100vw',
					height: '100%',
					borderRadius: 'unset',
					position: 'relative'
				})[dn.TabletLandscapeUp] = {
					height: '34.4rem',
					width: '44.81rem',
					borderRadius: Ve.Medium,
					gridTemplateColumns: '55.5% 44.5%',
					gridTemplateRows: '1fr 1fr max-content max-content'
				}),
				_t)
			),
			Or = te()(
				(((mt = {
					gridColumn: '1 / 2',
					gridRow: '1 / 3',
					padding: be.Inset_XL,
					borderRight: 'none',
					display: 'grid',
					gridTemplateColumns: '1fr',
					gridTemplateRows: 'max-content max-content 1fr',
					rowGap: be.XXL
				})['' + dn.TabletLandscapeUp] = {
					borderRight: '1px solid ' + $e.LightGray
				}),
				mt)
			),
			jr = te()(
				(((gt = {gridColumn: '1 / -1', gridRow: '1 / 2'})[
					'' + dn.TabletLandscapeUp
				] = {height: 'auto', gridColumn: '2 / 3', gridRow: '1 / 2'}),
				gt)
			),
			wr = te()({gridColumn: '2 / 3', gridRow: '2 / 4'}),
			kr = te()(
				(((ht = {gridRow: '4 / 5', gridColumn: '1 / -1'})[
					'' + dn.TabletLandscapeUp
				] = {gridRow: '4 / 5', gridColumn: '2 / 3'}),
				ht)
			),
			Cr = te()(
				(((yt = {
					gridColumn: '1 / -1',
					gridRow: '3 / 4',
					padding: be.XS + ' ' + be.XS
				})[dn.TabletLandscapeUp] = {
					gridColumn: '1 / 2',
					gridRow: '3 / -1',
					borderRight: '1px solid ' + $e.LightGray,
					padding: be.Empty + ' ' + be.XL + ' ' + be.XL + ' ' + be.XL
				}),
				yt)
			),
			Sr = te()(
				(((bt = {
					display: 'flex',
					flexDirection: 'column',
					overflow: 'auto',
					gridColumn: '1 / -1',
					gridRow: '1 / 2'
				})[dn.TabletLandscapeUp] = {display: 'contents', overflow: 'initial'}),
				bt)
			),
			xr = te()(
				(((vt = {position: 'absolute', zIndex: 1, top: be.XS, right: be.Empty})[
					dn.TabletLandscapeUp
				] = {top: '-' + be.M, right: '-' + be.XXL}),
				vt)
			),
			Nr = Object(ee.g)(function () {
				var e,
					n = je(),
					t = n.country,
					r = n.currency,
					o = n.setRoute,
					i = Pe(),
					a = i.primaryColor,
					c = i.countries,
					l = Ge(),
					s = u(
						function () {
							return en(
								{
									nameAndRegistration:
										null == t ? void 0 : t.nameAndRegistration,
									currency: null == r ? void 0 : r.name
								},
								l.donationRedirectNotice
							);
						},
						[t, r, l]
					);
				return Object(ee.g)(
					'div',
					{
						className:
							((e = (null == c ? void 0 : c.length) > 1),
							te()({
								padding: be.S,
								border: Ke(we.Normal, $e.LightGray),
								borderRadius: Ve.Default,
								cursor: e ? 'pointer' : 'default'
							})),
						onClick: function () {
							(null == c ? void 0 : c.length) > 1 && o(Ye.SelectCountry);
						}
					},
					Object(ee.g)(
						'div',
						{className: nn},
						Object(ee.g)(
							'div',
							{className: tn},
							Object(ee.g)(Xe, {country: t})
						),
						(null == c ? void 0 : c.length) > 1
							? Object(ee.g)(
									'span',
									{className: rn(a)},
									Object(ee.g)(ze, {color: a})
							  )
							: null
					),
					Object(ee.g)('div', null, Object(ee.g)('p', {className: on}, s))
				);
			}, null),
			Ar = Object(ee.g)(function () {
				var e = Ge().simpleRedirectNotice;
				return Object(ee.g)('p', {className: rr}, e);
			}, null),
			Lr = Object(ee.g)(function () {
				var e = je(),
					n = e.setRoute,
					t = e.setCountry,
					r = e.setCurrency,
					o = Pe(),
					i = o.countries,
					a = o.currencies,
					c = Ge(),
					l = function (e) {
						var o = a.find(function (n) {
							return n.countryCodes.includes(e.countryCode);
						});
						t(e), n(Ye.DonationForm), o && r(o);
					};
				return Object(ee.g)(xn, {
					renderHeader: Object(ee.g)(
						'span',
						{className: Pn},
						c.countrySelection
					),
					renderBody: Object(ee.g)(
						'div',
						{className: Nn},
						i.map(function (e) {
							return Object(ee.g)(En, {
								key: e.id + '-' + e.name,
								country: e,
								onClick: l
							});
						})
					)
				});
			}, null),
			Dr = Object(ee.g)(function () {
				var e = Pe(),
					n = e.infoPages,
					t = e.primaryColor,
					r = je(),
					i = r.route,
					c = r.setRoute,
					l = o(Tt(n, i)),
					u = l[0],
					s = l[1];
				return (
					a(
						function () {
							s(Tt(n, i));
						},
						[n, i]
					),
					Object(ee.g)(xn, {
						renderHeader: Object(ee.g)(
							'ul',
							{className: Dt},
							n.map(function (e) {
								return Object(ee.g)(
									'li',
									{
										key: e.key,
										className: Pt(t, e.key === i),
										onClick: function () {
											c(e.key);
										}
									},
									e.name
								);
							})
						),
						renderBody: u && Object(ee.g)(Lt, {source: u.source})
					})
				);
			}, null),
			Pr = function (e) {
				var n = e.options,
					t = e.hide,
					r = mr(n),
					i = o(r),
					c = i[0],
					u = i[1],
					s = o(Ye.DonationForm),
					f = s[0],
					p = s[1],
					d = o(c.showInitialMessage),
					_ = d[0],
					m = d[1],
					g = o(c.defaultDonationAmount),
					h = g[0],
					y = g[1],
					b = o(r.currencies[0]),
					v = b[0],
					O = b[1],
					j = o(c.defaultFrequency),
					w = j[0],
					k = j[1],
					C = o(!1),
					S = C[0],
					x = C[1],
					N = o(null),
					A = N[0],
					L = N[1],
					D = o(null),
					P = D[0],
					T = D[1],
					E = Fe(c.i18n, c.forceLanguage),
					R = l(null);
				a(
					function () {
						T(null);
					},
					[A, v]
				),
					a(
						function () {
							if (R.current) {
								var e = R.current,
									n = function () {
										var n = e.scrollTop;
										window.matchMedia(dn.TabletLandscapeUp).matches ||
											S ||
											x(n > 90);
									};
								return (
									e.addEventListener('scroll', n),
									function () {
										e.removeEventListener('scroll', n);
									}
								);
							}
						},
						[S]
					),
					a(
						function () {
							(function () {
								var e = (function (e) {
									return function () {
										var n = this,
											t = arguments;
										return new Promise(function (r, o) {
											function i(e) {
												$(c, r, o, i, a, 'next', e);
											}
											function a(e) {
												$(c, r, o, i, a, 'throw', e);
											}
											var c = e.apply(n, t);
											i(void 0);
										});
									};
								})(function* () {
									var e,
										t,
										r,
										o,
										i,
										a = yield sr(
											null != (e = n.nonprofitSlug) ? e : 'everydotorg'
										);
									u(mr(z({}, a, n))),
										L(
											null !=
												(t =
													null !=
													(r = null == (o = n.countries) ? void 0 : o[0])
														? r
														: null == (i = a.countries)
														? void 0
														: i[0])
												? t
												: {
														id: n.nonprofitSlug,
														name: 'United States',
														nameAndRegistration: a.name,
														countryCode: 'US',
														paymentMethods: [
															Ze.Card,
															Ze.ApplePay,
															Ze.GooglePay,
															Ze.Bank
														]
												  }
										);
								});
								return function () {
									return e.apply(this, arguments);
								};
							})()();
						},
						[n]
					);
				return c.show
					? Object(ee.g)(
							De.Provider,
							{value: c},
							Object(ee.g)(
								Oe.Provider,
								{
									value: {
										showFrequencyPopover: _,
										dismissPopover: function () {
											m(!1);
										},
										setRoute: p,
										route: f,
										frequency: w,
										country: A,
										setCountry: L,
										currency: v,
										setCurrency: O,
										donationAmount: h,
										setDonationAmount: y,
										hideWidget: t
									}
								},
								Object(ee.g)(
									'div',
									{
										className: br,
										onClick: function (e) {
											e.target === e.currentTarget && t();
										}
									},
									Object(ee.g)(
										'form',
										{
											className: vr,
											onSubmit: function (e) {
												if ((e.preventDefault(), h))
													if (h < v.minimumAmount)
														T(
															E.minDonationAmount +
																' ' +
																v.name +
																' ' +
																v.minimumAmount
														);
													else {
														var n = re({
															nonprofitSlug: A.id,
															frequency: w,
															amount: h,
															crypto: !1
														});
														window.open(n, '_self');
													}
												else T(E.chooseAnAmount);
											}
										},
										!S && Object(ee.g)(Ce, {positionCss: xr, color: $e.White}),
										f === Ye.DonationForm
											? Object(ee.g)(
													ee.b,
													null,
													Object(ee.g)(
														'div',
														{ref: R, className: Sr},
														Object(ee.g)(Jt, {showScrolled: S, classes: [jr]}),
														Object(ee.g)(
															'div',
															{className: Or},
															Object(ee.g)(
																Bn,
																{label: E.frequency},
																Object(ee.g)(Nt, {
																	frequency: w,
																	setFrequency: k
																})
															),
															Object(ee.g)(
																Bn,
																{label: E.amount},
																Object(ee.g)($t, {
																	selectedCurrency: v,
																	setCurrency: O,
																	value: h,
																	setValue: y,
																	error: P,
																	setError: T,
																	setCountry: L
																})
															),
															c.countrySelection
																? Object(ee.g)(Bn, {label: E.countryTitle}, Nr)
																: Ar
														),
														Object(ee.g)(tr, {classes: [wr]}),
														Object(ee.g)(In, {classes: [kr]})
													),
													Object(ee.g)(
														'div',
														{className: Cr},
														Object(ee.g)(
															cr,
															{
																disabled:
																	w === at.Unselected || !h || Number.isNaN(h)
															},
															(function (e, n, t, r) {
																if ('' === t) return r.frequencySelect;
																if (!e) return r.chooseAnAmount;
																if (Number.isNaN(e)) return r.amountError;
																var o = r.donate + ' ' + n.symbol + e;
																return (
																	t === at.Monthly &&
																		(o = o.concat(' ' + r.monthly)),
																	o
																);
															})(h, v, w, E)
														)
													)
											  )
											: f === Ye.SelectCountry
											? Lr
											: Dr
									)
								)
							)
					  )
					: null;
			},
			Tr = function () {
				var e = document.querySelector('body'),
					n = (function () {
						var e = document.querySelector('body');
						return (
							gr ||
								(gr =
									null != e && e.style.overflow ? e.style.overflow : 'unset'),
							gr
						);
					})();
				e && (e.style.overflow = n);
			},
			Er = function (e) {
				var n,
					t = e.options,
					r = void 0 === t ? {} : t,
					o = e.hide;
				return (
					Tr(),
					r.show
						? ((n = document.querySelector('body')) &&
								(n.style.overflow = 'hidden'),
						  Object(ee.g)(Pr, {options: r, hide: o}))
						: null
				);
			},
			Rr = function (e) {
				var n = e.element,
					t = e.selector,
					r = (function (e, n) {
						if (null == e) return {};
						var t,
							r,
							o = {},
							i = Object.keys(e);
						for (r = 0; r < i.length; r++)
							n.indexOf((t = i[r])) >= 0 || (o[t] = e[t]);
						return o;
					})(e, ['element', 'selector']);
				n || t || Z('createButton():', 'must provide element or selector');
				var o = n || (t && document.querySelector(t));
				if (o) {
					var i = Object(ee.g)(fe, r);
					Object(ee.j)(i, o);
				}
			};
		n.default = Rr;
		((hr = document.createElement('style')).innerHTML =
			'\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Regular-Pro.woff2) format("woff2");\n      font-weight: 400;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Bold-Pro.woff2) format("woff2");\n      font-weight: bold;\n      font-style: normal;\n      font-display: swap;\n    }\n    @font-face {\n      font-family: "Basis Grotesque Pro";\n      src: local("Basis Grotesque Pro"), local("Basis Grotesque Pro"),\n        url(https://assets.every.org/every-month/BasisGrotesque-Medium-Pro.woff2) format("woff2");\n      font-weight: 500;\n      font-style: normal;\n      font-display: swap;\n    }\n    '),
			document.head.append(hr),
			(function (e) {
				(e.BAD_DOMAIN = 'BAD_DOMAIN'),
					(e.NOT_DONATE_ROUTE = 'NOT_DONATE_ROUTE'),
					(e.OTHER = 'OTHER');
			})(yr || (yr = {}));
		var Mr,
			Ir = {show: !1},
			Ur = {},
			Br = function () {
				V(Ir, {show: !0}), Hr();
			},
			qr = function () {
				V(Ir, {show: !1}), Hr();
			},
			Hr = function () {
				var e;
				Mr ||
					((e = document.createElement('div')),
					document.body.append(e),
					(Mr = document.createElement('div')),
					e.append(Mr));
				var n = V({}, Ir, Ur);
				Object(ee.j)(Object(ee.g)(Er, {options: n, hide: qr}), Mr);
			};
		window.everyDotOrgDonateButton = {
			createButton: Rr,
			initButtons: function () {
				for (
					var e,
						n = Y(
							document.querySelectorAll('.edo-donate-btn:not([data-edo-init])')
						);
					!(e = n()).done;

				) {
					var t = e.value,
						r = t.querySelector('a');
					if (r) {
						var o = r.getAttribute('href');
						if (o) {
							var i = J(o);
							if ('errorType' in i)
								Z('could not extract options from link', {
									buttonLink: r,
									errorData: i
								});
							else {
								var a = Object(ee.g)(fe, i);
								Object(ee.j)(a, t, r), t.setAttribute('data-edo-init', '');
							}
						} else Z('link lacks href', r);
					} else Z('no link in container', t);
				}
			},
			showWidget: Br,
			setOptions: function (e) {
				V(Ur, e), Hr();
			},
			createWidget: function (e) {
				var n = e.element,
					t = e.selector,
					r = e.options;
				n || t || Z('createWidget():', 'must provide element or selector');
				var o = n || (t && document.querySelector(t));
				o &&
					(o.addEventListener('click', function (e) {
						e.preventDefault(), (Ur = V({}, r)), Br();
					}),
					Hr());
			}
		};
	},
	'5zHJ': function (e) {
		'use strict';
		var n = {},
			t = 'x',
			r = [],
			o = function (e) {
				return r.push(e);
			},
			i = function (e, n) {
				return n ? n + '{' + e + '}' : e;
			},
			a = function (e, n, t) {
				return (
					'.' +
					e +
					'{' +
					(n.replace(/[A-Z]|^ms/g, '-$&').toLowerCase() + ':') +
					t +
					'}'
				);
			},
			c = function (e) {
				return e.replace(/&/g, '');
			},
			l = function e(l) {
				var u =
						arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
					s = arguments[2];
				return Object.keys(l)
					.map(function (f) {
						var p = l[f];
						if (null === p) return '';
						if ('object' == typeof p) {
							var d = /^@/.test(f) ? f : null;
							return e(p, d ? u : u + f, d || s);
						}
						var _ = f + p + u + s;
						if (n[_]) return n[_];
						var m = t + r.length.toString(36);
						return o(i(a(m + c(u), f, p), s)), (n[_] = m), m;
					})
					.join(' ');
			};
		if (
			((e.exports = function () {
				for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
					n[t] = arguments[t];
				return n
					.map(function (e) {
						return l(e);
					})
					.join(' ')
					.trim();
			}),
			(e.exports.css = function () {
				return r.sort().join('');
			}),
			(e.exports.reset = function () {
				for (n = {}; r.length; ) r.pop();
			}),
			(e.exports.prefix = function (e) {
				return (t = e);
			}),
			'undefined' != typeof document)
		) {
			var u = document.head.appendChild(document.createElement('style')).sheet;
			o = function (e) {
				r.push(e), u.insertRule(e, u.cssRules.length);
			};
		}
	},
	NMMh: function (e, n, t) {
		'use strict';
		function r(e, n) {
			for (var t in n) e[t] = n[t];
			return e;
		}
		function o(e) {
			var n = e.parentNode;
			n && n.removeChild(e);
		}
		function i(e, n, t) {
			var r,
				o,
				i,
				c = arguments,
				l = {};
			for (i in n)
				'key' == i ? (r = n[i]) : 'ref' == i ? (o = n[i]) : (l[i] = n[i]);
			if (arguments.length > 3)
				for (t = [t], i = 3; i < arguments.length; i++) t.push(c[i]);
			if (
				(null != t && (l.children = t),
				'function' == typeof e && null != e.defaultProps)
			)
				for (i in e.defaultProps) void 0 === l[i] && (l[i] = e.defaultProps[i]);
			return a(e, l, r, o, null);
		}
		function a(e, n, t, r, o) {
			var i = {
				type: e,
				props: n,
				key: t,
				ref: r,
				__k: null,
				__: null,
				__b: 0,
				__e: null,
				__d: void 0,
				__c: null,
				__h: null,
				constructor: void 0,
				__v: null == o ? ++P.__v : o
			};
			return null != P.vnode && P.vnode(i), i;
		}
		function c() {
			return {current: null};
		}
		function l(e) {
			return e.children;
		}
		function u(e, n) {
			(this.props = e), (this.context = n);
		}
		function s(e, n) {
			if (null == n) return e.__ ? s(e.__, e.__.__k.indexOf(e) + 1) : null;
			for (var t; n < e.__k.length; n++)
				if (null != (t = e.__k[n]) && null != t.__e) return t.__e;
			return 'function' == typeof e.type ? s(e) : null;
		}
		function f(e) {
			var n, t;
			if (null != (e = e.__) && null != e.__c) {
				for (e.__e = e.__c.base = null, n = 0; n < e.__k.length; n++)
					if (null != (t = e.__k[n]) && null != t.__e) {
						e.__e = e.__c.base = t.__e;
						break;
					}
				return f(e);
			}
		}
		function p(e) {
			((!e.__d && (e.__d = !0) && T.push(e) && !d.__r++) ||
				R !== P.debounceRendering) &&
				((R = P.debounceRendering) || E)(d);
		}
		function d() {
			for (var e; (d.__r = T.length); )
				(e = T.sort(function (e, n) {
					return e.__v.__b - n.__v.__b;
				})),
					(T = []),
					e.some(function (e) {
						var n, t, o, i, a, c;
						e.__d &&
							((a = (i = (n = e).__v).__e),
							(c = n.__P) &&
								((t = []),
								((o = r({}, i)).__v = i.__v + 1),
								j(
									c,
									i,
									o,
									n.__n,
									void 0 !== c.ownerSVGElement,
									null != i.__h ? [a] : null,
									t,
									null == a ? s(i) : a,
									i.__h
								),
								w(t, i),
								i.__e != a && f(i)));
					});
		}
		function _(e, n, t, r, o, i, c, u, f, p) {
			var d,
				_,
				g,
				y,
				b,
				v,
				O,
				w = (r && r.__k) || U,
				k = w.length;
			for (t.__k = [], d = 0; d < n.length; d++)
				if (
					null !=
					(y = t.__k[d] =
						null == (y = n[d]) || 'boolean' == typeof y
							? null
							: 'string' == typeof y || 'number' == typeof y
							? a(null, y, null, null, y)
							: Array.isArray(y)
							? a(l, {children: y}, null, null, null)
							: y.__b > 0
							? a(y.type, y.props, y.key, null, y.__v)
							: y)
				) {
					if (
						((y.__ = t),
						(y.__b = t.__b + 1),
						null === (g = w[d]) || (g && y.key == g.key && y.type === g.type))
					)
						w[d] = void 0;
					else
						for (_ = 0; _ < k; _++) {
							if ((g = w[_]) && y.key == g.key && y.type === g.type) {
								w[_] = void 0;
								break;
							}
							g = null;
						}
					j(e, y, (g = g || I), o, i, c, u, f, p),
						(b = y.__e),
						(_ = y.ref) &&
							g.ref != _ &&
							(O || (O = []),
							g.ref && O.push(g.ref, null, y),
							O.push(_, y.__c || b, y)),
						null != b
							? (null == v && (v = b),
							  'function' == typeof y.type && null != y.__k && y.__k === g.__k
									? (y.__d = f = m(y, f, e))
									: (f = h(e, y, g, w, b, f)),
							  p || 'option' !== t.type
									? 'function' == typeof t.type && (t.__d = f)
									: (e.value = ''))
							: f && g.__e == f && f.parentNode != e && (f = s(g));
				}
			for (t.__e = v, d = k; d--; )
				null != w[d] &&
					('function' == typeof t.type &&
						null != w[d].__e &&
						w[d].__e == t.__d &&
						(t.__d = s(r, d + 1)),
					S(w[d], w[d]));
			if (O) for (d = 0; d < O.length; d++) C(O[d], O[++d], O[++d]);
		}
		function m(e, n, t) {
			var r, o;
			for (r = 0; r < e.__k.length; r++)
				(o = e.__k[r]) &&
					((o.__ = e),
					(n =
						'function' == typeof o.type
							? m(o, n, t)
							: h(t, o, o, e.__k, o.__e, n)));
			return n;
		}
		function g(e, n) {
			return (
				(n = n || []),
				null == e ||
					'boolean' == typeof e ||
					(Array.isArray(e)
						? e.some(function (e) {
								g(e, n);
						  })
						: n.push(e)),
				n
			);
		}
		function h(e, n, t, r, o, i) {
			var a, c, l;
			if (void 0 !== n.__d) (a = n.__d), (n.__d = void 0);
			else if (null == t || o != i || null == o.parentNode)
				e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null);
				else {
					for (c = i, l = 0; (c = c.nextSibling) && l < r.length; l += 2)
						if (c == o) break e;
					e.insertBefore(o, i), (a = i);
				}
			return void 0 !== a ? a : o.nextSibling;
		}
		function y(e, n, t) {
			'-' === n[0]
				? e.setProperty(n, t)
				: (e[n] =
						null == t ? '' : 'number' != typeof t || B.test(n) ? t : t + 'px');
		}
		function b(e, n, t, r, o) {
			var i;
			e: if ('style' === n)
				if ('string' == typeof t) e.style.cssText = t;
				else {
					if (('string' == typeof r && (e.style.cssText = r = ''), r))
						for (n in r) (t && n in t) || y(e.style, n, '');
					if (t) for (n in t) (r && t[n] === r[n]) || y(e.style, n, t[n]);
				}
			else if ('o' === n[0] && 'n' === n[1])
				(i = n !== (n = n.replace(/Capture$/, ''))),
					(n = n.toLowerCase() in e ? n.toLowerCase().slice(2) : n.slice(2)),
					e.l || (e.l = {}),
					(e.l[n + i] = t),
					t
						? r || e.addEventListener(n, i ? O : v, i)
						: e.removeEventListener(n, i ? O : v, i);
			else if ('dangerouslySetInnerHTML' !== n) {
				if (o) n = n.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
				else if (
					'href' !== n &&
					'list' !== n &&
					'form' !== n &&
					'download' !== n &&
					n in e
				)
					try {
						e[n] = null == t ? '' : t;
						break e;
					} catch (e) {}
				'function' == typeof t ||
					(null != t && (!1 !== t || ('a' === n[0] && 'r' === n[1]))
						? e.setAttribute(n, t)
						: e.removeAttribute(n));
			}
		}
		function v(e) {
			this.l[e.type + !1](P.event ? P.event(e) : e);
		}
		function O(e) {
			this.l[e.type + !0](P.event ? P.event(e) : e);
		}
		function j(e, n, t, o, i, a, c, s, f) {
			var p,
				d,
				m,
				g,
				h,
				y,
				b,
				v,
				O,
				j,
				w,
				C = n.type;
			if (void 0 !== n.constructor) return null;
			null != t.__h &&
				((f = t.__h), (s = n.__e = t.__e), (n.__h = null), (a = [s])),
				(p = P.__b) && p(n);
			try {
				e: if ('function' == typeof C) {
					if (
						((v = n.props),
						(O = (p = C.contextType) && o[p.__c]),
						(j = p ? (O ? O.props.value : p.__) : o),
						t.__c
							? (b = (d = n.__c = t.__c).__ = d.__E)
							: ('prototype' in C && C.prototype.render
									? (n.__c = d = new C(v, j))
									: ((n.__c = d = new u(v, j)),
									  (d.constructor = C),
									  (d.render = x)),
							  O && O.sub(d),
							  (d.props = v),
							  d.state || (d.state = {}),
							  (d.context = j),
							  (d.__n = o),
							  (m = d.__d = !0),
							  (d.__h = [])),
						null == d.__s && (d.__s = d.state),
						null != C.getDerivedStateFromProps &&
							(d.__s == d.state && (d.__s = r({}, d.__s)),
							r(d.__s, C.getDerivedStateFromProps(v, d.__s))),
						(g = d.props),
						(h = d.state),
						m)
					)
						null == C.getDerivedStateFromProps &&
							null != d.componentWillMount &&
							d.componentWillMount(),
							null != d.componentDidMount && d.__h.push(d.componentDidMount);
					else {
						if (
							(null == C.getDerivedStateFromProps &&
								v !== g &&
								null != d.componentWillReceiveProps &&
								d.componentWillReceiveProps(v, j),
							(!d.__e &&
								null != d.shouldComponentUpdate &&
								!1 === d.shouldComponentUpdate(v, d.__s, j)) ||
								n.__v === t.__v)
						) {
							(d.props = v),
								(d.state = d.__s),
								n.__v !== t.__v && (d.__d = !1),
								(d.__v = n),
								(n.__e = t.__e),
								(n.__k = t.__k),
								d.__h.length && c.push(d);
							break e;
						}
						null != d.componentWillUpdate && d.componentWillUpdate(v, d.__s, j),
							null != d.componentDidUpdate &&
								d.__h.push(function () {
									d.componentDidUpdate(g, h, y);
								});
					}
					(d.context = j),
						(d.props = v),
						(d.state = d.__s),
						(p = P.__r) && p(n),
						(d.__d = !1),
						(d.__v = n),
						(d.__P = e),
						(p = d.render(d.props, d.state, d.context)),
						(d.state = d.__s),
						null != d.getChildContext && (o = r(r({}, o), d.getChildContext())),
						m ||
							null == d.getSnapshotBeforeUpdate ||
							(y = d.getSnapshotBeforeUpdate(g, h)),
						(w =
							null != p && p.type === l && null == p.key
								? p.props.children
								: p),
						_(e, Array.isArray(w) ? w : [w], n, t, o, i, a, c, s, f),
						(d.base = n.__e),
						(n.__h = null),
						d.__h.length && c.push(d),
						b && (d.__E = d.__ = null),
						(d.__e = !1);
				} else
					null == a && n.__v === t.__v
						? ((n.__k = t.__k), (n.__e = t.__e))
						: (n.__e = k(t.__e, n, t, o, i, a, c, f));
				(p = P.diffed) && p(n);
			} catch (e) {
				(n.__v = null),
					(f || null != a) &&
						((n.__e = s), (n.__h = !!f), (a[a.indexOf(s)] = null)),
					P.__e(e, n, t);
			}
		}
		function w(e, n) {
			P.__c && P.__c(n, e),
				e.some(function (n) {
					try {
						(e = n.__h),
							(n.__h = []),
							e.some(function (e) {
								e.call(n);
							});
					} catch (e) {
						P.__e(e, n.__v);
					}
				});
		}
		function k(e, n, t, r, i, a, c, l) {
			var u,
				s,
				f,
				p,
				d = t.props,
				m = n.props,
				g = n.type,
				h = 0;
			if (('svg' === g && (i = !0), null != a))
				for (; h < a.length; h++)
					if (
						(u = a[h]) &&
						(u === e || (g ? u.localName == g : 3 == u.nodeType))
					) {
						(e = u), (a[h] = null);
						break;
					}
			if (null == e) {
				if (null === g) return document.createTextNode(m);
				(e = i
					? document.createElementNS('http://www.w3.org/2000/svg', g)
					: document.createElement(g, m.is && m)),
					(a = null),
					(l = !1);
			}
			if (null === g) d === m || (l && e.data === m) || (e.data = m);
			else {
				if (
					((a = a && U.slice.call(e.childNodes)),
					(s = (d = t.props || I).dangerouslySetInnerHTML),
					(f = m.dangerouslySetInnerHTML),
					!l)
				) {
					if (null != a)
						for (d = {}, p = 0; p < e.attributes.length; p++)
							d[e.attributes[p].name] = e.attributes[p].value;
					(f || s) &&
						((f && ((s && f.__html == s.__html) || f.__html === e.innerHTML)) ||
							(e.innerHTML = (f && f.__html) || ''));
				}
				if (
					((function (e, n, t, r, o) {
						var i;
						for (i in t)
							'children' === i ||
								'key' === i ||
								i in n ||
								b(e, i, null, t[i], r);
						for (i in n)
							(o && 'function' != typeof n[i]) ||
								'children' === i ||
								'key' === i ||
								'value' === i ||
								'checked' === i ||
								t[i] === n[i] ||
								b(e, i, n[i], t[i], r);
					})(e, m, d, i, l),
					f)
				)
					n.__k = [];
				else if (
					((h = n.props.children),
					_(
						e,
						Array.isArray(h) ? h : [h],
						n,
						t,
						r,
						i && 'foreignObject' !== g,
						a,
						c,
						e.firstChild,
						l
					),
					null != a)
				)
					for (h = a.length; h--; ) null != a[h] && o(a[h]);
				l ||
					('value' in m &&
						void 0 !== (h = m.value) &&
						(h !== e.value || ('progress' === g && !h)) &&
						b(e, 'value', h, d.value, !1),
					'checked' in m &&
						void 0 !== (h = m.checked) &&
						h !== e.checked &&
						b(e, 'checked', h, d.checked, !1));
			}
			return e;
		}
		function C(e, n, t) {
			try {
				'function' == typeof e ? e(n) : (e.current = n);
			} catch (e) {
				P.__e(e, t);
			}
		}
		function S(e, n, t) {
			var r, i, a;
			if (
				(P.unmount && P.unmount(e),
				(r = e.ref) && ((r.current && r.current !== e.__e) || C(r, null, n)),
				t || 'function' == typeof e.type || (t = null != (i = e.__e)),
				(e.__e = e.__d = void 0),
				null != (r = e.__c))
			) {
				if (r.componentWillUnmount)
					try {
						r.componentWillUnmount();
					} catch (e) {
						P.__e(e, n);
					}
				r.base = r.__P = null;
			}
			if ((r = e.__k)) for (a = 0; a < r.length; a++) r[a] && S(r[a], n, t);
			null != i && o(i);
		}
		function x(e, n, t) {
			return this.constructor(e, t);
		}
		function N(e, n, t) {
			var r, o, a;
			P.__ && P.__(e, n),
				(o = (r = 'function' == typeof t) ? null : (t && t.__k) || n.__k),
				(a = []),
				j(
					n,
					(e = ((!r && t) || n).__k = i(l, null, [e])),
					o || I,
					I,
					void 0 !== n.ownerSVGElement,
					!r && t
						? [t]
						: o
						? null
						: n.firstChild
						? U.slice.call(n.childNodes)
						: null,
					a,
					!r && t ? t : o ? o.__e : n.firstChild,
					r
				),
				w(a, e);
		}
		function A(e, n) {
			N(e, n, A);
		}
		function L(e, n, t) {
			var o,
				i,
				c,
				l = arguments,
				u = r({}, e.props);
			for (c in n)
				'key' == c ? (o = n[c]) : 'ref' == c ? (i = n[c]) : (u[c] = n[c]);
			if (arguments.length > 3)
				for (t = [t], c = 3; c < arguments.length; c++) t.push(l[c]);
			return (
				null != t && (u.children = t),
				a(e.type, u, o || e.key, i || e.ref, null)
			);
		}
		function D(e, n) {
			var t = {
				__c: (n = '__cC' + M++),
				__: e,
				Consumer: function (e, n) {
					return e.children(n);
				},
				Provider: function (e) {
					var t, r;
					return (
						this.getChildContext ||
							((t = []),
							((r = {})[n] = this),
							(this.getChildContext = function () {
								return r;
							}),
							(this.shouldComponentUpdate = function (e) {
								this.props.value !== e.value && t.some(p);
							}),
							(this.sub = function (e) {
								t.push(e);
								var n = e.componentWillUnmount;
								e.componentWillUnmount = function () {
									t.splice(t.indexOf(e), 1), n && n.call(e);
								};
							})),
						e.children
					);
				}
			};
			return (t.Provider.__ = t.Consumer.contextType = t);
		}
		t.d(n, 'j', function () {
			return N;
		}),
			t.d(n, 'h', function () {
				return A;
			}),
			t.d(n, 'e', function () {
				return i;
			}),
			t.d(n, 'g', function () {
				return i;
			}),
			t.d(n, 'b', function () {
				return l;
			}),
			t.d(n, 'f', function () {
				return c;
			}),
			t.d(n, 'a', function () {
				return u;
			}),
			t.d(n, 'c', function () {
				return L;
			}),
			t.d(n, 'd', function () {
				return D;
			}),
			t.d(n, 'k', function () {
				return g;
			}),
			t.d(n, 'i', function () {
				return P;
			});
		var P,
			T,
			E,
			R,
			M,
			I = {},
			U = [],
			B = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
		(P = {
			__e: function (e, n) {
				for (var t, r, o; (n = n.__); )
					if ((t = n.__c) && !t.__)
						try {
							if (
								((r = t.constructor) &&
									null != r.getDerivedStateFromError &&
									(t.setState(r.getDerivedStateFromError(e)), (o = t.__d)),
								null != t.componentDidCatch &&
									(t.componentDidCatch(e), (o = t.__d)),
								o)
							)
								return (t.__E = t);
						} catch (n) {
							e = n;
						}
				throw e;
			},
			__v: 0
		}),
			(u.prototype.setState = function (e, n) {
				var t;
				(t =
					null != this.__s && this.__s !== this.state
						? this.__s
						: (this.__s = r({}, this.state))),
					'function' == typeof e && (e = e(r({}, t), this.props)),
					e && r(t, e),
					null != e && this.__v && (n && this.__h.push(n), p(this));
			}),
			(u.prototype.forceUpdate = function (e) {
				this.__v && ((this.__e = !0), e && this.__h.push(e), p(this));
			}),
			(u.prototype.render = l),
			(T = []),
			(E =
				'function' == typeof Promise
					? Promise.prototype.then.bind(Promise.resolve())
					: setTimeout),
			(d.__r = 0),
			(M = 0);
	},
	nr9d: function (e) {
		'use strict';
		function n(e) {
			var n = Object.prototype.toString.call(e);
			return (
				'[object RegExp]' === n ||
				'[object Date]' === n ||
				(function (e) {
					return e.$$typeof === u;
				})(e)
			);
		}
		function t(e, n) {
			return !1 !== n.clone && n.isMergeableObject(e)
				? c(Array.isArray(e) ? [] : {}, e, n)
				: e;
		}
		function r(e, n, r) {
			return e.concat(n).map(function (e) {
				return t(e, r);
			});
		}
		function o(e) {
			return Object.keys(e).concat(
				(function (e) {
					return Object.getOwnPropertySymbols
						? Object.getOwnPropertySymbols(e).filter(function (n) {
								return e.propertyIsEnumerable(n);
						  })
						: [];
				})(e)
			);
		}
		function i(e, n) {
			try {
				return n in e;
			} catch (e) {
				return !1;
			}
		}
		function a(e, n, r) {
			var a = {};
			return (
				r.isMergeableObject(e) &&
					o(e).forEach(function (n) {
						a[n] = t(e[n], r);
					}),
				o(n).forEach(function (o) {
					(function (e, n) {
						return (
							i(e, n) &&
							!(
								Object.hasOwnProperty.call(e, n) &&
								Object.propertyIsEnumerable.call(e, n)
							)
						);
					})(e, o) ||
						(a[o] =
							i(e, o) && r.isMergeableObject(n[o])
								? (function (e, n) {
										if (!n.customMerge) return c;
										var t = n.customMerge(e);
										return 'function' == typeof t ? t : c;
								  })(o, r)(e[o], n[o], r)
								: t(n[o], r));
				}),
				a
			);
		}
		function c(e, n, o) {
			((o = o || {}).arrayMerge = o.arrayMerge || r),
				(o.isMergeableObject = o.isMergeableObject || l),
				(o.cloneUnlessOtherwiseSpecified = t);
			var i = Array.isArray(n);
			return i === Array.isArray(e)
				? i
					? o.arrayMerge(e, n, o)
					: a(e, n, o)
				: t(n, o);
		}
		var l = function (e) {
				return (
					(function (e) {
						return !!e && 'object' == typeof e;
					})(e) && !n(e)
				);
			},
			u =
				'function' == typeof Symbol && Symbol.for
					? Symbol.for('react.element')
					: 60103;
		(c.all = function (e, n) {
			if (!Array.isArray(e))
				throw new Error('first argument should be an array');
			return e.reduce(function (e, t) {
				return c(e, t, n);
			}, {});
		}),
			(e.exports = c);
	},
	riXW: function (e, n, t) {
		'use strict';
		t.r(n);
		var r = t('NMMh'),
			o = r.g,
			i = r.j,
			a = function (e) {
				return e && e.default ? e.default : e;
			};
		if ('function' == typeof a(t('/hs+'))) {
			var c =
				document.getElementById('preact_root') ||
				document.body.firstElementChild;
			0,
				(function () {
					var e = a(t('/hs+')),
						n = {},
						r = document.querySelector('[type="__PREACT_CLI_DATA__"]');
					r && (n = JSON.parse(decodeURI(r.innerHTML)).preRenderData || n);
					var l;
					n.url && (l = n.url);
					c = i(o(e, {CLI_DATA: {preRenderData: n}}), document.body, c);
				})();
		}
	}
});
// # sourceMappingURL=index.js.map
