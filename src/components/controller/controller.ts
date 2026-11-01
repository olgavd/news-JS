import AppLoader from './appLoader';
import type { NewsResponse, SourcesResponse } from '../view/appView';

type ApiResponse = NewsResponse | SourcesResponse;
type ResponseCallback<T extends ApiResponse> = (data: T) => void;

enum ApiEndpoint {
    SOURCES = '/mocks/sources',
    EVERYTHING = '/mocks/everything',
}

class AppController extends AppLoader {
    public getSources(callback: ResponseCallback<SourcesResponse>): void {
        super.getResp(
            {
                endpoint: ApiEndpoint.SOURCES,
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: ResponseCallback<NewsResponse>): void {
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
                            endpoint: ApiEndpoint.EVERYTHING,
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
