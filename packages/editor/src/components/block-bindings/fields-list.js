/**
 * WordPress dependencies
 */
import { updateBlockBindingsAttribute } from '@wordpress/block-editor';
import { MenuItem, MenuGroup } from '@wordpress/components';

export default function BlockBindingsFieldsList( props ) {
	const {
		attributes,
		setAttributes,
		setIsActiveAttribute,
		currentAttribute,
		fields,
		source,
		setAddingBinding,
	} = props;

	// TODO: Try to abstract this function to be reused across all the sources.
	function selectItem( item ) {
		// Modify the attribute we are binding.
		// TODO: Inherit the value from the bindings instead of setting it manually.
		const newAttributes = {};
		newAttributes[ currentAttribute ] = item.value ? item.value : '';
		// TODO: Improve the way we manage placeholders.
		newAttributes.placeholder = '{ ' + item.placeholder + ' }';
		setAttributes( newAttributes );

		// Update the bindings property.
		updateBlockBindingsAttribute(
			attributes,
			setAttributes,
			currentAttribute,
			source,
			{ value: item.key }
		);

		setIsActiveAttribute( false );
		setAddingBinding( false );
	}

	return (
		<MenuGroup className="block-bindings-fields-list-ui">
			{ fields.map( ( item ) => (
				<MenuItem
					key={ item.key }
					onClick={ () => selectItem( item ) }
					className={
						attributes.metadata?.bindings?.[ currentAttribute ]
							?.source?.name === source &&
						attributes.metadata?.bindings?.[ currentAttribute ]
							?.source?.attributes?.value === item.key
							? 'selected-meta-field'
							: ''
					}
				>
					{ item.label }
				</MenuItem>
			) ) }
		</MenuGroup>
	);
}
