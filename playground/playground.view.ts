namespace $.$$ {
	
	export class $zede_playground_color_output extends $.$zede_playground_color_output {
		transformByPrecision(number: number, precision: number = 3) {
			const value = 10 ** precision;
			return Math.floor(number * value) / value;
		}
		
		@ $mol_mem
		formatted() {
			const hue = this.transformByPrecision(this.color().h);
			const saturation = this.transformByPrecision(this.color().s * 100, 0);
			const lightness = this.transformByPrecision(this.color().l * 100, 0);
			const alpha = this.transformByPrecision(this.color().a);
			return `hsla(${hue}turn,${saturation}%,${lightness}%,${alpha})`;
		}

	}

}
