import Loader from './loader';

enum EnvironmentVariable {
    API_URL = 'API_URL',
    API_KEY = 'API_KEY',
}

class AppLoader extends Loader {
    constructor() {
        const apiUrl = process.env[EnvironmentVariable.API_URL];
        const apiKey = process.env[EnvironmentVariable.API_KEY];

        if (!apiUrl || !apiKey) {
            throw new Error('API_URL or API_KEY is not defined');
        }

        super(apiUrl, {
            apiKey,
        });
    }
}

export default AppLoader;
