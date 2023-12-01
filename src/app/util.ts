export const randomNumberInRange = (min: number, max: number) => { 
    return Math.floor(Math.random()  
            * (max - min + 1)) + min; 
};

export const validate = (name: string, email: string, message: string) => {
    if (!name) {
        return 'Invalid name';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Invalid email address';
    } else if (!message) {
        return 'Invalid message';
    } else { return '' }
}