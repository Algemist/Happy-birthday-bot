import { ApiResponse } from "../types/responseBackend";
import { BASE_URL } from "../consts";

export async function getHappyBirthdayInfo(): Promise<ApiResponse[]> {
    try {
        const response = await fetch(BASE_URL + '?getbd', {
            method: 'POST',
        });

        if (!response.ok) {
            throw Error('api is not working right now');
        }

        return await response.json();

    } catch (e) {
        console.error('Error fetching employees list', e);
        throw e;
    }
}
