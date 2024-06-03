import Component from '@glimmer/component';

import { action } from '@ember/object';
import applyContextComponentArguments from '@lipagas/ember-core/utils/apply-context-component-arguments';
import contextComponentCallback from '@lipagas/ember-core/utils/context-component-callback';
import { tracked } from '@glimmer/tracking';

export default class OrderPanelComponent extends Component {
    @tracked context = null;

    constructor() {
        super(...arguments);

        applyContextComponentArguments(this);
    }

    /**
     * Sets the overlay context.
     *
     * @action
     * @param {OverlayContextObject} overlayContext
     */
    @action setOverlayContext(overlayContext) {
        this.context = overlayContext;
        contextComponentCallback(this, 'onLoad', ...arguments);
    }

    /**
     * Handles the cancel action.
     *
     * @method
     * @action
     * @returns {Boolean} Indicates whether the cancel action was overridden.
     */
    @action onPressCancel() {
        return contextComponentCallback(this, 'onPressCancel', this.customer);
    }
}
