import './sources.css';

export type Source = {
    id: string;
    name: string;
};

class Sources {
    public draw(data: Source[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (!sourceItemTemp) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
            const sourceName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');

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
