import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { alias } from '@ember/object/computed';
import isVideo from '@lipagas/ember-core/utils/is-video-file';
import isImage from '@lipagas/ember-core/utils/is-image-file';

export default class FileRecordComponent extends Component {
    @service modalsManager;
    @service intl;
    @alias('args.file') file;

    get isVideo() {
        return isVideo(this.file.content_type);
    }

    get isImage() {
        return isImage(this.file.content_type);
    }

    get previewUrl() {
        return this.isImage ? this.file.url : '';
    }

    get fileBackgroundStyle() {
        return `background-size: 100% 100%; background-repeat: no-repeat; background-image: url('${this.previewUrl}'); width: 8rem; height: 8rem;`;
    }

    @action deleteFile(file) {
        return this.modalsManager.confirm({
            title: this.intl.t('storefront.component.file-record.delete-this-file'),
            body: this.intl.t('storefront.component.file-record.delete-this-file-you-will-unable-recover'),
            confirm: (modal) => {
                file.destroyRecord();

                if (typeof this.args.onDelete === 'function') {
                    this.args.onDelete(file);
                }

                modal.done();
            },
        });
    }
}
