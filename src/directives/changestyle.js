export default {
	bind(el,binding) {
		if (binding.modifiers.temp == true) {
			setColorTemp(el, binding) 
		}
	},
	update(el,binding) {
		if (binding.modifiers.temp == true) {
			setColorTemp(el, binding) 
		}
	}
}
function setColorTemp(el,binding){
	if (binding.value <= 0 ){
		el.style.color = "#1f2bce";
	}
	else{
		el.style.color = "#ff7400";
	}		
}