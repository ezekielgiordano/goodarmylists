import style from '../../../../assets/stylesheets/index.module.css'
import React from 'react'

const UnitEntryButton = props => {
	let extraSpace
	if (parseInt(props.unit.points_per_unit) < 100) {
		extraSpace = <span className={style['hidden']}>{'_'}</span>
	}
	let greyedOut = false
	// let i
	// for (i = 0; i < props.greyedOutUnits.length; i++) {
	// 	if (parseInt(props.greyedOutUnits[i].id) === parseInt(props.unit.id)) {
	// 		greyedOut = true
	// 	}
	// }

	let display
	if (greyedOut === false) {
		display =
			<div className={style['unit-entry-button-row']}>
				<div className={style['unit-entry-button-point-value-div']}>
					{extraSpace}
					<span className={style['unit-entry-button-point-value-label-wmr']}>
						{parseInt(props.unit.points_per_unit)}{' '}
					</span>
				</div>
				<div className={style['unit-entry-button-label-div']}>
					<span
						onClick={() => props.addUnitToList(props.unit)}
						className={style['unit-entry-button-label']}
					>
						{props.unit.display_name}
					</span>
				</div>
			</div>		
	} else {
		display =
			<div className={style['unit-entry-button-row']}>
				<div className={style['unit-entry-button-point-value-div-greyed-out']}>
					{extraSpace}
					<span className= {style['unit-entry-button-point-value-label-greyed-out']}>
						{parseInt(props.unit.points_per_unit)}{' '}
					</span>
				</div>
				<div>
					<span className={style['unit-entry-button-label-greyed-out']}>
						{props.unit.display_name}
					</span>
				</div>
			</div>
	}

	return (
		<div className={style['unit-entry-button']}>
			{display}
		</div>
	)
}

export default UnitEntryButton