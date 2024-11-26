
export class DictionaryAPI {
    constructor() {
        this.apiEndpoint = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    }

    async searchWord(word) {
        try {
            const response = await fetch(`${this.apiEndpoint}${word}`);
            
            if (!response.ok) {
                //throw new Error('Word not found');
                if (response.status === 404){
                    throw new Error(`Word "${word}" not found in dictionary`);
                }
                throw new Error(`API request failed with status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Dictionary API error: ${error.message}`);
        }
        throw new Error('An unknown error occurred while fetching the dictionary data');
    }
    
    }
}