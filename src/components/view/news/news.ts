import './news.css';

export type Article = {
    author: string | null;
    description: string | null;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string | null;
    source: {
        name: string;
    };
};

class News {
    draw(data: Article[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = <DocumentFragment>newsItemTemp.content.cloneNode(true);

            const newsItem = newsClone.querySelector('.news__item');
            const newsPhoto = newsClone.querySelector('.news__meta-photo');
            const newsAuthor = newsClone.querySelector('.news__meta-author');
            const newsDate = newsClone.querySelector('.news__meta-date');
            const newsTitle = newsClone.querySelector('.news__description-title');
            const newsSource = newsClone.querySelector('.news__description-source');
            const newsContent = newsClone.querySelector('.news__description-content');
            const newsLink = newsClone.querySelector('.news__read-more a');
    
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
