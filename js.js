const movimiento2 = () => {
	const $ufo = document.getElementById('ufo')

	  $ufo.addEventListener('animationend',(ev) => {
	  		if(ev.animationName === 'ufo')
	  		{
	  			$ufo.style.animationName 	   = 'otherDirections'
	  			$ufo.style.animationDuration   = '2s'
	  		}
	  }) 
}

const shipHop = () => {
	const $obeja = document.getElementById('obeja')
	
	$obeja.addEventListener('animationend',(ev) => {
		if(ev.animationName === 'moving')
		{
			$obeja.style.animationName 	   = 'shipHop, hop'
			$obeja.style.animationIterationCount = '1,8'
			$obeja.style.animationTimingFunction = 'steps(1),ease-out'
	  		$obeja.style.animationDuration   = '.2s,.6s'
	  		$obeja.style.animationDirection = 'normal, alternate'
	  		$obeja.style.animationFillMode = 'forwards'
		}
	})

}

const raptar = () => {
	const $luz   = document.getElementById('luz')
	const $obeja = document.getElementById('obeja')

	$obeja.addEventListener('animationend',(ev) => {
		if(ev.animationName === 'hop')
		{
			$luz.style.display   = 'inline'
			$luz.style.position  = 'absolute'
			$luz.style.left      = '0px'
			$luz.style.top       = '53px'
			$luz.style.fontSize  = '11rem'
			$luz.style.transform = 'rotate(180deg)'
			$luz.style.width     = '165px'
			$luz.style.height    = '241px'
			$luz.style.backgroundColor = 'yellow'
			$luz.style.opacity   = '0.3'
			$luz.style.borderRadius = '26%'     

			$luz.style.animationName   = 'raptar'
			$luz.style.animationIterationCount = '1'
			$luz.style.animationTimingFunction = 'easy-out'
			$luz.style.animationDuration = '2s'

		}
	})
}

const elevar = () => {
	const $luz   = document.getElementById('luz')
	const $obeja = document.getElementById('obeja')
	$luz.addEventListener('animationend',(ev) => {
		if(ev.animationName === 'raptar')
		{
			$obeja.style.animationName 	   = 'elevar'
			$obeja.style.animationIterationCount = '1'
			$obeja.style.animationTimingFunction = 'ease-out'
	  		$obeja.style.animationDuration   = '2s'
		}
	})
}

const goOut = () => {
	const $obeja = document.getElementById('obeja')
	const $luz   = document.getElementById('luz')
	$obeja.addEventListener('animationend',(ev) => {
   	 	if(ev.animationName === 'elevar')
   	 	{
   	 		$luz.style.animationName = 'elevarOut'
   	 		$luz.style.animationIterationCount = '1'
   	 		$luz.style.animationTimingFunction = 'ease-out'
   	 		$luz.style.animationDuration = '1.5s'
   	 		$luz.style.animationFillMode = 'forwards'
   	 	}

	})
}

const goUfoOut = () => {
	const $luz   = document.getElementById('luz')
	const $ufo = document.getElementById('ufo')

	$luz.addEventListener('animationend',(ev) => {
		if(ev.animationName === 'elevarOut')
		{
			$ufo.style.animationName = 'goOut'
			$ufo.style.display = '3s'
			$ufo.style.animationIterationCount = '1'
			$ufo.style.animationTimingFunction = 'ease-out'
			$ufo.style.animationDuration = '2s'
		}
	})
}

movimiento2()
shipHop()
raptar()
elevar()
goOut()
goUfoOut()