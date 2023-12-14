/**
 * WordPress dependencies
 */
import { useInstanceId } from '@wordpress/compose';
/**
 * Internal dependencies
 */
import type { UnitControlProps } from '../unit-control/types';
import { FlexedRangeControl } from './styles/box-control-styles';
import { HStack } from '../h-stack';
import type { BoxControlInputControlProps } from './types';
import UnitControl from './unit-control';
import {
	LABELS,
	applyValueToSides,
	getAllValue,
	isValuesMixed,
	isValuesDefined,
	CUSTOM_VALUE_SETTINGS,
} from './utils';
import { parseQuantityAndUnitFromRawValue } from '../unit-control';

const noop = () => {};

export default function AllInputControl( {
	onChange = noop,
	onFocus = noop,
	onHoverOn = noop,
	onHoverOff = noop,
	values,
	sides,
	selectedUnits,
	setSelectedUnits,
	...props
}: BoxControlInputControlProps ) {
	const inputId = useInstanceId( AllInputControl, 'box-control-input' );
	const allValue = getAllValue( values, selectedUnits, sides );
	const hasValues = isValuesDefined( values );
	const isMixed = hasValues && isValuesMixed( values, selectedUnits, sides );
	const allPlaceholder = isMixed ? LABELS.mixed : undefined;

	const [ parsedQuantity, parsedUnit ] =
		parseQuantityAndUnitFromRawValue( allValue );

	const handleOnFocus: React.FocusEventHandler< HTMLInputElement > = (
		event
	) => {
		onFocus( event, { side: 'all' } );
	};

	const onValueChange = ( next?: string ) => {
		const isNumeric = next !== undefined && ! isNaN( parseFloat( next ) );
		const nextValue = isNumeric ? next : undefined;
		const nextValues = applyValueToSides( values, nextValue, sides );

		onChange( nextValues );
	};

	const unitControlOnChange: UnitControlProps[ 'onChange' ] = ( next ) => {
		onValueChange( next );
	};

	const sliderOnChange = ( next?: number ) => {
		onValueChange(
			next !== undefined ? [ next, parsedUnit ].join( '' ) : undefined
		);
	};

	// Set selected unit so it can be used as fallback by unlinked controls
	// when individual sides do not have a value containing a unit.
	const handleOnUnitChange: UnitControlProps[ 'onUnitChange' ] = ( unit ) => {
		const newUnits = applyValueToSides( selectedUnits, unit, sides );
		setSelectedUnits( newUnits );
	};

	const handleOnHoverOn = () => {
		onHoverOn( {
			top: true,
			bottom: true,
			left: true,
			right: true,
		} );
	};

	const handleOnHoverOff = () => {
		onHoverOff( {
			top: false,
			bottom: false,
			left: false,
			right: false,
		} );
	};

	return (
		<HStack>
			<UnitControl
				{ ...props }
				disableUnits={ isMixed }
				id={ inputId }
				isOnly
				value={ parsedQuantity }
				onChange={ unitControlOnChange }
				onUnitChange={ handleOnUnitChange }
				onFocus={ handleOnFocus }
				onHoverOn={ handleOnHoverOn }
				onHoverOff={ handleOnHoverOff }
				placeholder={ allPlaceholder }
			/>

			<FlexedRangeControl
				__nextHasNoMarginBottom
				aria-controls={ inputId }
				aria-labelledby={ inputId }
				hideLabelFromVision
				label={ LABELS.all }
				onChange={ sliderOnChange }
				min={ 0 }
				max={ CUSTOM_VALUE_SETTINGS[ parsedUnit ?? 'px' ]?.max ?? 10 }
				step={
					CUSTOM_VALUE_SETTINGS[ parsedUnit ?? 'px' ]?.steps ?? 0.1
				}
				value={ parsedQuantity ?? 0 }
				withInputField={ false }
			/>
		</HStack>
	);
}
