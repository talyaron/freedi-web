import React from 'react'

interface Props {
	currentLang: Record<string, string>
}

function RunningBanner({currentLang}:Props) {
	return (
		<ul>
			<li>{currentLang["Consensus reaching technology"]}</li>
			<li>{currentLang["Everybody can evaluate the different options"]}</li>
			<li>{currentLang["Suites for all ages"]}</li>
			<li>{currentLang["Satisfactory solutions"]}</li>
			<li>{currentLang["Deep thought"]}</li>
			<li>{currentLang["Modern technology"]}</li>
			<li>{currentLang["Everybody can write her/his opinion"]}</li>
			<li>{currentLang["Everybody can see multiple perspectives"]}</li>
		</ul>
	)
}

export default RunningBanner