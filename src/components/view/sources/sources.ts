import './sources.css';

export type Source = {
    id: string;
    name: string;
};

class Sources {
    draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <DocumentFragment>sourceItemTemp.content.cloneNode(true);

            const sourceName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');

                if (!(sourceName instanceof HTMLElement) || !(sourceItem instanceof HTMLElement)) {
                return;
            }

                        sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);

            fragment.append(sourceClone);
        });

            const sourcesElement = document.querySelector('.sources');

        if (sourcesElement) {
            sourcesElement.append(fragment);
        }
    }
}

export default Sources;
