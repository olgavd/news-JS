type LoaderOptions = Record<string, string>;

interface RequestOptions {
    readonly endpoint: string;
    readonly options?: LoaderOptions;
}

type ResponseCallback<T> = (data: T) => void;

enum HttpMethod {
    GET = 'GET',
}

enum HttpStatus {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

class Loader {
    private readonly baseLink: string;
    private readonly options: Record<string, string>;

    constructor(baseLink: string, options: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T>(
        { endpoint, options = {} }: RequestOptions,
        callback: ResponseCallback<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load(HttpMethod.GET, endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === HttpStatus.UNAUTHORIZED || res.status === HttpStatus.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: LoaderOptions, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink.replace(/\/+$/, '')}/${endpoint.replace(/^\/+/, '')}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    public load<T>(
        method: HttpMethod,
        endpoint: string,
        callback: ResponseCallback<T>,
        options: LoaderOptions = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
