import News, { type Article } from './news/news';
import Sources, { type Source } from './sources/sources';

type ApiResponse<K extends string, T> = {
    [key in K]?: T[];
}

export interface NewsResponse extends ApiResponse<'articles', Article> {}
export interface SourcesResponse extends ApiResponse<'sources', Source> {}

export class AppView {
    private news: News;
    private sources: Sources;

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
