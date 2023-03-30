namespace $ {
	export class $mol_app_hello extends $mol_view {
		
		/**
		 * ```tree
		 * sub /
		 * 	<= Greeting
		 * 	<= Name
		 * 	<= LastName
		 * ```
		 */
		sub() {
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
		 * Greeting $zede_colorPicker greeting <= greet
		 * ```
		 */
		@ $mol_mem
		Greeting() {
			const obj = new this.$.$zede_colorPicker()
			
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
	
	export class $zede_colorPicker extends $mol_view {
		
		/**
		 * ```tree
		 * sub / <= greeting
		 * ```
		 */
		sub() {
			return [
				this.greeting()
			] as readonly any[]
		}
		
		/**
		 * ```tree
		 * greeting \
		 * ```
		 */
		greeting() {
			return ""
		}
	}
	
}

