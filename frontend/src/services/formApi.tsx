const API_URL = 'https://276007d38cb4.ngrok-free.app/send-form';

export interface FormData {
    title: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
}

export const sendFormData = async (data: FormData): Promise<boolean> => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Failed to send form');
        }

        return true;
    } catch (error) {
        console.error('Error sending form:', error);
        return false;
    }
};
