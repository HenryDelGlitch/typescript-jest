import { Space } from "../Model/Model"

export class DataService {
    public async getSpaces(): Promise<Space[]> {
        const result: Space[] = []
        result.push({
            location: 'Paris',
            name: "Fuck you",
            spaceId: '123'
        })
        result.push({
            location: 'Paris',
            name: "Fuck you",
            spaceId: '124'
        })
        result.push({
            location: 'Paris',
            name: "Fuck you",
            spaceId: '125'
        })
        return result;
    }

    public async reserveSpace(spaceId: string): Promise<string | undefined> {
        if (spaceId === '123') {
            return ('5555')
        } else {
            return undefined
        }
    }
}