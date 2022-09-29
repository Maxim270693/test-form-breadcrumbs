import {JSONScheme} from "../constants/JSONScheme";

export const API = {
    getJSONSchema: () => {
        return new Promise((resolve, reject) => setTimeout(() => {
            resolve(JSONScheme)
        }, 1000))
    },
}
