import style from '../../../../assets/stylesheets/index.module.css'
import vase from '../../../../assets/images/vase.ico'
import white_square from '../../../../assets/images/white_square.png'
import React from 'react'

const ArtifactIcon = props => {
	let display
	if (
		props.no !== 'no' &&
		props.listedUnitsThatCanHaveArtifacts.includes(props.unitObject)
	) {
		display =
			<span
				onClick={() => props.updateUnitBeingGivenArtifact(props.unitObject)}
				className={style['vase']}
			>
				<img src={vase} alt="" width={"20"} height={"12"} />
			</span>		
	} else {
		display =
			<span className={style['removed-vase']}>
				<img src={white_square} alt="" width={"20"} height={"20"} />
			</span>
	}
	
	return (
		<span>{display}</span>
	)
}

export default ArtifactIcon