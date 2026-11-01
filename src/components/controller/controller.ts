import AppLoader from './appLoader';

type ResponseCallback = (data: unknown) => void;

class AppController extends AppLoader {
    public getSources(callback: ResponseCallback): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: ResponseCallback): void {

        const eventTarget = e.target;

        if (!(eventTarget instanceof HTMLElement)) {
            return;
        }

        const newsContainer = e.currentTarget;

        if (!(newsContainer instanceof HTMLElement)) {
            return;
        }

        let target: HTMLElement = eventTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                
                if (!sourceId) {
                    return;
                }

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }

            const parent = target.parentElement;
            
            if (!parent) {

                return;
            }

            target = parent;

        }
    }
}

export default AppController;
