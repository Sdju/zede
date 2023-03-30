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
		 * 	<= Lighter
		 * 	<= Panel
		 * ```
		 */
		body() {
			return [
				this.Lighter(),
				this.Panel()
			] as readonly any[]
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
		 * Panel $zede_playground_panel
		 * ```
		 */
		@ $mol_mem
		Panel() {
			const obj = new this.$.$zede_playground_panel()
			
			return obj
		}
	}
	
	export class $zede_playground_panel extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
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
		sub() {
			return [
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

