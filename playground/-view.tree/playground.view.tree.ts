namespace $ {
	export class $zede_playground extends $mol_page {
		
		/**
		 * ```tree
		 * title \ Zede tests
		 * ```
		 */
		title() {
			return " Zede tests"
		}
		
		/**
		 * ```tree
		 * tools / <= Lighter
		 * ```
		 */
		tools() {
			return [
				this.Lighter()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * plugins / <= Theme
		 * ```
		 */
		plugins() {
			return [
				this.Theme()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Themes
		 * 	<= Panel2
		 * ```
		 */
		body() {
			return [
				this.Themes(),
				this.Panel2()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Lighter $mol_lights_toggle
		 * ```
		 */
		@ $mol_mem
		Lighter() {
			const obj = new this.$.$mol_lights_toggle()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Theme $mol_theme_auto
		 * ```
		 */
		@ $mol_mem
		Theme() {
			const obj = new this.$.$mol_theme_auto()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color1 $zede_playground_color color \ var(--mol_theme_back)
		 * ```
		 */
		@ $mol_mem
		Color1() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_back)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color2 $zede_playground_color color \ var(--mol_theme_text)
		 * ```
		 */
		@ $mol_mem
		Color2() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_text)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color3 $zede_playground_color color \ var(--mol_theme_field)
		 * ```
		 */
		@ $mol_mem
		Color3() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_field)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color4 $zede_playground_color color \ var(--mol_theme_card)
		 * ```
		 */
		@ $mol_mem
		Color4() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_card)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color5 $zede_playground_color color \ var(--mol_theme_hover)
		 * ```
		 */
		@ $mol_mem
		Color5() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_hover)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color6 $zede_playground_color color \ var(--mol_theme_line)
		 * ```
		 */
		@ $mol_mem
		Color6() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_line)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color7 $zede_playground_color color \ var(--mol_theme_shade)
		 * ```
		 */
		@ $mol_mem
		Color7() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_shade)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color8 $zede_playground_color color \ var(--mol_theme_control)
		 * ```
		 */
		@ $mol_mem
		Color8() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_control)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color9 $zede_playground_color color \ var(--mol_theme_current)
		 * ```
		 */
		@ $mol_mem
		Color9() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_current)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color10 $zede_playground_color color \ var(--mol_theme_special)
		 * ```
		 */
		@ $mol_mem
		Color10() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_special)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Color11 $zede_playground_color color \ var(--mol_theme_focus)
		 * ```
		 */
		@ $mol_mem
		Color11() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => " var(--mol_theme_focus)"
			
			return obj
		}
		
		/**
		 * ```tree
		 * Themes $mol_view sub /
		 * 	<= Color1
		 * 	<= Color2
		 * 	<= Color3
		 * 	<= Color4
		 * 	<= Color5
		 * 	<= Color6
		 * 	<= Color7
		 * 	<= Color8
		 * 	<= Color9
		 * 	<= Color10
		 * 	<= Color11
		 * ```
		 */
		@ $mol_mem
		Themes() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.Color1(),
				this.Color2(),
				this.Color3(),
				this.Color4(),
				this.Color5(),
				this.Color6(),
				this.Color7(),
				this.Color8(),
				this.Color9(),
				this.Color10(),
				this.Color11()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Panel2 $zede_playground_panel
		 * ```
		 */
		@ $mol_mem
		Panel2() {
			const obj = new this.$.$zede_playground_panel()
			
			return obj
		}
	}
	
	export class $zede_playground_panel extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Title
		 * 	<= Hue
		 * 	<= Saturation
		 * 	<= Lightness
		 * 	<= Alpha
		 * ```
		 */
		sub() {
			return [
				this.Title(),
				this.Hue(),
				this.Saturation(),
				this.Lightness(),
				this.Alpha()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * h? 0
		 * ```
		 */
		@ $mol_mem
		h(next?: any) {
			if ( next !== undefined ) return next as never
			return 0
		}
		
		/**
		 * ```tree
		 * s? 0
		 * ```
		 */
		@ $mol_mem
		s(next?: any) {
			if ( next !== undefined ) return next as never
			return 0
		}
		
		/**
		 * ```tree
		 * l? 0
		 * ```
		 */
		@ $mol_mem
		l(next?: any) {
			if ( next !== undefined ) return next as never
			return 0
		}
		
		/**
		 * ```tree
		 * a? 1
		 * ```
		 */
		@ $mol_mem
		a(next?: any) {
			if ( next !== undefined ) return next as never
			return 1
		}
		
		/**
		 * ```tree
		 * color *
		 * 	h <= h?
		 * 	s <= s?
		 * 	l <= l?
		 * 	a <= a?
		 * ```
		 */
		color() {
			return {
				h: this.h(),
				s: this.s(),
				l: this.l(),
				a: this.a()
			}
		}
		
		/**
		 * ```tree
		 * Output $zede_playground_color_output color <= color
		 * ```
		 */
		@ $mol_mem
		Output() {
			const obj = new this.$.$zede_playground_color_output()
			
			obj.color = () => this.color()
			
			return obj
		}
		
		/**
		 * ```tree
		 * Title $mol_view sub / <= Output
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_view()
			
			obj.sub = () => [
				this.Output()
			] as readonly any[]
			
			return obj
		}
		
		/**
		 * ```tree
		 * Hue $zede_playground_number value? <=> h?
		 * ```
		 */
		@ $mol_mem
		Hue() {
			const obj = new this.$.$zede_playground_number()
			
			obj.value = (next?: any) => this.h(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Saturation $zede_playground_number value? <=> s?
		 * ```
		 */
		@ $mol_mem
		Saturation() {
			const obj = new this.$.$zede_playground_number()
			
			obj.value = (next?: any) => this.s(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Lightness $zede_playground_number value? <=> l?
		 * ```
		 */
		@ $mol_mem
		Lightness() {
			const obj = new this.$.$zede_playground_number()
			
			obj.value = (next?: any) => this.l(next)
			
			return obj
		}
		
		/**
		 * ```tree
		 * Alpha $zede_playground_number value? <=> a?
		 * ```
		 */
		@ $mol_mem
		Alpha() {
			const obj = new this.$.$zede_playground_number()
			
			obj.value = (next?: any) => this.a(next)
			
			return obj
		}
	}
	
	export class $zede_playground_number extends $mol_number {
		
		/**
		 * ```tree
		 * value_min 0
		 * ```
		 */
		value_min() {
			return 0
		}
		
		/**
		 * ```tree
		 * value_max 1
		 * ```
		 */
		value_max() {
			return 1
		}
		
		/**
		 * ```tree
		 * precision_change 0.1
		 * ```
		 */
		precision_change() {
			return 0.1
		}
		
		/**
		 * ```tree
		 * precision_view 0.1
		 * ```
		 */
		precision_view() {
			return 0.1
		}
	}
	
	export class $zede_playground_color_output extends $mol_view {
		
		/**
		 * ```tree
		 * color *
		 * 	h 0
		 * 	s 0
		 * 	l 0
		 * 	a 1
		 * ```
		 */
		color() {
			return {
				h: 0,
				s: 0,
				l: 0,
				a: 1
			}
		}
		
		/**
		 * ```tree
		 * sub / <= Color
		 * ```
		 */
		sub() {
			return [
				this.Color()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Color $zede_playground_color color <= formatted
		 * ```
		 */
		@ $mol_mem
		Color() {
			const obj = new this.$.$zede_playground_color()
			
			obj.color = () => this.formatted()
			
			return obj
		}
	}
	
	export class $zede_playground_color extends $mol_view {
		
		/**
		 * ```tree
		 * color \ var(--mol_theme_line)
		 * ```
		 */
		color() {
			return " var(--mol_theme_line)"
		}
		
		/**
		 * ```tree
		 * style * backgroundColor <= color
		 * ```
		 */
		style() {
			return {
				backgroundColor: this.color()
			}
		}
		
		/**
		 * ```tree
		 * sub / <= Title
		 * ```
		 */
		sub() {
			return [
				this.Title()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * Title $mol_paragraph title <= color
		 * ```
		 */
		@ $mol_mem
		Title() {
			const obj = new this.$.$mol_paragraph()
			
			obj.title = () => this.color()
			
			return obj
		}
	}
	
	export class $zede_playground_prev extends $mol_page {
		
		/**
		 * ```tree
		 * title \ Zede tests
		 * ```
		 */
		title() {
			return " Zede tests"
		}
		
		/**
		 * ```tree
		 * body /
		 * 	<= Greeting
		 * 	<= Name
		 * 	<= LastName
		 * ```
		 */
		body() {
			return [
				this.Greeting(),
				this.Name(),
				this.LastName()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * greet \ Test
		 * ```
		 */
		greet() {
			return " Test"
		}
		
		/**
		 * ```tree
		 * Greeting $zede_color_picker greeting <= greet
		 * ```
		 */
		@ $mol_mem
		Greeting() {
			const obj = new this.$.$zede_color_picker()
			
			obj.greeting = () => this.greet()
			
			return obj
		}
		
		/**
		 * ```tree
		 * name_hint \Name
		 * ```
		 */
		name_hint() {
			return "Name"
		}
		
		/**
		 * ```tree
		 * name?val \
		 * ```
		 */
		@ $mol_mem
		name(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * Name $mol_string
		 * 	hint <= name_hint
		 * 	value?val <=> name?val
		 * ```
		 */
		@ $mol_mem
		Name() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => this.name_hint()
			obj.value = (val?: any) => this.name(val)
			
			return obj
		}
		
		/**
		 * ```tree
		 * name_hint2 \LastName
		 * ```
		 */
		name_hint2() {
			return "LastName"
		}
		
		/**
		 * ```tree
		 * lastName?val \
		 * ```
		 */
		@ $mol_mem
		lastName(val?: any) {
			if ( val !== undefined ) return val as never
			return ""
		}
		
		/**
		 * ```tree
		 * LastName $mol_string
		 * 	hint <= name_hint2
		 * 	value?val <=> lastName?val
		 * ```
		 */
		@ $mol_mem
		LastName() {
			const obj = new this.$.$mol_string()
			
			obj.hint = () => this.name_hint2()
			obj.value = (val?: any) => this.lastName(val)
			
			return obj
		}
	}
	
}

