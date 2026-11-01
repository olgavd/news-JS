import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import type { NewsResponse, SourcesResponse } from '../view/appView';

class App {
    private readonly controller: AppController;
    private readonly view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const sourcesElement = document.querySelector<HTMLElement>('.sources');
        if (sourcesElement instanceof HTMLElement) {
            sourcesElement.addEventListener('click', (e: MouseEvent) =>
                this.controller.getNews(e, (data) => this.view.drawNews(data as NewsResponse))
            );
            this.controller.getSources((data) => this.view.drawSources(data as SourcesResponse));
        }
    }
}

export default App;
