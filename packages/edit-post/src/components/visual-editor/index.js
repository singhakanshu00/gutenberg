/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	store as editorStore,
	privateApis as editorPrivateApis,
	POST_TYPE_EDITOR_INTERFACE,
} from '@wordpress/editor';
import { useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as blocksStore } from '@wordpress/blocks';
import { getQueryArg } from '@wordpress/url';
/**
 * Internal dependencies
 */
import { store as editPostStore } from '../../store';
import { unlock } from '../../lock-unlock';

const { EditorCanvas } = unlock( editorPrivateApis );

const isGutenbergPlugin = process.env.IS_GUTENBERG_PLUGIN ? true : false;

export default function VisualEditor( { styles } ) {
	const {
		isWelcomeGuideVisible,
		renderingMode,
		isBlockBasedTheme,
		hasV3BlocksOnly,
		postType,
	} = useSelect( ( select ) => {
		const { isFeatureActive } = select( editPostStore );
		const { getEditorSettings, getRenderingMode, getEditedPostAttribute } =
			select( editorStore );
		const { getBlockTypes } = select( blocksStore );
		const editorSettings = getEditorSettings();

		return {
			isWelcomeGuideVisible: isFeatureActive( 'welcomeGuide' ),
			renderingMode: getRenderingMode(),
			isBlockBasedTheme: editorSettings.__unstableIsBlockBasedTheme,
			hasV3BlocksOnly: getBlockTypes().every( ( type ) => {
				return type.apiVersion >= 3;
			} ),
			postType: getEditedPostAttribute( 'type' ),
		};
	}, [] );
	const hasMetaBoxes = useSelect(
		( select ) => select( editPostStore ).hasMetaBoxes(),
		[]
	);

	const hasSurround =
		POST_TYPE_EDITOR_INTERFACE[ postType ]?.hasSurround &&
		getQueryArg( window.location.href, 'editMode' ) === 'focused';

	let paddingBottom;

	// Add a constant padding for the typewritter effect. When typing at the
	// bottom, there needs to be room to scroll up.
	if ( ! hasMetaBoxes && renderingMode === 'post-only' ) {
		paddingBottom = '40vh';
	}

	styles = useMemo(
		() => [
			...styles,
			{
				// We should move this in to future to the body.
				css: paddingBottom
					? `body{padding-bottom:${ paddingBottom }}`
					: '',
			},
		],
		[ styles, paddingBottom ]
	);

	const isToBeIframed =
		( ( hasV3BlocksOnly || ( isGutenbergPlugin && isBlockBasedTheme ) ) &&
			! hasMetaBoxes ) ||
		renderingMode === 'template-only';

	return (
		<div
			className={ classnames( 'edit-post-visual-editor', {
				'is-template-mode': renderingMode === 'template-only',
				'has-inline-canvas': ! isToBeIframed,
				'has-surround': hasSurround,
			} ) }
		>
			<EditorCanvas
				disableIframe={ ! isToBeIframed }
				styles={ styles }
				// We should auto-focus the canvas (title) on load.
				// eslint-disable-next-line jsx-a11y/no-autofocus
				autoFocus={ ! isWelcomeGuideVisible }
			/>
		</div>
	);
}
