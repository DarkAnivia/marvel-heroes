
import { Character } from 'src/app/shared/interfaces/Character';
import { Comic } from 'src/app/shared/interfaces/comic';

export interface HeroStore {
    characters: Array<Character>,
    comics: Array<Comic>
}