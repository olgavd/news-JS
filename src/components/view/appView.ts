import News, { type Article } from './news/news';

import Sources, { type Source } from './sources/sources';

type NewsResponse = {
    articles?: Article[];
};

type SourcesResponse = {
    sources?: Source[];
};

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: unknown) {
        const response = data as NewsResponse;
        const values = response?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: unknown) {
        const response = data as SourcesResponse;
        const values = response?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
