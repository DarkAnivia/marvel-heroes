
import { character } from 'src/app/shared/interfaces/character';

export interface HeroStore {
    characters: Array<character>,
    comics: Array<Object>
}