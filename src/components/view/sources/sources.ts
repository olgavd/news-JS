import './sources.css';

export interface Source {
    id: string;
    name: string;
}

enum SourcesSelector {
    TEMPLATE = '#sourceItemTemp',
    NAME = '.source__item-name',
    ITEM = '.source__item',
}

class Sources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>(SourcesSelector.TEMPLATE);

        if (!(sourceItemTemp instanceof HTMLTemplateElement)) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceName = sourceClone.querySelector<HTMLElement>(SourcesSelector.NAME);
            const sourceItem = sourceClone.querySelector<HTMLElement>(SourcesSelector.ITEM);

            if (!(sourceName instanceof HTMLElement) || !(sourceItem instanceof HTMLElement)) {
                return;
            }

            sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sourcesElement = document.querySelector('.sources');

        if (sourcesElement instanceof HTMLElement) {
            sourcesElement.innerHTML = '';
            sourcesElement.append(fragment);
        }
    }
}

export default Sources;
