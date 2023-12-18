/**
 * WordPress dependencies
 */
import { privateApis as componentsPrivateApis } from '@wordpress/components';
import { __, _x } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';

/**
 * Internal dependencies
 */
import { unlock } from '../../../lock-unlock';
import { sidebars } from '../settings-sidebar';

const { Tabs } = unlock( componentsPrivateApis );

const SettingsHeader = () => {
	const { documentLabel, isTemplateMode, isPatternMode } = useSelect(
		( select ) => {
			const { getPostTypeLabel, getRenderingMode } =
				select( editorStore );
			const renderingMode = getRenderingMode();
			return {
				// translators: Default label for the Document sidebar tab, not selected.
				documentLabel: getPostTypeLabel() || _x( 'Document', 'noun' ),
				isTemplateMode: renderingMode === 'template-only',
				isPatternMode: renderingMode === 'pattern-only',
			};
		},
		[]
	);

	return (
		<Tabs.TabList>
			<Tabs.Tab tabId={ sidebars.document }>
				{ isTemplateMode && __( 'Template' ) }
				{ isPatternMode && __( 'Pattern' ) }
				{ ! isTemplateMode && ! isPatternMode && documentLabel }
			</Tabs.Tab>
			<Tabs.Tab tabId={ sidebars.block }>
				{ /* translators: Text label for the Block Settings Sidebar tab. */ }
				{ __( 'Block' ) }
			</Tabs.Tab>
		</Tabs.TabList>
	);
};

export default SettingsHeader;
