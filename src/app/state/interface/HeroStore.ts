
import { Character } from 'src/app/shared/interfaces/Character';
import { Comic } from 'src/app/shared/interfaces/Comic';

export interface HeroStore {
    characters: Array<Character>,
    comics: Array<Comic>,
    loading: boolean
}