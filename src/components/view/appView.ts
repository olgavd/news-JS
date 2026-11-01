import News, { type Article } from './news/news';
import Sources, { type Source } from './sources/sources';

type ApiResponse<K extends string, T> = {
    [key in K]?: T[];
};

export type NewsResponse = ApiResponse<'articles', Article>;
export type SourcesResponse = ApiResponse<'sources', Source>;

export class AppView {
    private readonly news: News;
    private readonly sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsResponse): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    public drawSources(data: SourcesResponse): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
