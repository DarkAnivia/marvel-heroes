
import { character } from 'src/app/shared/interfaces/character';

export interface store {
    characters: Array<character>,
    comics: Array<Object>
}