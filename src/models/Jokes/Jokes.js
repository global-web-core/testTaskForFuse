import { Http } from "../../globals";
import { CONTROLLERS } from "../../globals/constants/constants";

const getAll = async (query) => await Http.get(`${CONTROLLERS.jokes}${query}`);

export {
	getAll
}