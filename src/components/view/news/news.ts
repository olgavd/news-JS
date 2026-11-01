import './news.css';

export interface Article {
    author: string | null;
    description: string | null;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string | null;
    source: Source;
}

export interface Source {
    name: string;
}

enum NewsSelector {
    ITEM = '.news__item',
    PHOTO = '.news__meta-photo',
    AUTHOR = '.news__meta-author',
    DATE = '.news__meta-date',
    TITLE = '.news__description-title',
    SOURCE = '.news__description-source',
    CONTENT = '.news__description-content',
    LINK = '.news__read-more a',
}

class News {
    public draw(data: Article[]): void {
        const news = data.slice(0, 10);
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector<HTMLTemplateElement>('#newsItemTemp');

        if (!newsItemTemp) {
            return;
        }

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
            const newsItem = newsClone.querySelector(NewsSelector.ITEM);
            const newsPhoto = newsClone.querySelector(NewsSelector.PHOTO);
            const newsAuthor = newsClone.querySelector(NewsSelector.AUTHOR);
            const newsDate = newsClone.querySelector(NewsSelector.DATE);
            const newsTitle = newsClone.querySelector(NewsSelector.TITLE);
            const newsSource = newsClone.querySelector(NewsSelector.SOURCE);
            const newsContent = newsClone.querySelector(NewsSelector.CONTENT);
            const newsLink = newsClone.querySelector(NewsSelector.LINK);

            if (
                !(newsItem instanceof HTMLElement) ||
                !(newsPhoto instanceof HTMLElement) ||
                !(newsAuthor instanceof HTMLElement) ||
                !(newsDate instanceof HTMLElement) ||
                !(newsTitle instanceof HTMLElement) ||
                !(newsSource instanceof HTMLElement) ||
                !(newsContent instanceof HTMLElement) ||
                !(newsLink instanceof HTMLAnchorElement)
            ) {
                return;
            }

            if (idx % 2) newsItem.classList.add('alt');

            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsAuthor.textContent = item.author || item.source.name;
            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            newsTitle.textContent = item.title;
            newsSource.textContent = item.source.name;
            newsContent.textContent = item.description;
            newsLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsElement = document.querySelector('.news');

        if (newsElement instanceof HTMLElement) {
            newsElement.innerHTML = '';
            newsElement.appendChild(fragment);
        }
    }
}

export default News;
